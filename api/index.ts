import express from 'express';
import { GoogleGenAI, Type } from '@google/genai';

const app = express();
app.use(express.json());

// Standard prompt for word analysis
const WORD_ANALYSIS_PROMPT = (word: string) => `Generate educational data for the English word '${word}'. It must be suitable for grades 2-6 (Lexile < 800L). 
Analyze the word for phonics patterns and morphology.

STRICT CURRICULUM MAPPING RULES (ONLY pick one category and sub-rule if applicable):

1. Prefixes:
   - un- (Not), re- (Again), dis- (Negative), mis- (Wrongly), pre- (Before), in-/im- (Not), non- (Not), over- (Too much), sub- (Under)

2. Suffixes & Adverbs:
   - -ly (No change), -ly (y to ily), -ly (le to ly), -ly (ic/al to ally), -ful (Full of), -less (Without), -ness (State), -ment (Action), -able (Can be)

3. Phonics & Spelling:
   - "Short /u/ as 'o'", "Short /i/ as 'y'", "Long /a/ as 'ey'", "Long /a/ as 'ai'", "Long /a/ as 'ei'", "Sound /ur/ as 'ear'", "Sound /k/ as 'ch'", "gue / que", "-ary"

4. Homophones:
   - Set 1 (Basic), Set 2 (Advanced), Set 3 (Master)

MAPPING INSTRUCTIONS:
- If the word matches a rule, set 'curriculumCategory' to the Category Name (Prefixes, Suffixes, Phonics, Homophones) and 'curriculumSub' to the EXACT rule name from the list above.
- Identify the 'partOfSpeech' correctly (noun, verb, adjective, adverb).

SUMMA AI COLOR CODING SYSTEM for 'decoratedWord':
1. [red]...[/red] -> Short Vowels (短母音). Usage: Basic short vowel sounds or irregular short sounds. e.g., br[red]ea[/red]th, h[red]e[/red]lp.
2. [skyblue]...[/skyblue] -> Long Vowels (長母音/Vowel Teams). Usage: Vowel teams where two vowels make a long sound. e.g., l[skyblue]ea[/skyblue]ves, gr[skyblue]ea[/skyblue]t.
3. [orange]...[/orange] -> Digraphs/Blends (二合字母). Usage: Two or more letters acting as a single sound. e.g., [orange]th[/orange]ick, [orange]sh[/orange]adow.
4. [purple]...[/purple] -> R-controlled (R延伸母音). Usage: Vowels followed and controlled by 'R' (ar, er, ir, or, ur). e.g., sh[purple]ar[/purple]p, f[purple]er[/purple]n.
5. [blue]...[/blue] -> Silent Letters (不發音字母). Rule: Letters written but not pronounced. e.g., leav[blue]e[/blue]s, [blue]k[/blue]night, clim[blue]b[/blue].
6. [green]...[/green] -> Variant/Schwa (變音/中性音). Usage: Variant vowels, Schwa sounds, or highly irregular pronunciations. e.g., [green]o[/green]f, syst[green]e[/green]m.

Return ONLY a JSON object that strictly adheres to the provided schema.`;

// API Route for Word Generation
app.post('/api/generate-word', async (req, res) => {
  try {
    const { word } = req.body;
    if (!word) {
      return res.status(400).json({ error: 'Word is required' });
    }

    // Attempt to find API key in various environment variables
    const apiKey = 
      process.env.GEMINI_API_KEY || 
      process.env.VITE_GEMINI_API_KEY || 
      process.env.snapaw || 
      process.env.VITE_SNAPAW || 
      process.env.CUSTOM_GEMINI_API_KEY;

    if (!apiKey || apiKey === 'undefined' || apiKey === 'null') {
      return res.status(500).json({ 
        error: 'Star Crystal Missing! Please add a Secret named "GEMINI_API_KEY" in your hosting provider\'s environment variables (e.g., EdgeOne/Vercel settings).' 
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: WORD_ANALYSIS_PROMPT(word),
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["morphology", "meaning", "partOfSpeech", "exampleSentence", "story", "decoratedWord", "phonicsRules"],
          properties: {
            morphology: {
              type: Type.OBJECT,
              properties: {
                prefix: { type: Type.STRING },
                root: { type: Type.STRING },
                suffix: { type: Type.STRING }
              },
              required: ["root"]
            },
            meaning: { type: Type.STRING },
            partOfSpeech: { 
              type: Type.STRING,
              description: "one of: 'noun', 'verb', 'adjective', 'adverb'"
            },
            exampleSentence: { type: Type.STRING },
            story: { type: Type.STRING },
            curriculumCategory: { 
              type: Type.STRING,
              description: "One of: 'Prefixes', 'Suffixes', 'Phonics', 'Homophones', 'Exceptions', or null"
            },
            curriculumSub: { type: Type.STRING, description: "The specific rule name or null" },
            decoratedWord: { type: Type.STRING, description: "The word with [color]letter[/color] tags (red: short vowels, blue: long, skyblue: vowel teams, orange: digraphs)" },
            phonicsRules: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (!response.text) {
      return res.status(500).json({ error: 'AI returned an empty response' });
    }

    const data = JSON.parse(response.text.trim());
    res.json(data);
  } catch (error) {
    console.error('Error generating word:', error);
    res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Failed to generate word data' 
    });
  }
});

export default app;
