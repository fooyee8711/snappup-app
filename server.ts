import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

// API Route for Gemini
app.post('/api/generate-word', async (req, res) => {
    try {
      const { word } = req.body;
      if (!word) {
        return res.status(400).json({ error: 'Word is required' });
      }

      const prompt = `Generate educational data for the English word '${word}'. It must be suitable for grades 2-6 (Lexile < 800L). 
Analyze the word for phonics patterns and morphology.

STRICT CURRICULUM MAPPING RULES:
1. Check if the word fits into these categories:
   - 'Prefixes' if it starts with 'un-', 're-', 'pre-', 'dis-', 'mis-', 'in-', 'im-', 'non-', 'over-', 'sub-'.
   - 'Suffixes' if it ends with '-ly', '-ily', '-ally', '-ful', '-less', '-ness', '-ment', '-able', '-ible'.
   - 'Exceptions' for words like 'truly', 'duly', 'wholly'.
   - 'Phonics' for specific spelling rules (e.g., Silent e, Digraphs).
2. For 'Prefixes', set 'curriculumSub' to: '[prefix] ([meaning])' e.g., 'un- (Not)', 're- (Again)'.
3. For 'Suffixes', set 'curriculumSub' to:
   - '-ly (No change)', '-ily (y -> ily)', '-ly (le -> ly)', '-ally (ic/al -> ally)'
   - '-ful (Full of)', '-less (Without)', '-ness (State)', '-ment (Action)', '-able (Can be)'
4. Identify the 'partOfSpeech' correctly.

Return ONLY a valid JSON object with the following structure:
{
  "morphology": { "prefix": "string", "root": "string", "suffix": "string" },
  "meaning": "string (simple)",
  "partOfSpeech": "one of: 'noun', 'verb', 'adjective', 'adverb'",
  "exampleSentence": "string",
  "story": "string (3-4 sentences)",
  "curriculumCategory": "One of: 'Prefixes', 'Suffixes', 'Phonics', 'Homophones', 'Exceptions', or null",
  "curriculumSub": "The specific rule name mentioned above or null",
  "decoratedWord": "The word with [color]letter[/color] tags (red: short vowels, blue: long, skyblue: vowel teams, orange: digraphs)",
  "phonicsRules": ["array of strings"]
}`;

      // Use snapaw as the primary API key, fallback to standard Gemini keys
      const apiKey = process.env.snapaw || process.env.CUSTOM_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: 'API key is not configured. Please add your key as "snapaw" in the environment variables.' 
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const response = await (ai as any).models.generateContent({
        model: 'gemini-flash-latest',
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
      let errorMessage = 'Failed to generate word data';
      if (error instanceof Error) {
        try {
          const parsed = JSON.parse(error.message);
          if (parsed.error && parsed.error.message) {
            errorMessage = parsed.error.message;
          } else {
            errorMessage = error.message;
          }
        } catch (e) {
          errorMessage = error.message;
        }
      }
      
      if (errorMessage.includes('API key not valid')) {
        errorMessage = 'Invalid API Key. Please update your GEMINI_API_KEY in the AI Studio Secrets panel (Settings).';
      }
      
      res.status(500).json({ error: errorMessage });
    }
  });

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

// Export the app for Vercel (though we use api/index.ts now)
export default app;
