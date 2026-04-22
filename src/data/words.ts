export interface Morphology {
  prefix?: string;
  root: string;
  suffix?: string;
}

export interface RelatedWord {
  word: string;
  meaning: string;
}

export interface WordEntry {
  id: string;
  word: string;
  morphology: Morphology;
  meaning: string;
  exampleSentence: string;
  story: string;
  relatedWords: RelatedWord[];
  category: string;
  curriculumCategory?: 'Prefixes' | 'Suffixes' | 'Phonics' | 'Homophones' | 'Exceptions' | 'Cool' | 'Tricky' | 'Difficulty' | 'Nouns';
  curriculumSub?: string;
  level?: string;
  bookSentence?: string;
  childMeaning?: string;
  magicUsage?: string;
  decoratedWord?: string;
  phonicsRules?: string[];
  testDate?: string; // Format: YYYY-MM-DD
  partOfSpeech?: 'noun' | 'verb' | 'adjective' | 'adverb' | 'conjunction' | 'preposition' | 'other';
}

export const words: WordEntry[] = [
  {
    id: "dict-mar1-1",
    word: "league",
    morphology: { root: "league" },
    meaning: "A group of sports teams or clubs that play against each other.",
    exampleSentence: "Our team is at the top of the football league.",
    story: "The **league** started in the spring. Every team in the **league** wanted to win the trophy. It takes many games to find the best in the **league**!",
    relatedWords: [],
    category: "Sports",
    testDate: "2026-03-01",
    decoratedWord: "leag[blue]ue[/blue]",
    partOfSpeech: "noun"
  },
  {
    id: "dict-mar1-2",
    word: "plague",
    morphology: { root: "plague" },
    meaning: "A serious disease that spreads quickly.",
    exampleSentence: "The history book told us about a great plague long ago.",
    story: "Long ago, a terrible **plague** swept through the city. Doctors worked hard to stop the **plague**. Today, we study the **plague** to stay safe.",
    relatedWords: [],
    category: "History",
    testDate: "2026-03-01",
    decoratedWord: "plag[blue]ue[/blue]",
    partOfSpeech: "noun"
  },
  {
    id: "dict-mar1-3",
    word: "rogue",
    morphology: { root: "rogue" },
    meaning: "A person or animal that behaves in a wild or dishonest way.",
    exampleSentence: "The rogue elephant wandered away from the herd.",
    story: "A **rogue** wave surprised the sailors. They had to be careful of the **rogue** wind, too. Being a **rogue** means not following the usual path.",
    relatedWords: [],
    category: "Character",
    testDate: "2026-03-01",
    decoratedWord: "rog[blue]ue[/blue]",
    partOfSpeech: "noun"
  },
  {
    id: "dict-mar1-4",
    word: "vague",
    morphology: { root: "vague" },
    meaning: "Not clear or specific.",
    exampleSentence: "His answer was very vague and didn't help much.",
    story: "The map was a bit **vague** about where to go. I had a **vague** feeling I was being followed. We need clear plans, not **vague** guesses!",
    relatedWords: [],
    category: "Everyday Life",
    testDate: "2026-03-01",
    decoratedWord: "vag[blue]ue[/blue]",
    partOfSpeech: "adjective"
  },
  {
    id: "dict-mar1-5",
    word: "fatigue",
    morphology: { root: "fatigue" },
    meaning: "Extreme tiredness from work or exercise.",
    exampleSentence: "The long hike caused great fatigue.",
    story: "After the marathon, **fatigue** set in. The runners felt the **fatigue** in their legs. A good sleep is the best cure for **fatigue**.",
    relatedWords: [{ word: "fatigued", meaning: "Very tired" }],
    category: "Health",
    testDate: "2026-03-01",
    decoratedWord: "fatig[blue]ue[/blue]",
    partOfSpeech: "noun"
  },
  {
    id: "dict-mar1-6",
    word: "unique",
    morphology: { root: "unique" },
    meaning: "The only one of its kind; special.",
    exampleSentence: "Every snowflake has a unique pattern.",
    story: "SnapPup has a **unique** way of barking. We found a **unique** shell on the beach. Being **unique** is part of what makes you special!",
    relatedWords: [],
    category: "Character",
    testDate: "2026-03-01",
    decoratedWord: "uni[blue]que[/blue]",
    partOfSpeech: "adjective"
  },
  {
    id: "dict-mar1-7",
    word: "antique",
    morphology: { root: "antique" },
    meaning: "Something made long ago that is valuable.",
    exampleSentence: "My grandmother has a beautiful antique clock.",
    story: "The shop was full of **antique** furniture. We found an **antique** coin in the garden. Each **antique** tells a story from the past.",
    relatedWords: [],
    category: "History",
    testDate: "2026-03-01",
    decoratedWord: "anti[blue]que[/blue]",
    partOfSpeech: "noun"
  },
  {
    id: "dict-mar1-8",
    word: "mosque",
    morphology: { root: "mosque" },
    meaning: "A building where Muslims go to pray.",
    exampleSentence: "The beautiful mosque had a large dome.",
    story: "We visited the town **mosque** on our trip. The **mosque** was very quiet and peaceful inside. People gathered at the **mosque** for prayer.",
    relatedWords: [],
    category: "Culture",
    testDate: "2026-03-01",
    decoratedWord: "mos[blue]que[/blue]",
    partOfSpeech: "noun"
  },
  {
    id: "dict-mar1-9",
    word: "cheque",
    morphology: { root: "cheque" },
    meaning: "A printed form used to pay for things through a bank.",
    exampleSentence: "He wrote a cheque to pay for the groceries.",
    story: "Dad had to sign the **cheque** carefully. If you lose a **cheque**, you must tell the bank. A **cheque** is like a promise of money.",
    relatedWords: [],
    category: "Money",
    testDate: "2026-03-01",
    decoratedWord: "che[blue]que[/blue]",
    partOfSpeech: "noun"
  },
  {
    id: "dict-mar1-10",
    word: "technique",
    morphology: { root: "techniq", suffix: "ue" },
    meaning: "A special way of doing something.",
    exampleSentence: "The artist used a new painting technique.",
    story: "To bake the perfect cake, you need a good **technique**. Practicing your football **technique** makes you a better player. Learning a new **technique** takes time!",
    relatedWords: [{ word: "technical", meaning: "Relating to a special skill" }],
    category: "Skills",
    testDate: "2026-03-01",
    decoratedWord: "techni[blue]que[/blue]",
    partOfSpeech: "noun"
  }
];
