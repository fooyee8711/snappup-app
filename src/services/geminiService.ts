import { GoogleGenAI, Type } from "@google/genai";

// Standard prompt for word analysis
const WORD_ANALYSIS_PROMPT = (word: string) => `Generate educational data for the English word '${word}'. It must be suitable for grades 2-6 (Lexile < 800L). 
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

Return ONLY a JSON object that strictly adheres to the provided schema.`;

export async function generateWordData(word: string) {
  // Use the exact pattern required by the AI Studio harness
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'undefined') {
    throw new Error('Star Crystal Missing! In AI Studio Secrets, please add "VITE_GEMINI_API_KEY" as a new Secret.');
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
    throw new Error('Empty response from AI');
  }

  try {
    return JSON.parse(response.text.trim());
  } catch (e) {
    console.error('Failed to parse AI response:', response.text);
    throw new Error('AI returned an invalid data format');
  }
}
