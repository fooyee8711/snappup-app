export interface RuleSub {
  name: string;
  description: string;
  example: string;
}

export interface RuleCategory {
  id: string;
  isSpecial?: boolean;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
  color: string;
  lightColor: string;
  borderColor: string;
  rules: RuleSub[];
}

export const CURRICULUM_RULES: RuleCategory[] = [
  {
    id: 'Prefixes',
    title: 'Prefixes',
    description: 'Learn how to change meanings by adding bits to the beginning.',
    icon: 'Layers',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    rules: [
      { name: 'un- (Not)', description: 'Means not or opposite of.', example: 'unhappy, unsafe' },
      { name: 're- (Again)', description: 'Means to do something again.', example: 'rewrite, return' },
      { name: 'dis- (Negative)', description: 'Means not or opposite of.', example: 'dislike, disagree' },
      { name: 'mis- (Wrongly)', description: 'Means badly or wrongly.', example: 'misplace, misread' },
      { name: 'pre- (Before)', description: 'Means before.', example: 'preview, preheat' },
      { name: 'in-/im- (Not)', description: 'Means not.', example: 'impossible, invisible' },
      { name: 'non- (Not)', description: 'Means not.', example: 'nonstop, nonsense' },
      { name: 'over- (Too much)', description: 'Means too much.', example: 'overeat, oversleep' },
      { name: 'sub- (Under)', description: 'Means under or below.', example: 'subway, submarine' }
    ]
  },
  {
    id: 'Suffixes',
    title: 'Suffixes & Adverbs',
    description: 'Master how to transform words and change their roles.',
    icon: 'Type',
    color: 'bg-pink-500',
    lightColor: 'bg-pink-50',
    borderColor: 'border-pink-100',
    rules: [
      { name: '-ly (No change)', description: 'Add -ly to most adjectives.', example: 'kindly, loudly' },
      { name: '-ly (y to ily)', description: 'Change y to i before adding -ly.', example: 'happily, easily' },
      { name: '-ly (le to ly)', description: 'Drop the e and add y.', example: 'gentle -> gently' },
      { name: '-ly (ic/al to ally)', description: 'Add -ally to words ending in -ic.', example: 'automatically, basically' },
      { name: '-ful (Full of)', description: 'Means full of or having.', example: 'careful, joyful' },
      { name: '-less (Without)', description: 'Means without.', example: 'fearless, homeless' },
      { name: '-ness (State)', description: 'The state or quality of.', example: 'kindness, happiness' },
      { name: '-ment (Action)', description: 'The result or action of.', example: 'payment, enjoyment' },
      { name: '-able (Can be)', description: 'Able to be.', example: 'teachable, washable' }
    ]
  },
  {
    id: 'Phonics',
    title: 'Phonics & Spelling',
    description: 'Crack the code of tricky English spelling patterns.',
    icon: 'Music',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    rules: [
      { name: "Short /u/ as 'o'", description: "The 'o' sounds like a short 'u'.", example: "mother, brother, love" },
      { name: "Short /i/ as 'y'", description: "The 'y' sounds like a short 'i'.", example: "gym, mystery, crystal" },
      { name: "Long /a/ as 'ey'", description: "The 'ey' makes a long 'a' sound.", example: "grey, obey, prey" },
      { name: "Long /a/ as 'ai'", description: "The 'ai' makes a long 'a' sound.", example: "train, rain, paint" },
      { name: "Long /a/ as 'ei'", description: "The 'ei' makes a long 'a' sound.", example: "eight, weight, vein" },
      { name: "Sound /ur/ as 'ear'", description: "The 'ear' sounds like 'ur'.", example: "learn, earth, early" },
      { name: "Sound /k/ as 'ch'", description: "The 'ch' sounds like 'k'.", example: "school, echo, chorus" },
      { name: "gue / que", description: "Hard 'g' or 'k' endings.", example: "tongue, fatigue, unique" },
      { name: "-ary", description: "Words ending in -ary.", example: "library, dictionary" }
    ]
  },
  {
    id: 'Homophones',
    title: 'Homophones',
    description: 'Identify words that sound twin-like but have different lives.',
    icon: 'Shuffle',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    rules: [
      { name: "Set 1 (Basic)", description: "Common pairs.", example: "won/one, buy/by, blue/blew" },
      { name: "Set 2 (Advanced)", description: "Trickier pairs.", example: "flour/flower, knight/night" },
      { name: "Set 3 (Master)", description: "Elite level pairs.", example: "stationary/stationery" }
    ]
  },
  {
    id: 'Cool',
    isSpecial: true,
    title: 'Cool Words',
    description: 'Impressive words that sound powerful or look unique.',
    icon: 'Sparkles',
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    rules: []
  },
  {
    id: 'Tricky',
    isSpecial: true,
    title: 'Non-Phonetic Words',
    description: 'Words that break the rules and don\'t sound like they look.',
    icon: 'Ghost',
    color: 'bg-rose-500',
    lightColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    rules: []
  },
  {
    id: 'Difficulty',
    isSpecial: true,
    title: 'Difficulty Words',
    description: 'Master the toughest spelling hurdles in the English language.',
    icon: 'Flame',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    rules: []
  },
  {
    id: 'Nouns',
    isSpecial: true,
    title: 'Noun Collector',
    description: 'Build your vocabulary category by category.',
    icon: 'Package',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    rules: []
  }
];
