import express from 'express';
import { GoogleGenAI } from '@google/genai';

const app = express();
app.use(express.json());

// API Route for Word Generation
app.post('/api/generate-word', async (req, res) => {
  try {
    const { word } = req.body;
    if (!word) {
      return res.status(400).json({ error: 'Word is required' });
    }

    const minimaxKey = process.env.snapaw;
    const prompt = `Generate educational data for the English word '${word}'. It must be suitable for grades 2-6 (Lexile < 800L). Return ONLY a valid JSON object with the following structure (no markdown, no code blocks, just the JSON):
{
  "morphology": {
    "prefix": "string (or empty string if none)",
    "root": "string",
    "suffix": "string (or empty string if none)"
  },
  "meaning": "string (simple definition)",
  "exampleSentence": "string",
  "story": "string (3-4 sentences, engaging, includes the target word 1-3 times)"
}`;

    if (minimaxKey) {
      const response = await fetch('https://api.minimax.chat/v1/text/chatcompletion_v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${minimaxKey}`
        },
        body: JSON.stringify({
          model: "abab6.5s-chat",
          messages: [
            { role: "system", content: "You are a helpful assistant that outputs only JSON." },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`MiniMax API error: ${JSON.stringify(errorData)}`);
      }

      const result = await response.json();
      const content = result.choices[0].message.content;
      return res.json(JSON.parse(content));
    }

    const apiKey = process.env.CUSTOM_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'API key is not configured. Please add GEMINI_API_KEY or MINIMAX_API_KEY to your environment variables.' 
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await (ai as any).models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || '';
    const data = JSON.parse(text);
    res.json(data);
  } catch (error) {
    console.error('Error generating word:', error);
    res.status(500).json({ error: error instanceof Error ? error.message : 'Failed to generate word data' });
  }
});

export default app;
