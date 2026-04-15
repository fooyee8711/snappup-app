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
  level?: string;
  bookSentence?: string;
  childMeaning?: string;
  magicUsage?: string;
  decoratedWord?: string;
  phonicsRules?: string[];
}

export const words: WordEntry[] = [
  {
    id: "1",
    word: "unhelpful",
    morphology: { prefix: "un", root: "help", suffix: "ful" },
    meaning: "Not giving help or being useful.",
    exampleSentence: "The old map was very unhelpful.",
    story: "Tim was lost in the forest. He looked at his map, but it was **unhelpful**. He asked a squirrel for directions, but the squirrel was also **unhelpful**. Finally, he found a sign that pointed home!",
    relatedWords: [
      { word: "helper", meaning: "A person who helps" },
      { word: "helpless", meaning: "Unable to defend oneself or act without help" }
    ],
    category: "Everyday Life"
  },
  {
    id: "2",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again.",
    exampleSentence: "I had to rewrite my homework.",
    story: "Sarah spilled juice on her essay. Her teacher told her to **rewrite** it. She had to **rewrite** the whole page, but this time her handwriting was much neater.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes books or articles" },
      { word: "writing", meaning: "The activity of creating pieces of written work" }
    ],
    category: "School"
  },
  {
    id: "3",
    word: "careful",
    morphology: { prefix: "", root: "care", suffix: "ful" },
    meaning: "Making sure to avoid danger or mistakes.",
    exampleSentence: "Be careful when you cross the street.",
    story: "The floor was wet and slippery. \"Be **careful**!\" yelled Mom. Tom was very **careful** as he walked, making sure not to fall.",
    relatedWords: [
      { word: "careless", meaning: "Not giving enough attention or thought" },
      { word: "caring", meaning: "Displaying kindness and concern for others" }
    ],
    category: "Safety"
  },
  {
    id: "4",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like someone or something.",
    exampleSentence: "I dislike eating green beans.",
    story: "Mary really seemed to **dislike** rainy days. She would frown and say how much she would **dislike** getting her shoes wet. But then she saw a beautiful rainbow!",
    relatedWords: [
      { word: "likely", meaning: "Such as well might happen or be true" },
      { word: "likeness", meaning: "The fact or quality of being alike" }
    ],
    category: "Emotions"
  },
  {
    id: "5",
    word: "colorful",
    morphology: { prefix: "", root: "color", suffix: "ful" },
    meaning: "Having many bright colors.",
    exampleSentence: "The parrot has colorful feathers.",
    story: "The garden was full of **colorful** flowers. A **colorful** butterfly landed on a red rose. It was the most beautiful thing I had ever seen.",
    relatedWords: [
      { word: "colorless", meaning: "Lacking color" },
      { word: "coloring", meaning: "The process of adding color to something" }
    ],
    category: "Art"
  },
  {
    id: "6",
    word: "preview",
    morphology: { prefix: "pre", root: "view", suffix: "" },
    meaning: "To see something before others do.",
    exampleSentence: "We got a preview of the new movie.",
    story: "The director gave us a **preview** of the new cartoon. During the **preview**, everyone laughed so hard. I can't wait for the real movie to come out!",
    relatedWords: [
      { word: "viewer", meaning: "A person who looks at or inspects something" },
      { word: "review", meaning: "A formal assessment or examination of something" }
    ],
    category: "Entertainment"
  },
  {
    id: "7",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who helps others learn.",
    exampleSentence: "My teacher is very nice.",
    story: "Mr. Brown is a great **teacher**. Every day, the **teacher** reads us a funny story. We always learn something new in his class.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation, profession, or work of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "8",
    word: "friendly",
    morphology: { prefix: "", root: "friend", suffix: "ly" },
    meaning: "Kind and pleasant.",
    exampleSentence: "The new girl in class is very friendly.",
    story: "The giant dog looked scary, but he was actually very **friendly**. He gave me a **friendly** lick on the face and wagged his tail happily.",
    relatedWords: [
      { word: "friendship", meaning: "The emotions or conduct of friends" },
      { word: "friendless", meaning: "Having no friends" }
    ],
    category: "Social"
  },
  {
    id: "9",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To go or come back to a place.",
    exampleSentence: "I need to return this book to the library.",
    story: "The astronaut had to **return** to Earth. It took three days to **return** from the moon. He was so happy to see his family again.",
    relatedWords: [
      { word: "turner", meaning: "A person who turns something" },
      { word: "turning", meaning: "A place where a road branches off from another" }
    ],
    category: "Adventure"
  },
  {
    id: "10",
    word: "unsafe",
    morphology: { prefix: "un", root: "safe", suffix: "" },
    meaning: "Not safe; dangerous.",
    exampleSentence: "It is unsafe to play near the fire.",
    story: "The old bridge looked very **unsafe**. The sign said it was **unsafe** to cross. So, we walked around the river instead.",
    relatedWords: [
      { word: "safely", meaning: "In a way that gives protection from danger" },
      { word: "safety", meaning: "The condition of being protected from danger" }
    ],
    category: "Safety"
  },
  {
    id: "11",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Fond of games and amusement.",
    exampleSentence: "The playful kitten chased the yarn.",
    story: "The **playful** dolphin jumped out of the water. It was so **playful** that it splashed everyone on the boat. We all laughed out loud.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Pets"
  },
  {
    id: "12",
    word: "misplace",
    morphology: { prefix: "mis", root: "place", suffix: "" },
    meaning: "To put something in the wrong place and lose it.",
    exampleSentence: "I often misplace my keys.",
    story: "Dad always seems to **misplace** his glasses. Today, he managed to **misplace** them in the fridge! We found them next to the milk.",
    relatedWords: [
      { word: "placement", meaning: "The action of putting someone or something in a particular place" },
      { word: "replace", meaning: "Take the place of" }
    ],
    category: "Everyday Life"
  },
  {
    id: "13",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Not happy; sad.",
    exampleSentence: "The boy felt unhappy when his toy broke.",
    story: "Leo was **unhappy** because it was raining. He felt **unhappy** that he couldn't play outside. But then he found a fun book to read!",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "14",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again.",
    exampleSentence: "They had to rebuild the sandcastle.",
    story: "The big wave knocked down the tower. The kids decided to **rebuild** it. They worked together to **rebuild** a stronger wall.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "15",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Without fear; brave.",
    exampleSentence: "The fearless explorer entered the dark cave.",
    story: "The **fearless** cat jumped onto the high fence. She was so **fearless** that she wasn't afraid of the big dog. Everyone cheered for the brave kitty.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "16",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion.",
    exampleSentence: "It is okay to disagree with your friends.",
    story: "Ben and Sam **disagree** on which game to play. They often **disagree** about the rules, but they always find a way to have fun together.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "17",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pretty or pleasing to look at.",
    exampleSentence: "The sunset was very beautiful.",
    story: "We saw a **beautiful** garden full of roses. The **beautiful** flowers smelled so sweet. It was a wonderful day in the park.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "18",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat something before using it.",
    exampleSentence: "Remember to preheat the oven.",
    story: "Mom told me to **preheat** the oven for the cookies. While the oven was on **preheat**, we mixed the dough. Soon, the house smelled like fresh cookies!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "19",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who helps.",
    exampleSentence: "I am a good helper at home.",
    story: "Anna is a great **helper** in the classroom. The **helper** of the day gets to lead the line. She loves helping her teacher.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "School"
  },
  {
    id: "20",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind or nice way.",
    exampleSentence: "She spoke kindly to the new student.",
    story: "The old man smiled **kindly** at the children. He **kindly** offered them some apples from his tree. Everyone felt happy because of his kindness.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "21",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "22",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "23",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks.",
    exampleSentence: "I am thankful for my family.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "24",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "25",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "26",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "27",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "28",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "29",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "30",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "31",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "32",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "33",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "34",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "35",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "36",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "37",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Quiet and calm.",
    exampleSentence: "The lake was very peaceful in the morning.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "38",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A test given before a lesson.",
    exampleSentence: "We took a pretest to see what we already knew.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "39",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "40",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "41",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "42",
    word: "repay",
    morphology: { prefix: "re", root: "pay", suffix: "" },
    meaning: "To pay back money that you owe.",
    exampleSentence: "I will repay you for the lunch tomorrow.",
    story: "Sam borrowed five dollars from his sister. He promised to **repay** her as soon as he got his allowance. He felt good when he was able to **repay** the debt.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "43",
    word: "breathless",
    morphology: { prefix: "", root: "breath", suffix: "less" },
    meaning: "Out of breath; gasping.",
    exampleSentence: "The race left the runners breathless.",
    story: "After running up the hill, I was **breathless**. I sat down until I was no longer **breathless**. It was a long way to the top!",
    relatedWords: [
      { word: "breathing", meaning: "The process of taking air into the lungs" },
      { word: "breathtaking", meaning: "Astonishing or awe-inspiring" }
    ],
    category: "Activities"
  },
  {
    id: "44",
    word: "disobey",
    morphology: { prefix: "dis", root: "obey", suffix: "" },
    meaning: "To not follow rules or orders.",
    exampleSentence: "You should never disobey the safety rules.",
    story: "The puppy would sometimes **disobey** its owner. If you **disobey** the signs, you might get in trouble. It is important to listen carefully.",
    relatedWords: [
      { word: "obedience", meaning: "Compliance with an order or request" },
      { word: "obedient", meaning: "Complying or willing to comply with orders" }
    ],
    category: "Social"
  },
  {
    id: "45",
    word: "wonderful",
    morphology: { prefix: "", root: "wonder", suffix: "ful" },
    meaning: "Very good; amazing.",
    exampleSentence: "We had a wonderful time at the zoo.",
    story: "The magician performed a **wonderful** trick. Everyone thought it was **wonderful** how he made the bird appear. It was a day full of surprises.",
    relatedWords: [
      { word: "wondering", meaning: "A feeling of surprise or admiration" },
      { word: "wonderment", meaning: "A state of awed admiration" }
    ],
    category: "Emotions"
  },
  {
    id: "46",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something in advance.",
    exampleSentence: "We had to prepay for the bus tickets.",
    story: "If you **prepay** for your meal, you can skip the line. Mom decided to **prepay** for the whole family. It made our trip much easier.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "47",
    word: "dancer",
    morphology: { prefix: "", root: "dance", suffix: "er" },
    meaning: "A person who dances.",
    exampleSentence: "The dancer moved gracefully across the floor.",
    story: "The **dancer** practiced for hours every day. Every **dancer** in the show wore a beautiful costume. They all did a great job.",
    relatedWords: [
      { word: "dancing", meaning: "The activity of performing a dance" },
      { word: "dancehall", meaning: "A large public hall for dancing" }
    ],
    category: "Art"
  },
  {
    id: "48",
    word: "loudly",
    morphology: { prefix: "", root: "loud", suffix: "ly" },
    meaning: "In a way that makes a lot of noise.",
    exampleSentence: "The thunder boomed loudly in the sky.",
    story: "The children laughed **loudly** at the joke. They were so **loudly** cheering that the neighbors could hear them. It was a very fun party.",
    relatedWords: [
      { word: "loudness", meaning: "The quality of being loud" },
      { word: "loudspeaker", meaning: "A device that converts electrical signals into sound" }
    ],
    category: "Everyday Life"
  },
  {
    id: "49",
    word: "unhook",
    morphology: { prefix: "un", root: "hook", suffix: "" },
    meaning: "To release something from a hook.",
    exampleSentence: "Can you help me unhook my backpack?",
    story: "I had to **unhook** the fish from the line. It was hard to **unhook** it without hurting it. Finally, I let the fish go back into the water.",
    relatedWords: [
      { word: "hooked", meaning: "Attached or fastened with a hook" },
      { word: "hooking", meaning: "The action of catching with a hook" }
    ],
    category: "Activities"
  },
  {
    id: "50",
    word: "remake",
    morphology: { prefix: "re", root: "make", suffix: "" },
    meaning: "To make something again.",
    exampleSentence: "I had to remake my bed this morning.",
    story: "The artist decided to **remake** the old statue. She wanted to **remake** it using better materials. The new version was even more beautiful.",
    relatedWords: [
      { word: "maker", meaning: "A person or thing that makes something" },
      { word: "making", meaning: "The action of creating something" }
    ],
    category: "Art"
  },
  {
    id: "51",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Brave and not afraid.",
    exampleSentence: "The fearless knight fought the dragon.",
    story: "The **fearless** girl climbed to the top of the tree. She was so **fearless** that she didn't even look down. Everyone was amazed by her courage.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "52",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something.",
    exampleSentence: "I dislike eating cold pizza.",
    story: "Many people **dislike** getting up early. I also **dislike** it when it's dark outside in the morning. I prefer to sleep in!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "53",
    word: "hopeful",
    morphology: { prefix: "", root: "hope", suffix: "ful" },
    meaning: "Feeling or showing hope.",
    exampleSentence: "We are hopeful that the weather will be nice.",
    story: "The **hopeful** gardener waited for the seeds to sprout. She felt **hopeful** when she saw the first green leaf. Soon, her garden was full of flowers.",
    relatedWords: [
      { word: "hopeless", meaning: "Feeling that there is no hope" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "54",
    word: "preorder",
    morphology: { prefix: "pre", root: "order", suffix: "" },
    meaning: "To order something before it is available.",
    exampleSentence: "I want to preorder the new video game.",
    story: "We had to **preorder** the book at the store. If you **preorder**, you get it on the very first day. I was so excited to start reading!",
    relatedWords: [
      { word: "ordering", meaning: "The action of putting in order" },
      { word: "orderly", meaning: "Neatly and methodically arranged" }
    ],
    category: "Shopping"
  },
  {
    id: "55",
    word: "baker",
    morphology: { prefix: "", root: "bake", suffix: "er" },
    meaning: "A person who bakes bread or cakes.",
    exampleSentence: "The baker made a delicious chocolate cake.",
    story: "The **baker** woke up very early to start the ovens. Every **baker** in the shop was busy making fresh bread. The smell was wonderful.",
    relatedWords: [
      { word: "baking", meaning: "The activity of cooking food in an oven" },
      { word: "bakery", meaning: "A place where bread and cakes are made or sold" }
    ],
    category: "Cooking"
  },
  {
    id: "56",
    word: "softly",
    morphology: { prefix: "", root: "soft", suffix: "ly" },
    meaning: "In a quiet or gentle way.",
    exampleSentence: "She spoke softly so she wouldn't wake the baby.",
    story: "The snow fell **softly** on the ground. It was so **softly** landing that you couldn't hear a sound. The world looked like a white blanket.",
    relatedWords: [
      { word: "softness", meaning: "The quality of being soft" },
      { word: "soften", meaning: "Make or become less hard" }
    ],
    category: "Everyday Life"
  },
  {
    id: "57",
    word: "unzip",
    morphology: { prefix: "un", root: "zip", suffix: "" },
    meaning: "To open a zipper.",
    exampleSentence: "Please unzip your jacket before you sit down.",
    story: "I had to **unzip** my bag to find my lunch. It was hard to **unzip** because it was so full. Finally, I found my sandwich!",
    relatedWords: [
      { word: "zipper", meaning: "A device used for fastening clothes" },
      { word: "zipping", meaning: "The action of fastening with a zipper" }
    ],
    category: "Everyday Life"
  },
  {
    id: "58",
    word: "recall",
    morphology: { prefix: "re", root: "call", suffix: "" },
    meaning: "To remember something.",
    exampleSentence: "I can't recall where I put my keys.",
    story: "The witness tried to **recall** what happened. It was hard to **recall** every detail of the event. But then a small memory came back.",
    relatedWords: [
      { word: "calling", meaning: "The action of shouting or crying out" },
      { word: "caller", meaning: "A person who makes a phone call" }
    ],
    category: "School"
  },
  {
    id: "59",
    word: "homeless",
    morphology: { prefix: "", root: "home", suffix: "less" },
    meaning: "Without a home.",
    exampleSentence: "The shelter helps homeless people in the city.",
    story: "The **homeless** puppy was shivering in the rain. A kind family took the **homeless** dog in and gave it a warm bed. Now it has a forever home.",
    relatedWords: [
      { word: "homely", meaning: "Simple but cozy and comfortable" },
      { word: "homing", meaning: "Relating to an animal's ability to return home" }
    ],
    category: "Social"
  },
  {
    id: "60",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone or something.",
    exampleSentence: "I distrust the thin ice on the pond.",
    story: "It is wise to **distrust** a stranger who offers you candy. You should always **distrust** things that seem too good to be true. Stay safe!",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Safety"
  },
  {
    id: "61",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Grateful and appreciative.",
    exampleSentence: "I am thankful for the help you gave me.",
    story: "The **thankful** boy wrote a card to his teacher. He felt **thankful** for all the things he had learned. It was a very nice gesture.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "62",
    word: "prepaid",
    morphology: { prefix: "pre", root: "pay", suffix: "ed" },
    meaning: "Paid for in advance.",
    exampleSentence: "I have a prepaid phone card.",
    story: "We used a **prepaid** pass to enter the theme park. Since it was **prepaid**, we didn't have to wait at the ticket booth. We went straight to the rides!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "63",
    word: "runner",
    morphology: { prefix: "", root: "run", suffix: "er" },
    meaning: "A person who runs.",
    exampleSentence: "The runner crossed the finish line first.",
    story: "The **runner** trained every morning in the park. Every **runner** in the race was very fast. It was a very close competition.",
    relatedWords: [
      { word: "running", meaning: "The activity of moving fast on foot" },
      { word: "runway", meaning: "A strip of hard ground for aircraft" }
    ],
    category: "Activities"
  },
  {
    id: "64",
    word: "quietly",
    morphology: { prefix: "", root: "quiet", suffix: "ly" },
    meaning: "In a quiet way; without noise.",
    exampleSentence: "Please walk quietly in the library.",
    story: "The cat crept **quietly** toward the mouse. It moved so **quietly** that the mouse didn't even hear it. But the mouse was fast and got away!",
    relatedWords: [
      { word: "quietness", meaning: "The quality of being quiet" },
      { word: "quieten", meaning: "Make or become quiet" }
    ],
    category: "Everyday Life"
  },
  {
    id: "65",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Having bad luck.",
    exampleSentence: "It was unlucky that I lost my favorite pen.",
    story: "The **unlucky** team lost the game in the last minute. They felt **unlucky** because they had played so well. But they promised to try harder next time.",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "66",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again to improve it.",
    exampleSentence: "I had to rewrite my poem for the contest.",
    story: "The author decided to **rewrite** the ending of the book. She wanted to **rewrite** it to make it more exciting. The new ending was much better.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes" },
      { word: "writing", meaning: "The activity of creating written work" }
    ],
    category: "School"
  },
  {
    id: "67",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care.",
    exampleSentence: "It was careless to leave the door unlocked.",
    story: "The **careless** driver almost hit a tree. He was being **careless** and not watching the road. He learned a very important lesson that day.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "68",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone else.",
    exampleSentence: "I disagree with the idea that cats are better than dogs.",
    story: "The two friends would often **disagree** on what movie to watch. Even when they **disagree**, they are still best friends. They always find a compromise.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "69",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Full of fun and high spirits.",
    exampleSentence: "The playful puppy barked at the ball.",
    story: "The **playful** children ran around the garden. They were so **playful** that they didn't want to come inside for dinner. It was a beautiful evening.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Everyday Life"
  },
  {
    id: "70",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before cooking.",
    exampleSentence: "You must preheat the oven to 350 degrees.",
    story: "We had to **preheat** the oven for the pizza. While it was on **preheat**, we added the toppings. Soon, the pizza was ready to bake!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "71",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who teaches students.",
    exampleSentence: "My teacher helps me learn math.",
    story: "The **teacher** explained the lesson very clearly. Every **teacher** in the school is very dedicated. We are lucky to have such good helpers.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "72",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "In a fast manner.",
    exampleSentence: "The cat jumped quickly onto the table.",
    story: "The boy ran **quickly** to catch the bus. He had to move **quicky** because he was late. He made it just in time!",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Everyday Life"
  },
  {
    id: "73",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Feeling sad or miserable.",
    exampleSentence: "The girl felt unhappy when she lost her doll.",
    story: "The **unhappy** child cried for his mother. He felt **unhappy** until she gave him a big hug. Then he felt much better.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "74",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again after it has been damaged.",
    exampleSentence: "They had to rebuild the house after the fire.",
    story: "The city decided to **rebuild** the old bridge. It took many months to **rebuild** it properly. Now it is safe for everyone to cross.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "75",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Having no fear; very brave.",
    exampleSentence: "The fearless explorer went into the jungle.",
    story: "The **fearless** boy wasn't afraid of the dark. He was so **fearless** that he went into the basement alone. He is the bravest person I know.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "76",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "I disagree with your choice of music.",
    story: "The two scientists would often **disagree** on the results. Even when they **disagree**, they work together to find the truth. It is a good way to learn.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "77",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pleasing to the senses.",
    exampleSentence: "The garden was full of beautiful flowers.",
    story: "We saw a **beautiful** rainbow after the storm. The **beautiful** colors stretched across the sky. It was a truly amazing sight.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "78",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Don't forget to preheat the oven for the cake.",
    story: "Mom told me to **preheat** the oven to 400 degrees. While it was on **preheat**, we prepared the vegetables. Soon, dinner was cooking!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "79",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who provides help.",
    exampleSentence: "I am a helpful helper in the kitchen.",
    story: "The **helper** carried the heavy bags for the old lady. Every **helper** in the community is very appreciated. It is good to be kind to others.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "Social"
  },
  {
    id: "80",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind and gentle way.",
    exampleSentence: "She smiled kindly at the little boy.",
    story: "The teacher spoke **kindly** to the crying child. She **kindly** wiped away his tears and gave him a sticker. He felt much better.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "81",
    word: "unafraid",
    morphology: { prefix: "un", root: "afraid", suffix: "" },
    meaning: "Not afraid; brave.",
    exampleSentence: "The boy was unafraid of the dark.",
    story: "Leo was **unafraid** to try the big slide. He felt **unafraid** because his dad was waiting at the bottom. He had a great time!",
    relatedWords: [
      { word: "fearless", meaning: "Without fear" },
      { word: "bravery", meaning: "Courageous behavior" }
    ],
    category: "Character"
  },
  {
    id: "82",
    word: "redo",
    morphology: { prefix: "re", root: "do", suffix: "" },
    meaning: "To do something again.",
    exampleSentence: "I had to redo my drawing because I spilled water on it.",
    story: "The teacher asked me to **redo** the math problem. I had to **redo** it carefully to get the right answer. I was happy when I finally got it!",
    relatedWords: [
      { word: "doing", meaning: "The action of performing" },
      { word: "done", meaning: "Finished or completed" }
    ],
    category: "School"
  },
  {
    id: "83",
    word: "endless",
    morphology: { prefix: "", root: "end", suffix: "less" },
    meaning: "Having no end; infinite.",
    exampleSentence: "The ocean looked endless from the beach.",
    story: "The road seemed **endless** as we drove through the desert. It felt **endless** because there were no trees or houses. Finally, we reached the city.",
    relatedWords: [
      { word: "ending", meaning: "The final part of something" },
      { word: "endure", meaning: "Suffer patiently" }
    ],
    category: "Nature"
  },
  {
    id: "84",
    word: "disbelieve",
    morphology: { prefix: "dis", root: "believe", suffix: "" },
    meaning: "To not believe something.",
    exampleSentence: "I disbelieve the story about the ghost in the attic.",
    story: "Many people **disbelieve** that aliens have visited Earth. I **disbelieve** it too, until I see some real proof. It's good to be curious!",
    relatedWords: [
      { word: "belief", meaning: "An acceptance that something is true" },
      { word: "believable", meaning: "Able to be believed" }
    ],
    category: "Social"
  },
  {
    id: "85",
    word: "cheerful",
    morphology: { prefix: "", root: "cheer", suffix: "ful" },
    meaning: "Happy and optimistic.",
    exampleSentence: "The cheerful music made everyone smile.",
    story: "The **cheerful** sun shone through the window. It was such a **cheerful** morning that I wanted to sing. I felt very happy all day.",
    relatedWords: [
      { word: "cheerless", meaning: "Gloomy or depressing" },
      { word: "cheering", meaning: "Shouting for joy or in praise" }
    ],
    category: "Emotions"
  },
  {
    id: "86",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you receive it.",
    exampleSentence: "You can prepay for your parking online.",
    story: "We decided to **prepay** for our hotel room. If you **prepay**, you often get a better price. It was a smart way to save money.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "87",
    word: "worker",
    morphology: { prefix: "", root: "work", suffix: "er" },
    meaning: "A person who works.",
    exampleSentence: "The construction worker wore a hard hat.",
    story: "The **worker** finished the job on time. Every **worker** in the factory worked very hard. They all did a great job together.",
    relatedWords: [
      { word: "working", meaning: "The action of doing work" },
      { word: "workplace", meaning: "A place where people work" }
    ],
    category: "Social"
  },
  {
    id: "88",
    word: "neatly",
    morphology: { prefix: "", root: "neat", suffix: "ly" },
    meaning: "In a neat or tidy way.",
    exampleSentence: "She wrote her name neatly on the paper.",
    story: "The books were stacked **neatly** on the shelf. Everything was **neatly** arranged in the room. It looked very clean and organized.",
    relatedWords: [
      { word: "neatness", meaning: "The quality of being neat" },
      { word: "neaten", meaning: "Make something neat" }
    ],
    category: "Everyday Life"
  },
  {
    id: "89",
    word: "unroll",
    morphology: { prefix: "un", root: "roll", suffix: "" },
    meaning: "To open something that is rolled up.",
    exampleSentence: "Please unroll the sleeping bag.",
    story: "I watched the carpet **unroll** across the floor. It took two people to **unroll** it properly. Now the room looks much cozier.",
    relatedWords: [
      { word: "roller", meaning: "A cylinder that rotates" },
      { word: "rolling", meaning: "Moving by turning over and over" }
    ],
    category: "Home"
  },
  {
    id: "90",
    word: "reread",
    morphology: { prefix: "re", root: "read", suffix: "" },
    meaning: "To read something again.",
    exampleSentence: "I like to reread my favorite books.",
    story: "The teacher asked us to **reread** the paragraph. If you **reread** it, you might find something you missed. It's a good way to learn.",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "91",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care; thoughtless.",
    exampleSentence: "It was careless to leave your toys on the stairs.",
    story: "The **careless** boy broke the vase. He was being **careless** and didn't see where he was going. He felt very sorry about it.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "92",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something or someone.",
    exampleSentence: "I dislike the taste of onions.",
    story: "Many children **dislike** eating vegetables. I **dislike** it too, but I know they are good for me. I try to eat them anyway!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "93",
    word: "graceful",
    morphology: { prefix: "", root: "grace", suffix: "ful" },
    meaning: "Moving in a smooth and beautiful way.",
    exampleSentence: "The graceful swan swam across the lake.",
    story: "The **graceful** dancer moved across the stage. Every **graceful** movement was perfectly timed. The audience was very impressed.",
    relatedWords: [
      { word: "graceless", meaning: "Lacking grace" },
      { word: "gracious", meaning: "Courteous, kind, and pleasant" }
    ],
    category: "Art"
  },
  {
    id: "94",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the gas at the station.",
    story: "We decided to **prepay** for our movie tickets online. If you **prepay**, you can go straight to the theater. It's much faster!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "95",
    word: "player",
    morphology: { prefix: "", root: "play", suffix: "er" },
    meaning: "A person who plays a game or sport.",
    exampleSentence: "He is a very good soccer player.",
    story: "The **player** scored the winning goal. Every **player** on the team worked together. They were all very happy to win.",
    relatedWords: [
      { word: "playing", meaning: "Engaging in activity for enjoyment" },
      { word: "playful", meaning: "Full of fun and high spirits" }
    ],
    category: "Social"
  },
  {
    id: "96",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the bushes.",
    story: "The fire truck drove **quickly** down the road. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "97",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Not happy; sad or miserable.",
    exampleSentence: "The boy felt unhappy when his ice cream fell.",
    story: "Leo was **unhappy** because it was raining. He felt **unhappy** that he couldn't go to the park. But then he found a fun game to play at home.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "98",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again.",
    exampleSentence: "They had to rebuild the sandcastle after the wave hit.",
    story: "The big storm knocked down the fence. The neighbors decided to **rebuild** it together. They worked all day to **rebuild** a stronger one.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "99",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Without fear; very brave.",
    exampleSentence: "The fearless explorer entered the dark cave.",
    story: "The **fearless** cat jumped onto the high wall. She was so **fearless** that she wasn't afraid of the big dog. Everyone cheered for the brave kitty.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "100",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "It is okay to disagree with your friends.",
    story: "Ben and Sam **disagree** on which game to play. They often **disagree** about the rules, but they always find a way to have fun together.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "101",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pretty or pleasing to look at.",
    exampleSentence: "The sunset was very beautiful tonight.",
    story: "We saw a **beautiful** garden full of roses. The **beautiful** flowers smelled so sweet. It was a wonderful day in the park.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "102",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Remember to preheat the oven for the cookies.",
    story: "Mom told me to **preheat** the oven for the pizza. While the oven was on **preheat**, we prepared the toppings. Soon, the house smelled like fresh pizza!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "103",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who helps others.",
    exampleSentence: "I am a good helper at home.",
    story: "Anna is a great **helper** in the classroom. The **helper** of the day gets to lead the line. She loves helping her teacher and friends.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "School"
  },
  {
    id: "104",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind or nice way.",
    exampleSentence: "She spoke kindly to the new student.",
    story: "The old man smiled **kindly** at the children. He **kindly** offered them some apples from his tree. Everyone felt happy because of his kindness.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "105",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "106",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "107",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks; grateful.",
    exampleSentence: "I am thankful for my family and friends.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday for all of us.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "108",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "109",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange or different.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "110",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "111",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "112",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight; vanish.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "113",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time together.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "114",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "115",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "116",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed; not quickly.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "117",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight to see.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "118",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "119",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "120",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "121",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Free from disturbance; tranquil.",
    exampleSentence: "The morning was peaceful and quiet.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "122",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A preliminary test to evaluate knowledge.",
    exampleSentence: "We took a pretest before starting the new unit.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "123",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints pictures or buildings.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "124",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "125",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck; unfortunate.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "126",
    word: "repay",
    morphology: { prefix: "re", root: "pay", suffix: "" },
    meaning: "To pay back money that you owe.",
    exampleSentence: "I will repay you for the lunch tomorrow.",
    story: "Sam borrowed five dollars from his sister. He promised to **repay** her as soon as he got his allowance. He felt good when he was able to **repay** the debt.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "127",
    word: "breathless",
    morphology: { prefix: "", root: "breath", suffix: "less" },
    meaning: "Out of breath; gasping.",
    exampleSentence: "The race left the runners breathless.",
    story: "After running up the hill, I was **breathless**. I sat down until I was no longer **breathless**. It was a long way to the top!",
    relatedWords: [
      { word: "breathing", meaning: "The process of taking air into the lungs" },
      { word: "breathtaking", meaning: "Astonishing or awe-inspiring" }
    ],
    category: "Activities"
  },
  {
    id: "128",
    word: "disobey",
    morphology: { prefix: "dis", root: "obey", suffix: "" },
    meaning: "To not follow rules or orders.",
    exampleSentence: "You should never disobey the safety rules.",
    story: "The puppy would sometimes **disobey** its owner. If you **disobey** the signs, you might get in trouble. It is important to listen carefully.",
    relatedWords: [
      { word: "obedience", meaning: "Compliance with an order or request" },
      { word: "obedient", meaning: "Complying or willing to comply with orders" }
    ],
    category: "Social"
  },
  {
    id: "129",
    word: "wonderful",
    morphology: { prefix: "", root: "wonder", suffix: "ful" },
    meaning: "Very good; amazing.",
    exampleSentence: "We had a wonderful time at the zoo.",
    story: "The magician performed a **wonderful** trick. Everyone thought it was **wonderful** how he made the bird appear. It was a day full of surprises.",
    relatedWords: [
      { word: "wondering", meaning: "A feeling of surprise or admiration" },
      { word: "wonderment", meaning: "A state of awed admiration" }
    ],
    category: "Emotions"
  },
  {
    id: "130",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something in advance.",
    exampleSentence: "We had to prepay for the bus tickets.",
    story: "If you **prepay** for your meal, you can skip the line. Mom decided to **prepay** for the whole family. It made our trip much easier.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "131",
    word: "dancer",
    morphology: { prefix: "", root: "dance", suffix: "er" },
    meaning: "A person who dances.",
    exampleSentence: "The dancer moved gracefully across the floor.",
    story: "The **dancer** practiced for hours every day. Every **dancer** in the show wore a beautiful costume. They all did a great job.",
    relatedWords: [
      { word: "dancing", meaning: "The activity of performing a dance" },
      { word: "dancehall", meaning: "A large public hall for dancing" }
    ],
    category: "Art"
  },
  {
    id: "132",
    word: "loudly",
    morphology: { prefix: "", root: "loud", suffix: "ly" },
    meaning: "In a way that makes a lot of noise.",
    exampleSentence: "The thunder boomed loudly in the sky.",
    story: "The children laughed **loudly** at the joke. They were so **loudly** cheering that the neighbors could hear them. It was a very fun party.",
    relatedWords: [
      { word: "loudness", meaning: "The quality of being loud" },
      { word: "loudspeaker", meaning: "A device that converts electrical signals into sound" }
    ],
    category: "Everyday Life"
  },
  {
    id: "133",
    word: "unhook",
    morphology: { prefix: "un", root: "hook", suffix: "" },
    meaning: "To release something from a hook.",
    exampleSentence: "Can you help me unhook my backpack?",
    story: "I had to **unhook** the fish from the line. It was hard to **unhook** it without hurting it. Finally, I let the fish go back into the water.",
    relatedWords: [
      { word: "hooked", meaning: "Attached or fastened with a hook" },
      { word: "hooking", meaning: "The action of catching with a hook" }
    ],
    category: "Activities"
  },
  {
    id: "134",
    word: "remake",
    morphology: { prefix: "re", root: "make", suffix: "" },
    meaning: "To make something again.",
    exampleSentence: "I had to remake my bed this morning.",
    story: "The artist decided to **remake** the old statue. She wanted to **remake** it using better materials. The new version was even more beautiful.",
    relatedWords: [
      { word: "maker", meaning: "A person or thing that makes something" },
      { word: "making", meaning: "The action of creating something" }
    ],
    category: "Art"
  },
  {
    id: "135",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Brave and not afraid.",
    exampleSentence: "The fearless knight fought the dragon.",
    story: "The **fearless** girl climbed to the top of the tree. She was so **fearless** that she didn't even look down. Everyone was amazed by her courage.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "136",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something.",
    exampleSentence: "I dislike eating cold pizza.",
    story: "Many people **dislike** getting up early. I also **dislike** it when it's dark outside in the morning. I prefer to sleep in!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "137",
    word: "hopeful",
    morphology: { prefix: "", root: "hope", suffix: "ful" },
    meaning: "Feeling or showing hope.",
    exampleSentence: "We are hopeful that the weather will be nice.",
    story: "The **hopeful** gardener waited for the seeds to sprout. She felt **hopeful** when she saw the first green leaf. Soon, her garden was full of flowers.",
    relatedWords: [
      { word: "hopeless", meaning: "Feeling that there is no hope" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "138",
    word: "preorder",
    morphology: { prefix: "pre", root: "order", suffix: "" },
    meaning: "To order something before it is available.",
    exampleSentence: "I want to preorder the new video game.",
    story: "We had to **preorder** the book at the store. If you **preorder**, you get it on the very first day. I was so excited to start reading!",
    relatedWords: [
      { word: "ordering", meaning: "The action of putting in order" },
      { word: "orderly", meaning: "Neatly and methodically arranged" }
    ],
    category: "Shopping"
  },
  {
    id: "139",
    word: "baker",
    morphology: { prefix: "", root: "bake", suffix: "er" },
    meaning: "A person who bakes bread or cakes.",
    exampleSentence: "The baker made a delicious chocolate cake.",
    story: "The **baker** woke up very early to start the ovens. Every **baker** in the shop was busy making fresh bread. The smell was wonderful.",
    relatedWords: [
      { word: "baking", meaning: "The activity of cooking food in an oven" },
      { word: "bakery", meaning: "A place where bread and cakes are made or sold" }
    ],
    category: "Cooking"
  },
  {
    id: "140",
    word: "softly",
    morphology: { prefix: "", root: "soft", suffix: "ly" },
    meaning: "In a quiet or gentle way.",
    exampleSentence: "She spoke softly so she wouldn't wake the baby.",
    story: "The snow fell **softly** on the ground. It was so **softly** landing that you couldn't hear a sound. The world looked like a white blanket.",
    relatedWords: [
      { word: "softness", meaning: "The quality of being soft" },
      { word: "soften", meaning: "Make or become less hard" }
    ],
    category: "Everyday Life"
  },
  {
    id: "141",
    word: "unzip",
    morphology: { prefix: "un", root: "zip", suffix: "" },
    meaning: "To open a zipper.",
    exampleSentence: "Please unzip your jacket before you sit down.",
    story: "I had to **unzip** my bag to find my lunch. It was hard to **unzip** because it was so full. Finally, I found my sandwich!",
    relatedWords: [
      { word: "zipper", meaning: "A device used for fastening clothes" },
      { word: "zipping", meaning: "The action of fastening with a zipper" }
    ],
    category: "Everyday Life"
  },
  {
    id: "142",
    word: "recall",
    morphology: { prefix: "re", root: "call", suffix: "" },
    meaning: "To remember something.",
    exampleSentence: "I can't recall where I put my keys.",
    story: "The witness tried to **recall** what happened. It was hard to **recall** every detail of the event. But then a small memory came back.",
    relatedWords: [
      { word: "calling", meaning: "The action of shouting or crying out" },
      { word: "caller", meaning: "A person who makes a phone call" }
    ],
    category: "School"
  },
  {
    id: "143",
    word: "homeless",
    morphology: { prefix: "", root: "home", suffix: "less" },
    meaning: "Without a home.",
    exampleSentence: "The shelter helps homeless people in the city.",
    story: "The **homeless** puppy was shivering in the rain. A kind family took the **homeless** dog in and gave it a warm bed. Now it has a forever home.",
    relatedWords: [
      { word: "homely", meaning: "Simple but cozy and comfortable" },
      { word: "homing", meaning: "Relating to an animal's ability to return home" }
    ],
    category: "Social"
  },
  {
    id: "144",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone or something.",
    exampleSentence: "I distrust the thin ice on the pond.",
    story: "It is wise to **distrust** a stranger who offers you candy. You should always **distrust** things that seem too good to be true. Stay safe!",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Safety"
  },
  {
    id: "145",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Grateful and appreciative.",
    exampleSentence: "I am thankful for the help you gave me.",
    story: "The **thankful** boy wrote a card to his teacher. He felt **thankful** for all the things he had learned. It was a very nice gesture.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "146",
    word: "prepaid",
    morphology: { prefix: "pre", root: "pay", suffix: "ed" },
    meaning: "Paid for in advance.",
    exampleSentence: "I have a prepaid phone card.",
    story: "We used a **prepaid** pass to enter the theme park. Since it was **prepaid**, we didn't have to wait at the ticket booth. We went straight to the rides!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "147",
    word: "runner",
    morphology: { prefix: "", root: "run", suffix: "er" },
    meaning: "A person who runs.",
    exampleSentence: "The runner crossed the finish line first.",
    story: "The **runner** trained every morning in the park. Every **runner** in the race was very fast. It was a very close competition.",
    relatedWords: [
      { word: "running", meaning: "The activity of moving fast on foot" },
      { word: "runway", meaning: "A strip of hard ground for aircraft" }
    ],
    category: "Activities"
  },
  {
    id: "148",
    word: "quietly",
    morphology: { prefix: "", root: "quiet", suffix: "ly" },
    meaning: "In a quiet way; without noise.",
    exampleSentence: "Please walk quietly in the library.",
    story: "The cat crept **quietly** toward the mouse. It moved so **quietly** that the mouse didn't even hear it. But the mouse was fast and got away!",
    relatedWords: [
      { word: "quietness", meaning: "The quality of being quiet" },
      { word: "quieten", meaning: "Make or become quiet" }
    ],
    category: "Everyday Life"
  },
  {
    id: "149",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Having bad luck.",
    exampleSentence: "It was unlucky that I lost my favorite pen.",
    story: "The **unlucky** team lost the game in the last minute. They felt **unlucky** because they had played so well. But they promised to try harder next time.",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "150",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again to improve it.",
    exampleSentence: "I had to rewrite my poem for the contest.",
    story: "The author decided to **rewrite** the ending of the book. She wanted to **rewrite** it to make it more exciting. The new ending was much better.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes" },
      { word: "writing", meaning: "The activity of creating written work" }
    ],
    category: "School"
  },
  {
    id: "151",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care.",
    exampleSentence: "It was careless to leave the door unlocked.",
    story: "The **careless** driver almost hit a tree. He was being **careless** and not watching the road. He learned a very important lesson that day.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "152",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone else.",
    exampleSentence: "I disagree with the idea that cats are better than dogs.",
    story: "The two friends would often **disagree** on what movie to watch. Even when they **disagree**, they are still best friends. They always find a compromise.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "153",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Full of fun and high spirits.",
    exampleSentence: "The playful puppy barked at the ball.",
    story: "The **playful** children ran around the garden. They were so **playful** that they didn't want to come inside for dinner. It was a beautiful evening.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Everyday Life"
  },
  {
    id: "154",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before cooking.",
    exampleSentence: "You must preheat the oven to 350 degrees.",
    story: "We had to **preheat** the oven for the pizza. While it was on **preheat**, we added the toppings. Soon, the pizza was ready to bake!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "155",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who teaches students.",
    exampleSentence: "My teacher helps me learn math.",
    story: "The **teacher** explained the lesson very clearly. Every **teacher** in the school is very dedicated. We are lucky to have such good helpers.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "156",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "In a fast manner.",
    exampleSentence: "The cat jumped quickly onto the table.",
    story: "The boy ran **quickly** to catch the bus. He had to move **quicky** because he was late. He made it just in time!",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Everyday Life"
  },
  {
    id: "157",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Feeling sad or miserable.",
    exampleSentence: "The girl felt unhappy when she lost her doll.",
    story: "The **unhappy** child cried for his mother. He felt **unhappy** until she gave him a big hug. Then he felt much better.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "158",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again after it has been damaged.",
    exampleSentence: "They had to rebuild the house after the fire.",
    story: "The city decided to **rebuild** the old bridge. It took many months to **rebuild** it properly. Now it is safe for everyone to cross.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "159",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Having no fear; very brave.",
    exampleSentence: "The fearless explorer went into the jungle.",
    story: "The **fearless** boy wasn't afraid of the dark. He was so **fearless** that he went into the basement alone. He is the bravest person I know.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "160",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "I disagree with your choice of music.",
    story: "The two scientists would often **disagree** on the results. Even when they **disagree**, they work together to find the truth. It is a good way to learn.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "161",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pleasing to the senses.",
    exampleSentence: "The garden was full of beautiful flowers.",
    story: "We saw a **beautiful** rainbow after the storm. The **beautiful** colors stretched across the sky. It was a truly amazing sight.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "162",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Don't forget to preheat the oven for the cake.",
    story: "Mom told me to **preheat** the oven to 400 degrees. While it was on **preheat**, we prepared the vegetables. Soon, dinner was cooking!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "163",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who provides help.",
    exampleSentence: "I am a helpful helper in the kitchen.",
    story: "The **helper** carried the heavy bags for the old lady. Every **helper** in the community is very appreciated. It is good to be kind to others.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "Social"
  },
  {
    id: "164",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind and gentle way.",
    exampleSentence: "She smiled kindly at the little boy.",
    story: "The teacher spoke **kindly** to the crying child. She **kindly** wiped away his tears and gave him a sticker. He felt much better.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "165",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Not happy; sad.",
    exampleSentence: "The boy felt unhappy when his toy broke.",
    story: "Leo was **unhappy** because it was raining. He felt **unhappy** that he couldn't play outside. But then he found a fun book to read!",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "166",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again.",
    exampleSentence: "They had to rebuild the sandcastle.",
    story: "The big wave knocked down the tower. The kids decided to **rebuild** it. They worked together to **rebuild** a stronger wall.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "167",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Without fear; brave.",
    exampleSentence: "The fearless explorer entered the dark cave.",
    story: "The **fearless** cat jumped onto the high fence. She was so **fearless** that she wasn't afraid of the big dog. Everyone cheered for the brave kitty.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "168",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion.",
    exampleSentence: "It is okay to disagree with your friends.",
    story: "Ben and Sam **disagree** on which game to play. They often **disagree** about the rules, but they always find a way to have fun together.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "169",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pretty or pleasing to look at.",
    exampleSentence: "The sunset was very beautiful.",
    story: "We saw a **beautiful** garden full of roses. The **beautiful** flowers smelled so sweet. It was a wonderful day in the park.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "170",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat something before using it.",
    exampleSentence: "Remember to preheat the oven.",
    story: "Mom told me to **preheat** the oven for the cookies. While the oven was on **preheat**, we mixed the dough. Soon, the house smelled like fresh cookies!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "171",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who helps.",
    exampleSentence: "I am a good helper at home.",
    story: "Anna is a great **helper** in the classroom. The **helper** of the day gets to lead the line. She loves helping her teacher.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "School"
  },
  {
    id: "172",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind or nice way.",
    exampleSentence: "She spoke kindly to the new student.",
    story: "The old man smiled **kindly** at the children. He **kindly** offered them some apples from his tree. Everyone felt happy because of his kindness.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "173",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "174",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "175",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks.",
    exampleSentence: "I am thankful for my family.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "176",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "177",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "178",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "179",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "180",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "181",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time together.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "182",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "183",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "184",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed; not quickly.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "185",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight to see.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "186",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "187",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "188",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "189",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Free from disturbance; tranquil.",
    exampleSentence: "The morning was peaceful and quiet.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "190",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A preliminary test to evaluate knowledge.",
    exampleSentence: "We took a pretest before starting the new unit.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "191",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints pictures or buildings.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "192",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "193",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck; unfortunate.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "194",
    word: "repay",
    morphology: { prefix: "re", root: "pay", suffix: "" },
    meaning: "To pay back money that you owe.",
    exampleSentence: "I will repay you for the lunch tomorrow.",
    story: "Sam borrowed five dollars from his sister. He promised to **repay** her as soon as he got his allowance. He felt good when he was able to **repay** the debt.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "195",
    word: "breathless",
    morphology: { prefix: "", root: "breath", suffix: "less" },
    meaning: "Out of breath; gasping.",
    exampleSentence: "The race left the runners breathless.",
    story: "After running up the hill, I was **breathless**. I sat down until I was no longer **breathless**. It was a long way to the top!",
    relatedWords: [
      { word: "breathing", meaning: "The process of taking air into the lungs" },
      { word: "breathtaking", meaning: "Astonishing or awe-inspiring" }
    ],
    category: "Activities"
  },
  {
    id: "196",
    word: "disobey",
    morphology: { prefix: "dis", root: "obey", suffix: "" },
    meaning: "To not follow rules or orders.",
    exampleSentence: "You should never disobey the safety rules.",
    story: "The puppy would sometimes **disobey** its owner. If you **disobey** the signs, you might get in trouble. It is important to listen carefully.",
    relatedWords: [
      { word: "obedience", meaning: "Compliance with an order or request" },
      { word: "obedient", meaning: "Complying or willing to comply with orders" }
    ],
    category: "Social"
  },
  {
    id: "197",
    word: "wonderful",
    morphology: { prefix: "", root: "wonder", suffix: "ful" },
    meaning: "Very good; amazing.",
    exampleSentence: "We had a wonderful time at the zoo.",
    story: "The magician performed a **wonderful** trick. Everyone thought it was **wonderful** how he made the bird appear. It was a day full of surprises.",
    relatedWords: [
      { word: "wondering", meaning: "A feeling of surprise or admiration" },
      { word: "wonderment", meaning: "A state of awed admiration" }
    ],
    category: "Emotions"
  },
  {
    id: "198",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something in advance.",
    exampleSentence: "We had to prepay for the bus tickets.",
    story: "If you **prepay** for your meal, you can skip the line. Mom decided to **prepay** for the whole family. It made our trip much easier.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "199",
    word: "dancer",
    morphology: { prefix: "", root: "dance", suffix: "er" },
    meaning: "A person who dances.",
    exampleSentence: "The dancer moved gracefully across the floor.",
    story: "The **dancer** practiced for hours every day. Every **dancer** in the show wore a beautiful costume. They all did a great job.",
    relatedWords: [
      { word: "dancing", meaning: "The activity of performing a dance" },
      { word: "dancehall", meaning: "A large public hall for dancing" }
    ],
    category: "Art"
  },
  {
    id: "200",
    word: "loudly",
    morphology: { prefix: "", root: "loud", suffix: "ly" },
    meaning: "In a way that makes a lot of noise.",
    exampleSentence: "The thunder boomed loudly in the sky.",
    story: "The children laughed **loudly** at the joke. They were so **loudly** cheering that the neighbors could hear them. It was a very fun party.",
    relatedWords: [
      { word: "loudness", meaning: "The quality of being loud" },
      { word: "loudspeaker", meaning: "A device that converts electrical signals into sound" }
    ],
    category: "Everyday Life"
  },
  {
    id: "201",
    word: "unhook",
    morphology: { prefix: "un", root: "hook", suffix: "" },
    meaning: "To release something from a hook.",
    exampleSentence: "Can you help me unhook my backpack?",
    story: "I had to **unhook** the fish from the line. It was hard to **unhook** it without hurting it. Finally, I let the fish go back into the water.",
    relatedWords: [
      { word: "hooked", meaning: "Attached or fastened with a hook" },
      { word: "hooking", meaning: "The action of catching with a hook" }
    ],
    category: "Activities"
  },
  {
    id: "202",
    word: "remake",
    morphology: { prefix: "re", root: "make", suffix: "" },
    meaning: "To make something again.",
    exampleSentence: "I had to remake my bed this morning.",
    story: "The artist decided to **remake** the old statue. She wanted to **remake** it using better materials. The new version was even more beautiful.",
    relatedWords: [
      { word: "maker", meaning: "A person or thing that makes something" },
      { word: "making", meaning: "The action of creating something" }
    ],
    category: "Art"
  },
  {
    id: "203",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Brave and not afraid.",
    exampleSentence: "The fearless knight fought the dragon.",
    story: "The **fearless** girl climbed to the top of the tree. She was so **fearless** that she didn't even look down. Everyone was amazed by her courage.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "204",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something.",
    exampleSentence: "I dislike eating cold pizza.",
    story: "Many people **dislike** getting up early. I also **dislike** it when it's dark outside in the morning. I prefer to sleep in!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "205",
    word: "hopeful",
    morphology: { prefix: "", root: "hope", suffix: "ful" },
    meaning: "Feeling or showing hope.",
    exampleSentence: "We are hopeful that the weather will be nice.",
    story: "The **hopeful** gardener waited for the seeds to sprout. She felt **hopeful** when she saw the first green leaf. Soon, her garden was full of flowers.",
    relatedWords: [
      { word: "hopeless", meaning: "Feeling that there is no hope" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "206",
    word: "preorder",
    morphology: { prefix: "pre", root: "order", suffix: "" },
    meaning: "To order something before it is available.",
    exampleSentence: "I want to preorder the new video game.",
    story: "We had to **preorder** the book at the store. If you **preorder**, you get it on the very first day. I was so excited to start reading!",
    relatedWords: [
      { word: "ordering", meaning: "The action of putting in order" },
      { word: "orderly", meaning: "Neatly and methodically arranged" }
    ],
    category: "Shopping"
  },
  {
    id: "207",
    word: "baker",
    morphology: { prefix: "", root: "bake", suffix: "er" },
    meaning: "A person who bakes bread or cakes.",
    exampleSentence: "The baker made a delicious chocolate cake.",
    story: "The **baker** woke up very early to start the ovens. Every **baker** in the shop was busy making fresh bread. The smell was wonderful.",
    relatedWords: [
      { word: "baking", meaning: "The activity of cooking food in an oven" },
      { word: "bakery", meaning: "A place where bread and cakes are made or sold" }
    ],
    category: "Cooking"
  },
  {
    id: "210",
    word: "recall",
    morphology: { prefix: "re", root: "call", suffix: "" },
    meaning: "To remember something.",
    exampleSentence: "I can't recall where I put my keys.",
    story: "The witness tried to **recall** what happened. It was hard to **recall** every detail of the event. But then a small memory came back.",
    relatedWords: [
      { word: "calling", meaning: "The action of shouting or crying out" },
      { word: "caller", meaning: "A person who makes a phone call" }
    ],
    category: "School"
  },
  {
    id: "211",
    word: "homeless",
    morphology: { prefix: "", root: "home", suffix: "less" },
    meaning: "Without a home.",
    exampleSentence: "The shelter helps homeless people in the city.",
    story: "The **homeless** puppy was shivering in the rain. A kind family took the **homeless** dog in and gave it a warm bed. Now it has a forever home.",
    relatedWords: [
      { word: "homely", meaning: "Simple but cozy and comfortable" },
      { word: "homing", meaning: "Relating to an animal's ability to return home" }
    ],
    category: "Social"
  },
  {
    id: "212",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone or something.",
    exampleSentence: "I distrust the thin ice on the pond.",
    story: "It is wise to **distrust** a stranger who offers you candy. You should always **distrust** things that seem too good to be true. Stay safe!",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Safety"
  },
  {
    id: "213",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Grateful and appreciative.",
    exampleSentence: "I am thankful for the help you gave me.",
    story: "The **thankful** boy wrote a card to his teacher. He felt **thankful** for all the things he had learned. It was a very nice gesture.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "214",
    word: "prepaid",
    morphology: { prefix: "pre", root: "pay", suffix: "ed" },
    meaning: "Paid for in advance.",
    exampleSentence: "I have a prepaid phone card.",
    story: "We used a **prepaid** pass to enter the theme park. Since it was **prepaid**, we didn't have to wait at the ticket booth. We went straight to the rides!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "215",
    word: "runner",
    morphology: { prefix: "", root: "run", suffix: "er" },
    meaning: "A person who runs.",
    exampleSentence: "The runner crossed the finish line first.",
    story: "The **runner** trained every morning in the park. Every **runner** in the race was very fast. It was a very close competition.",
    relatedWords: [
      { word: "running", meaning: "The activity of moving fast on foot" },
      { word: "runway", meaning: "A strip of hard ground for aircraft" }
    ],
    category: "Activities"
  },
  {
    id: "216",
    word: "quietly",
    morphology: { prefix: "", root: "quiet", suffix: "ly" },
    meaning: "In a quiet way; without noise.",
    exampleSentence: "Please walk quietly in the library.",
    story: "The cat crept **quietly** toward the mouse. It moved so **quietly** that the mouse didn't even hear it. But the mouse was fast and got away!",
    relatedWords: [
      { word: "quietness", meaning: "The quality of being quiet" },
      { word: "quieten", meaning: "Make or become quiet" }
    ],
    category: "Everyday Life"
  },
  {
    id: "217",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Having bad luck.",
    exampleSentence: "It was unlucky that I lost my favorite pen.",
    story: "The **unlucky** team lost the game in the last minute. They felt **unlucky** because they had played so well. But they promised to try harder next time.",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "218",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again to improve it.",
    exampleSentence: "I had to rewrite my poem for the contest.",
    story: "The author decided to **rewrite** the ending of the book. She wanted to **rewrite** it to make it more exciting. The new ending was much better.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes" },
      { word: "writing", meaning: "The activity of creating written work" }
    ],
    category: "School"
  },
  {
    id: "219",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care.",
    exampleSentence: "It was careless to leave the door unlocked.",
    story: "The **careless** driver almost hit a tree. He was being **careless** and not watching the road. He learned a very important lesson that day.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "220",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone else.",
    exampleSentence: "I disagree with the idea that cats are better than dogs.",
    story: "The two friends would often **disagree** on what movie to watch. Even when they **disagree**, they are still best friends. They always find a compromise.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "221",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Full of fun and high spirits.",
    exampleSentence: "The playful puppy barked at the ball.",
    story: "The **playful** children ran around the garden. They were so **playful** that they didn't want to come inside for dinner. It was a beautiful evening.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Everyday Life"
  },
  {
    id: "222",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before cooking.",
    exampleSentence: "You must preheat the oven to 350 degrees.",
    story: "We had to **preheat** the oven for the pizza. While it was on **preheat**, we added the toppings. Soon, the pizza was ready to bake!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "223",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who teaches students.",
    exampleSentence: "My teacher helps me learn math.",
    story: "The **teacher** explained the lesson very clearly. Every **teacher** in the school is very dedicated. We are lucky to have such good helpers.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "224",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "In a fast manner.",
    exampleSentence: "The cat jumped quickly onto the table.",
    story: "The boy ran **quickly** to catch the bus. He had to move **quicky** because he was late. He made it just in time!",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Everyday Life"
  },
  {
    id: "225",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Feeling sad or miserable.",
    exampleSentence: "The girl felt unhappy when she lost her doll.",
    story: "The **unhappy** child cried for his mother. He felt **unhappy** until she gave him a big hug. Then he felt much better.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "226",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again after it has been damaged.",
    exampleSentence: "They had to rebuild the house after the fire.",
    story: "The city decided to **rebuild** the old bridge. It took many months to **rebuild** it properly. Now it is safe for everyone to cross.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "227",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Having no fear; very brave.",
    exampleSentence: "The fearless explorer went into the jungle.",
    story: "The **fearless** boy wasn't afraid of the dark. He was so **fearless** that he went into the basement alone. He is the bravest person I know.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "228",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "I disagree with your choice of music.",
    story: "The two scientists would often **disagree** on the results. Even when they **disagree**, they work together to find the truth. It is a good way to learn.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "229",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pleasing to the senses.",
    exampleSentence: "The garden was full of beautiful flowers.",
    story: "We saw a **beautiful** rainbow after the storm. The **beautiful** colors stretched across the sky. It was a truly amazing sight.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "230",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Don't forget to preheat the oven for the cake.",
    story: "Mom told me to **preheat** the oven to 400 degrees. While it was on **preheat**, we prepared the vegetables. Soon, dinner was cooking!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "231",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who provides help.",
    exampleSentence: "I am a helpful helper in the kitchen.",
    story: "The **helper** carried the heavy bags for the old lady. Every **helper** in the community is very appreciated. It is good to be kind to others.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "Social"
  },
  {
    id: "232",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind and gentle way.",
    exampleSentence: "She smiled kindly at the little boy.",
    story: "The teacher spoke **kindly** to the crying child. She **kindly** wiped away his tears and gave him a sticker. He felt much better.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "233",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Not happy; sad.",
    exampleSentence: "The boy felt unhappy when his toy broke.",
    story: "Leo was **unhappy** because it was raining. He felt **unhappy** that he couldn't play outside. But then he found a fun book to read!",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "234",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again.",
    exampleSentence: "They had to rebuild the sandcastle.",
    story: "The big wave knocked down the tower. The kids decided to **rebuild** it. They worked together to **rebuild** a stronger wall.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "235",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Without fear; brave.",
    exampleSentence: "The fearless explorer entered the dark cave.",
    story: "The **fearless** cat jumped onto the high fence. She was so **fearless** that she wasn't afraid of the big dog. Everyone cheered for the brave kitty.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "236",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion.",
    exampleSentence: "It is okay to disagree with your friends.",
    story: "Ben and Sam **disagree** on which game to play. They often **disagree** about the rules, but they always find a way to have fun together.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "237",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pretty or pleasing to look at.",
    exampleSentence: "The sunset was very beautiful.",
    story: "We saw a **beautiful** garden full of roses. The **beautiful** flowers smelled so sweet. It was a wonderful day in the park.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "238",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat something before using it.",
    exampleSentence: "Remember to preheat the oven.",
    story: "Mom told me to **preheat** the oven for the cookies. While the oven was on **preheat**, we mixed the dough. Soon, the house smelled like fresh cookies!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "239",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who helps.",
    exampleSentence: "I am a good helper at home.",
    story: "Anna is a great **helper** in the classroom. The **helper** of the day gets to lead the line. She loves helping her teacher.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "School"
  },
  {
    id: "240",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind or nice way.",
    exampleSentence: "She spoke kindly to the new student.",
    story: "The old man smiled **kindly** at the children. He **kindly** offered them some apples from his tree. Everyone felt happy because of his kindness.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "241",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "242",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "243",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks.",
    exampleSentence: "I am thankful for my family.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "244",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "245",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "246",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "247",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "248",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "249",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time together.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "250",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "251",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "252",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed; not quickly.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "253",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight to see.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "254",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "255",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "256",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "257",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Free from disturbance; tranquil.",
    exampleSentence: "The morning was peaceful and quiet.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "258",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A preliminary test to evaluate knowledge.",
    exampleSentence: "We took a pretest before starting the new unit.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "259",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints pictures or buildings.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "260",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "261",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck; unfortunate.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "262",
    word: "repay",
    morphology: { prefix: "re", root: "pay", suffix: "" },
    meaning: "To pay back money that you owe.",
    exampleSentence: "I will repay you for the lunch tomorrow.",
    story: "Sam borrowed five dollars from his sister. He promised to **repay** her as soon as he got his allowance. He felt good when he was able to **repay** the debt.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "263",
    word: "breathless",
    morphology: { prefix: "", root: "breath", suffix: "less" },
    meaning: "Out of breath; gasping.",
    exampleSentence: "The race left the runners breathless.",
    story: "After running up the hill, I was **breathless**. I sat down until I was no longer **breathless**. It was a long way to the top!",
    relatedWords: [
      { word: "breathing", meaning: "The process of taking air into the lungs" },
      { word: "breathtaking", meaning: "Astonishing or awe-inspiring" }
    ],
    category: "Activities"
  },
  {
    id: "264",
    word: "disobey",
    morphology: { prefix: "dis", root: "obey", suffix: "" },
    meaning: "To not follow rules or orders.",
    exampleSentence: "You should never disobey the safety rules.",
    story: "The puppy would sometimes **disobey** its owner. If you **disobey** the signs, you might get in trouble. It is important to listen carefully.",
    relatedWords: [
      { word: "obedience", meaning: "Compliance with an order or request" },
      { word: "obedient", meaning: "Complying or willing to comply with orders" }
    ],
    category: "Social"
  },
  {
    id: "265",
    word: "wonderful",
    morphology: { prefix: "", root: "wonder", suffix: "ful" },
    meaning: "Very good; amazing.",
    exampleSentence: "We had a wonderful time at the zoo.",
    story: "The magician performed a **wonderful** trick. Everyone thought it was **wonderful** how he made the bird appear. It was a day full of surprises.",
    relatedWords: [
      { word: "wondering", meaning: "A feeling of surprise or admiration" },
      { word: "wonderment", meaning: "A state of awed admiration" }
    ],
    category: "Emotions"
  },
  {
    id: "266",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something in advance.",
    exampleSentence: "We had to prepay for the bus tickets.",
    story: "If you **prepay** for your meal, you can skip the line. Mom decided to **prepay** for the whole family. It made our trip much easier.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "267",
    word: "dancer",
    morphology: { prefix: "", root: "dance", suffix: "er" },
    meaning: "A person who dances.",
    exampleSentence: "The dancer moved gracefully across the floor.",
    story: "The **dancer** practiced for hours every day. Every **dancer** in the show wore a beautiful costume. They all did a great job.",
    relatedWords: [
      { word: "dancing", meaning: "The activity of performing a dance" },
      { word: "dancehall", meaning: "A large public hall for dancing" }
    ],
    category: "Art"
  },
  {
    id: "268",
    word: "loudly",
    morphology: { prefix: "", root: "loud", suffix: "ly" },
    meaning: "In a way that makes a lot of noise.",
    exampleSentence: "The thunder boomed loudly in the sky.",
    story: "The children laughed **loudly** at the joke. They were so **loudly** cheering that the neighbors could hear them. It was a very fun party.",
    relatedWords: [
      { word: "loudness", meaning: "The quality of being loud" },
      { word: "loudspeaker", meaning: "A device that converts electrical signals into sound" }
    ],
    category: "Everyday Life"
  },
  {
    id: "269",
    word: "unhook",
    morphology: { prefix: "un", root: "hook", suffix: "" },
    meaning: "To release something from a hook.",
    exampleSentence: "Can you help me unhook my backpack?",
    story: "I had to **unhook** the fish from the line. It was hard to **unhook** it without hurting it. Finally, I let the fish go back into the water.",
    relatedWords: [
      { word: "hooked", meaning: "Attached or fastened with a hook" },
      { word: "hooking", meaning: "The action of catching with a hook" }
    ],
    category: "Activities"
  },
  {
    id: "270",
    word: "remake",
    morphology: { prefix: "re", root: "make", suffix: "" },
    meaning: "To make something again.",
    exampleSentence: "I had to remake my bed this morning.",
    story: "The artist decided to **remake** the old statue. She wanted to **remake** it using better materials. The new version was even more beautiful.",
    relatedWords: [
      { word: "maker", meaning: "A person or thing that makes something" },
      { word: "making", meaning: "The action of creating something" }
    ],
    category: "Art"
  },
  {
    id: "271",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Brave and not afraid.",
    exampleSentence: "The fearless knight fought the dragon.",
    story: "The **fearless** girl climbed to the top of the tree. She was so **fearless** that she didn't even look down. Everyone was amazed by her courage.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "272",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something.",
    exampleSentence: "I dislike eating cold pizza.",
    story: "Many people **dislike** getting up early. I also **dislike** it when it's dark outside in the morning. I prefer to sleep in!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "273",
    word: "hopeful",
    morphology: { prefix: "", root: "hope", suffix: "ful" },
    meaning: "Feeling or showing hope.",
    exampleSentence: "We are hopeful that the weather will be nice.",
    story: "The **hopeful** gardener waited for the seeds to sprout. She felt **hopeful** when she saw the first green leaf. Soon, her garden was full of flowers.",
    relatedWords: [
      { word: "hopeless", meaning: "Feeling that there is no hope" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "274",
    word: "preorder",
    morphology: { prefix: "pre", root: "order", suffix: "" },
    meaning: "To order something before it is available.",
    exampleSentence: "I want to preorder the new video game.",
    story: "We had to **preorder** the book at the store. If you **preorder**, you get it on the very first day. I was so excited to start reading!",
    relatedWords: [
      { word: "ordering", meaning: "The action of putting in order" },
      { word: "orderly", meaning: "Neatly and methodically arranged" }
    ],
    category: "Shopping"
  },
  {
    id: "275",
    word: "baker",
    morphology: { prefix: "", root: "bake", suffix: "er" },
    meaning: "A person who bakes bread or cakes.",
    exampleSentence: "The baker made a delicious chocolate cake.",
    story: "The **baker** woke up very early to start the ovens. Every **baker** in the shop was busy making fresh bread. The smell was wonderful.",
    relatedWords: [
      { word: "baking", meaning: "The activity of cooking food in an oven" },
      { word: "bakery", meaning: "A place where bread and cakes are made or sold" }
    ],
    category: "Cooking"
  },
  {
    id: "276",
    word: "softly",
    morphology: { prefix: "", root: "soft", suffix: "ly" },
    meaning: "In a quiet or gentle way.",
    exampleSentence: "She spoke softly so she wouldn't wake the baby.",
    story: "The snow fell **softly** on the ground. It was so **softly** landing that you couldn't hear a sound. The world looked like a white blanket.",
    relatedWords: [
      { word: "softness", meaning: "The quality of being soft" },
      { word: "soften", meaning: "Make or become less hard" }
    ],
    category: "Everyday Life"
  },
  {
    id: "277",
    word: "unzip",
    morphology: { prefix: "un", root: "zip", suffix: "" },
    meaning: "To open a zipper.",
    exampleSentence: "Please unzip your jacket before you sit down.",
    story: "I had to **unzip** my bag to find my lunch. It was hard to **unzip** because it was so full. Finally, I found my sandwich!",
    relatedWords: [
      { word: "zipper", meaning: "A device used for fastening clothes" },
      { word: "zipping", meaning: "The action of fastening with a zipper" }
    ],
    category: "Everyday Life"
  },
  {
    id: "278",
    word: "recall",
    morphology: { prefix: "re", root: "call", suffix: "" },
    meaning: "To remember something.",
    exampleSentence: "I can't recall where I put my keys.",
    story: "The witness tried to **recall** what happened. It was hard to **recall** every detail of the event. But then a small memory came back.",
    relatedWords: [
      { word: "calling", meaning: "The action of shouting or crying out" },
      { word: "caller", meaning: "A person who makes a phone call" }
    ],
    category: "School"
  },
  {
    id: "279",
    word: "homeless",
    morphology: { prefix: "", root: "home", suffix: "less" },
    meaning: "Without a home.",
    exampleSentence: "The shelter helps homeless people in the city.",
    story: "The **homeless** puppy was shivering in the rain. A kind family took the **homeless** dog in and gave it a warm bed. Now it has a forever home.",
    relatedWords: [
      { word: "homely", meaning: "Simple but cozy and comfortable" },
      { word: "homing", meaning: "Relating to an animal's ability to return home" }
    ],
    category: "Social"
  },
  {
    id: "280",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone or something.",
    exampleSentence: "I distrust the thin ice on the pond.",
    story: "It is wise to **distrust** a stranger who offers you candy. You should always **distrust** things that seem too good to be true. Stay safe!",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Safety"
  },
  {
    id: "281",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Grateful and appreciative.",
    exampleSentence: "I am thankful for the help you gave me.",
    story: "The **thankful** boy wrote a card to his teacher. He felt **thankful** for all the things he had learned. It was a very nice gesture.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "282",
    word: "prepaid",
    morphology: { prefix: "pre", root: "pay", suffix: "ed" },
    meaning: "Paid for in advance.",
    exampleSentence: "I have a prepaid phone card.",
    story: "We used a **prepaid** pass to enter the theme park. Since it was **prepaid**, we didn't have to wait at the ticket booth. We went straight to the rides!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "283",
    word: "runner",
    morphology: { prefix: "", root: "run", suffix: "er" },
    meaning: "A person who runs.",
    exampleSentence: "The runner crossed the finish line first.",
    story: "The **runner** trained every morning in the park. Every **runner** in the race was very fast. It was a very close competition.",
    relatedWords: [
      { word: "running", meaning: "The activity of moving fast on foot" },
      { word: "runway", meaning: "A strip of hard ground for aircraft" }
    ],
    category: "Activities"
  },
  {
    id: "284",
    word: "quietly",
    morphology: { prefix: "", root: "quiet", suffix: "ly" },
    meaning: "In a quiet way; without noise.",
    exampleSentence: "Please walk quietly in the library.",
    story: "The cat crept **quietly** toward the mouse. It moved so **quietly** that the mouse didn't even hear it. But the mouse was fast and got away!",
    relatedWords: [
      { word: "quietness", meaning: "The quality of being quiet" },
      { word: "quieten", meaning: "Make or become quiet" }
    ],
    category: "Everyday Life"
  },
  {
    id: "285",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Having bad luck.",
    exampleSentence: "It was unlucky that I lost my favorite pen.",
    story: "The **unlucky** team lost the game in the last minute. They felt **unlucky** because they had played so well. But they promised to try harder next time.",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "286",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again to improve it.",
    exampleSentence: "I had to rewrite my poem for the contest.",
    story: "The author decided to **rewrite** the ending of the book. She wanted to **rewrite** it to make it more exciting. The new ending was much better.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes" },
      { word: "writing", meaning: "The activity of creating written work" }
    ],
    category: "School"
  },
  {
    id: "287",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care.",
    exampleSentence: "It was careless to leave the door unlocked.",
    story: "The **careless** driver almost hit a tree. He was being **careless** and not watching the road. He learned a very important lesson that day.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "288",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone else.",
    exampleSentence: "I disagree with the idea that cats are better than dogs.",
    story: "The two friends would often **disagree** on what movie to watch. Even when they **disagree**, they are still best friends. They always find a compromise.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "289",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Full of fun and high spirits.",
    exampleSentence: "The playful puppy barked at the ball.",
    story: "The **playful** children ran around the garden. They were so **playful** that they didn't want to come inside for dinner. It was a beautiful evening.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Everyday Life"
  },
  {
    id: "290",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before cooking.",
    exampleSentence: "You must preheat the oven to 350 degrees.",
    story: "We had to **preheat** the oven for the pizza. While it was on **preheat**, we added the toppings. Soon, the pizza was ready to bake!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "291",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who teaches students.",
    exampleSentence: "My teacher helps me learn math.",
    story: "The **teacher** explained the lesson very clearly. Every **teacher** in the school is very dedicated. We are lucky to have such good helpers.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "292",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "In a fast manner.",
    exampleSentence: "The cat jumped quickly onto the table.",
    story: "The boy ran **quickly** to catch the bus. He had to move **quicky** because he was late. He made it just in time!",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Everyday Life"
  },
  {
    id: "293",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Feeling sad or miserable.",
    exampleSentence: "The girl felt unhappy when she lost her doll.",
    story: "The **unhappy** child cried for his mother. He felt **unhappy** until she gave him a big hug. Then he felt much better.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "294",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again after it has been damaged.",
    exampleSentence: "They had to rebuild the house after the fire.",
    story: "The city decided to **rebuild** the old bridge. It took many months to **rebuild** it properly. Now it is safe for everyone to cross.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "295",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Having no fear; very brave.",
    exampleSentence: "The fearless explorer went into the jungle.",
    story: "The **fearless** boy wasn't afraid of the dark. He was so **fearless** that he went into the basement alone. He is the bravest person I know.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "296",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "I disagree with your choice of music.",
    story: "The two scientists would often **disagree** on the results. Even when they **disagree**, they work together to find the truth. It is a good way to learn.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "297",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pleasing to the senses.",
    exampleSentence: "The garden was full of beautiful flowers.",
    story: "We saw a **beautiful** rainbow after the storm. The **beautiful** colors stretched across the sky. It was a truly amazing sight.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "298",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Don't forget to preheat the oven for the cake.",
    story: "Mom told me to **preheat** the oven to 400 degrees. While it was on **preheat**, we prepared the vegetables. Soon, dinner was cooking!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "299",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who provides help.",
    exampleSentence: "I am a helpful helper in the kitchen.",
    story: "The **helper** carried the heavy bags for the old lady. Every **helper** in the community is very appreciated. It is good to be kind to others.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "Social"
  },
  {
    id: "300",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind and gentle way.",
    exampleSentence: "She smiled kindly at the little boy.",
    story: "The teacher spoke **kindly** to the crying child. She **kindly** wiped away his tears and gave him a sticker. He felt much better.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "301",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "302",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "303",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks.",
    exampleSentence: "I am thankful for my family.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "304",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "305",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "306",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "307",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "308",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "309",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time together.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "310",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "311",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "312",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed; not quickly.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "313",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight to see.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "314",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "315",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "316",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "317",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Free from disturbance; tranquil.",
    exampleSentence: "The morning was peaceful and quiet.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "318",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A preliminary test to evaluate knowledge.",
    exampleSentence: "We took a pretest before starting the new unit.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "319",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints pictures or buildings.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "320",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "321",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck; unfortunate.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "322",
    word: "repay",
    morphology: { prefix: "re", root: "pay", suffix: "" },
    meaning: "To pay back money that you owe.",
    exampleSentence: "I will repay you for the lunch tomorrow.",
    story: "Sam borrowed five dollars from his sister. He promised to **repay** her as soon as he got his allowance. He felt good when he was able to **repay** the debt.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "323",
    word: "breathless",
    morphology: { prefix: "", root: "breath", suffix: "less" },
    meaning: "Out of breath; gasping.",
    exampleSentence: "The race left the runners breathless.",
    story: "After running up the hill, I was **breathless**. I sat down until I was no longer **breathless**. It was a long way to the top!",
    relatedWords: [
      { word: "breathing", meaning: "The process of taking air into the lungs" },
      { word: "breathtaking", meaning: "Astonishing or awe-inspiring" }
    ],
    category: "Activities"
  },
  {
    id: "324",
    word: "disobey",
    morphology: { prefix: "dis", root: "obey", suffix: "" },
    meaning: "To not follow rules or orders.",
    exampleSentence: "You should never disobey the safety rules.",
    story: "The puppy would sometimes **disobey** its owner. If you **disobey** the signs, you might get in trouble. It is important to listen carefully.",
    relatedWords: [
      { word: "obedience", meaning: "Compliance with an order or request" },
      { word: "obedient", meaning: "Complying or willing to comply with orders" }
    ],
    category: "Social"
  },
  {
    id: "325",
    word: "wonderful",
    morphology: { prefix: "", root: "wonder", suffix: "ful" },
    meaning: "Very good; amazing.",
    exampleSentence: "We had a wonderful time at the zoo.",
    story: "The magician performed a **wonderful** trick. Everyone thought it was **wonderful** how he made the bird appear. It was a day full of surprises.",
    relatedWords: [
      { word: "wondering", meaning: "A feeling of surprise or admiration" },
      { word: "wonderment", meaning: "A state of awed admiration" }
    ],
    category: "Emotions"
  },
  {
    id: "326",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something in advance.",
    exampleSentence: "We had to prepay for the bus tickets.",
    story: "If you **prepay** for your meal, you can skip the line. Mom decided to **prepay** for the whole family. It made our trip much easier.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "327",
    word: "dancer",
    morphology: { prefix: "", root: "dance", suffix: "er" },
    meaning: "A person who dances.",
    exampleSentence: "The dancer moved gracefully across the floor.",
    story: "The **dancer** practiced for hours every day. Every **dancer** in the show wore a beautiful costume. They all did a great job.",
    relatedWords: [
      { word: "dancing", meaning: "The activity of performing a dance" },
      { word: "dancehall", meaning: "A large public hall for dancing" }
    ],
    category: "Art"
  },
  {
    id: "328",
    word: "loudly",
    morphology: { prefix: "", root: "loud", suffix: "ly" },
    meaning: "In a way that makes a lot of noise.",
    exampleSentence: "The thunder boomed loudly in the sky.",
    story: "The children laughed **loudly** at the joke. They were so **loudly** cheering that the neighbors could hear them. It was a very fun party.",
    relatedWords: [
      { word: "loudness", meaning: "The quality of being loud" },
      { word: "loudspeaker", meaning: "A device that converts electrical signals into sound" }
    ],
    category: "Everyday Life"
  },
  {
    id: "329",
    word: "unhook",
    morphology: { prefix: "un", root: "hook", suffix: "" },
    meaning: "To release something from a hook.",
    exampleSentence: "Can you help me unhook my backpack?",
    story: "I had to **unhook** the fish from the line. It was hard to **unhook** it without hurting it. Finally, I let the fish go back into the water.",
    relatedWords: [
      { word: "hooked", meaning: "Attached or fastened with a hook" },
      { word: "hooking", meaning: "The action of catching with a hook" }
    ],
    category: "Activities"
  },
  {
    id: "330",
    word: "remake",
    morphology: { prefix: "re", root: "make", suffix: "" },
    meaning: "To make something again.",
    exampleSentence: "I had to remake my bed this morning.",
    story: "The artist decided to **remake** the old statue. She wanted to **remake** it using better materials. The new version was even more beautiful.",
    relatedWords: [
      { word: "maker", meaning: "A person or thing that makes something" },
      { word: "making", meaning: "The action of creating something" }
    ],
    category: "Art"
  },
  {
    id: "331",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Brave and not afraid.",
    exampleSentence: "The fearless knight fought the dragon.",
    story: "The **fearless** girl climbed to the top of the tree. She was so **fearless** that she didn't even look down. Everyone was amazed by her courage.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "332",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something.",
    exampleSentence: "I dislike eating cold pizza.",
    story: "Many people **dislike** getting up early. I also **dislike** it when it's dark outside in the morning. I prefer to sleep in!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "333",
    word: "hopeful",
    morphology: { prefix: "", root: "hope", suffix: "ful" },
    meaning: "Feeling or showing hope.",
    exampleSentence: "We are hopeful that the weather will be nice.",
    story: "The **hopeful** gardener waited for the seeds to sprout. She felt **hopeful** when she saw the first green leaf. Soon, her garden was full of flowers.",
    relatedWords: [
      { word: "hopeless", meaning: "Feeling that there is no hope" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "334",
    word: "preorder",
    morphology: { prefix: "pre", root: "order", suffix: "" },
    meaning: "To order something before it is available.",
    exampleSentence: "I want to preorder the new video game.",
    story: "We had to **preorder** the book at the store. If you **preorder**, you get it on the very first day. I was so excited to start reading!",
    relatedWords: [
      { word: "ordering", meaning: "The action of putting in order" },
      { word: "orderly", meaning: "Neatly and methodically arranged" }
    ],
    category: "Shopping"
  },
  {
    id: "335",
    word: "baker",
    morphology: { prefix: "", root: "bake", suffix: "er" },
    meaning: "A person who bakes bread or cakes.",
    exampleSentence: "The baker made a delicious chocolate cake.",
    story: "The **baker** woke up very early to start the ovens. Every **baker** in the shop was busy making fresh bread. The smell was wonderful.",
    relatedWords: [
      { word: "baking", meaning: "The activity of cooking food in an oven" },
      { word: "bakery", meaning: "A place where bread and cakes are made or sold" }
    ],
    category: "Cooking"
  },
  {
    id: "336",
    word: "softly",
    morphology: { prefix: "", root: "soft", suffix: "ly" },
    meaning: "In a quiet or gentle way.",
    exampleSentence: "She spoke softly so she wouldn't wake the baby.",
    story: "The snow fell **softly** on the ground. It was so **softly** landing that you couldn't hear a sound. The world looked like a white blanket.",
    relatedWords: [
      { word: "softness", meaning: "The quality of being soft" },
      { word: "soften", meaning: "Make or become less hard" }
    ],
    category: "Everyday Life"
  },
  {
    id: "337",
    word: "unzip",
    morphology: { prefix: "un", root: "zip", suffix: "" },
    meaning: "To open a zipper.",
    exampleSentence: "Please unzip your jacket before you sit down.",
    story: "I had to **unzip** my bag to find my lunch. It was hard to **unzip** because it was so full. Finally, I found my sandwich!",
    relatedWords: [
      { word: "zipper", meaning: "A device used for fastening clothes" },
      { word: "zipping", meaning: "The action of fastening with a zipper" }
    ],
    category: "Everyday Life"
  },
  {
    id: "338",
    word: "recall",
    morphology: { prefix: "re", root: "call", suffix: "" },
    meaning: "To remember something.",
    exampleSentence: "I can't recall where I put my keys.",
    story: "The witness tried to **recall** what happened. It was hard to **recall** every detail of the event. But then a small memory came back.",
    relatedWords: [
      { word: "calling", meaning: "The action of shouting or crying out" },
      { word: "caller", meaning: "A person who makes a phone call" }
    ],
    category: "School"
  },
  {
    id: "339",
    word: "homeless",
    morphology: { prefix: "", root: "home", suffix: "less" },
    meaning: "Without a home.",
    exampleSentence: "The shelter helps homeless people in the city.",
    story: "The **homeless** puppy was shivering in the rain. A kind family took the **homeless** dog in and gave it a warm bed. Now it has a forever home.",
    relatedWords: [
      { word: "homely", meaning: "Simple but cozy and comfortable" },
      { word: "homing", meaning: "Relating to an animal's ability to return home" }
    ],
    category: "Social"
  },
  {
    id: "340",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone or something.",
    exampleSentence: "I distrust the thin ice on the pond.",
    story: "It is wise to **distrust** a stranger who offers you candy. You should always **distrust** things that seem too good to be true. Stay safe!",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Safety"
  },
  {
    id: "341",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Grateful and appreciative.",
    exampleSentence: "I am thankful for the help you gave me.",
    story: "The **thankful** boy wrote a card to his teacher. He felt **thankful** for all the things he had learned. It was a very nice gesture.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "342",
    word: "prepaid",
    morphology: { prefix: "pre", root: "pay", suffix: "ed" },
    meaning: "Paid for in advance.",
    exampleSentence: "I have a prepaid phone card.",
    story: "We used a **prepaid** pass to enter the theme park. Since it was **prepaid**, we didn't have to wait at the ticket booth. We went straight to the rides!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "343",
    word: "runner",
    morphology: { prefix: "", root: "run", suffix: "er" },
    meaning: "A person who runs.",
    exampleSentence: "The runner crossed the finish line first.",
    story: "The **runner** trained every morning in the park. Every **runner** in the race was very fast. It was a very close competition.",
    relatedWords: [
      { word: "running", meaning: "The activity of moving fast on foot" },
      { word: "runway", meaning: "A strip of hard ground for aircraft" }
    ],
    category: "Activities"
  },
  {
    id: "344",
    word: "quietly",
    morphology: { prefix: "", root: "quiet", suffix: "ly" },
    meaning: "In a quiet way; without noise.",
    exampleSentence: "Please walk quietly in the library.",
    story: "The cat crept **quietly** toward the mouse. It moved so **quietly** that the mouse didn't even hear it. But the mouse was fast and got away!",
    relatedWords: [
      { word: "quietness", meaning: "The quality of being quiet" },
      { word: "quieten", meaning: "Make or become quiet" }
    ],
    category: "Everyday Life"
  },
  {
    id: "345",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Having bad luck.",
    exampleSentence: "It was unlucky that I lost my favorite pen.",
    story: "The **unlucky** team lost the game in the last minute. They felt **unlucky** because they had played so well. But they promised to try harder next time.",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "346",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again to improve it.",
    exampleSentence: "I had to rewrite my poem for the contest.",
    story: "The author decided to **rewrite** the ending of the book. She wanted to **rewrite** it to make it more exciting. The new ending was much better.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes" },
      { word: "writing", meaning: "The activity of creating written work" }
    ],
    category: "School"
  },
  {
    id: "347",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care.",
    exampleSentence: "It was careless to leave the door unlocked.",
    story: "The **careless** driver almost hit a tree. He was being **careless** and not watching the road. He learned a very important lesson that day.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "348",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone else.",
    exampleSentence: "I disagree with the idea that cats are better than dogs.",
    story: "The two friends would often **disagree** on what movie to watch. Even when they **disagree**, they are still best friends. They always find a compromise.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "349",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Full of fun and high spirits.",
    exampleSentence: "The playful puppy barked at the ball.",
    story: "The **playful** children ran around the garden. They were so **playful** that they didn't want to come inside for dinner. It was a beautiful evening.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Everyday Life"
  },
  {
    id: "350",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before cooking.",
    exampleSentence: "You must preheat the oven to 350 degrees.",
    story: "We had to **preheat** the oven for the pizza. While it was on **preheat**, we added the toppings. Soon, the pizza was ready to bake!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "351",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who teaches students.",
    exampleSentence: "My teacher helps me learn math.",
    story: "The **teacher** explained the lesson very clearly. Every **teacher** in the school is very dedicated. We are lucky to have such good helpers.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "352",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "In a fast manner.",
    exampleSentence: "The cat jumped quickly onto the table.",
    story: "The boy ran **quickly** to catch the bus. He had to move **quicky** because he was late. He made it just in time!",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Everyday Life"
  },
  {
    id: "353",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Feeling sad or miserable.",
    exampleSentence: "The girl felt unhappy when she lost her doll.",
    story: "The **unhappy** child cried for his mother. He felt **unhappy** until she gave him a big hug. Then he felt much better.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "354",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again after it has been damaged.",
    exampleSentence: "They had to rebuild the house after the fire.",
    story: "The city decided to **rebuild** the old bridge. It took many months to **rebuild** it properly. Now it is safe for everyone to cross.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "355",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Having no fear; very brave.",
    exampleSentence: "The fearless explorer went into the jungle.",
    story: "The **fearless** boy wasn't afraid of the dark. He was so **fearless** that he went into the basement alone. He is the bravest person I know.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "356",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "I disagree with your choice of music.",
    story: "The two scientists would often **disagree** on the results. Even when they **disagree**, they work together to find the truth. It is a good way to learn.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "357",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pleasing to the senses.",
    exampleSentence: "The garden was full of beautiful flowers.",
    story: "We saw a **beautiful** rainbow after the storm. The **beautiful** colors stretched across the sky. It was a truly amazing sight.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "358",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Don't forget to preheat the oven for the cake.",
    story: "Mom told me to **preheat** the oven to 400 degrees. While it was on **preheat**, we prepared the vegetables. Soon, dinner was cooking!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "359",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who provides help.",
    exampleSentence: "I am a helpful helper in the kitchen.",
    story: "The **helper** carried the heavy bags for the old lady. Every **helper** in the community is very appreciated. It is good to be kind to others.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "Social"
  },
  {
    id: "360",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind and gentle way.",
    exampleSentence: "She smiled kindly at the little boy.",
    story: "The teacher spoke **kindly** to the crying child. She **kindly** wiped away his tears and gave him a sticker. He felt much better.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "361",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "362",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "363",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks.",
    exampleSentence: "I am thankful for my family.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "364",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "365",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "366",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "367",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "368",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "369",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time together.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "370",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "371",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "372",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed; not quickly.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "373",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight to see.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "374",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "375",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "376",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "377",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Free from disturbance; tranquil.",
    exampleSentence: "The morning was peaceful and quiet.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "378",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A preliminary test to evaluate knowledge.",
    exampleSentence: "We took a pretest before starting the new unit.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "379",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints pictures or buildings.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "380",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "381",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck; unfortunate.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "382",
    word: "repay",
    morphology: { prefix: "re", root: "pay", suffix: "" },
    meaning: "To pay back money that you owe.",
    exampleSentence: "I will repay you for the lunch tomorrow.",
    story: "Sam borrowed five dollars from his sister. He promised to **repay** her as soon as he got his allowance. He felt good when he was able to **repay** the debt.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "383",
    word: "breathless",
    morphology: { prefix: "", root: "breath", suffix: "less" },
    meaning: "Out of breath; gasping.",
    exampleSentence: "The race left the runners breathless.",
    story: "After running up the hill, I was **breathless**. I sat down until I was no longer **breathless**. It was a long way to the top!",
    relatedWords: [
      { word: "breathing", meaning: "The process of taking air into the lungs" },
      { word: "breathtaking", meaning: "Astonishing or awe-inspiring" }
    ],
    category: "Activities"
  },
  {
    id: "384",
    word: "disobey",
    morphology: { prefix: "dis", root: "obey", suffix: "" },
    meaning: "To not follow rules or orders.",
    exampleSentence: "You should never disobey the safety rules.",
    story: "The puppy would sometimes **disobey** its owner. If you **disobey** the signs, you might get in trouble. It is important to listen carefully.",
    relatedWords: [
      { word: "obedience", meaning: "Compliance with an order or request" },
      { word: "obedient", meaning: "Complying or willing to comply with orders" }
    ],
    category: "Social"
  },
  {
    id: "385",
    word: "wonderful",
    morphology: { prefix: "", root: "wonder", suffix: "ful" },
    meaning: "Very good; amazing.",
    exampleSentence: "We had a wonderful time at the zoo.",
    story: "The magician performed a **wonderful** trick. Everyone thought it was **wonderful** how he made the bird appear. It was a day full of surprises.",
    relatedWords: [
      { word: "wondering", meaning: "A feeling of surprise or admiration" },
      { word: "wonderment", meaning: "A state of awed admiration" }
    ],
    category: "Emotions"
  },
  {
    id: "386",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something in advance.",
    exampleSentence: "We had to prepay for the bus tickets.",
    story: "If you **prepay** for your meal, you can skip the line. Mom decided to **prepay** for the whole family. It made our trip much easier.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "387",
    word: "dancer",
    morphology: { prefix: "", root: "dance", suffix: "er" },
    meaning: "A person who dances.",
    exampleSentence: "The dancer moved gracefully across the floor.",
    story: "The **dancer** practiced for hours every day. Every **dancer** in the show wore a beautiful costume. They all did a great job.",
    relatedWords: [
      { word: "dancing", meaning: "The activity of performing a dance" },
      { word: "dancehall", meaning: "A large public hall for dancing" }
    ],
    category: "Art"
  },
  {
    id: "388",
    word: "loudly",
    morphology: { prefix: "", root: "loud", suffix: "ly" },
    meaning: "In a way that makes a lot of noise.",
    exampleSentence: "The thunder boomed loudly in the sky.",
    story: "The children laughed **loudly** at the joke. They were so **loudly** cheering that the neighbors could hear them. It was a very fun party.",
    relatedWords: [
      { word: "loudness", meaning: "The quality of being loud" },
      { word: "loudspeaker", meaning: "A device that converts electrical signals into sound" }
    ],
    category: "Everyday Life"
  },
  {
    id: "389",
    word: "unhook",
    morphology: { prefix: "un", root: "hook", suffix: "" },
    meaning: "To release something from a hook.",
    exampleSentence: "Can you help me unhook my backpack?",
    story: "I had to **unhook** the fish from the line. It was hard to **unhook** it without hurting it. Finally, I let the fish go back into the water.",
    relatedWords: [
      { word: "hooked", meaning: "Attached or fastened with a hook" },
      { word: "hooking", meaning: "The action of catching with a hook" }
    ],
    category: "Activities"
  },
  {
    id: "390",
    word: "remake",
    morphology: { prefix: "re", root: "make", suffix: "" },
    meaning: "To make something again.",
    exampleSentence: "I had to remake my bed this morning.",
    story: "The artist decided to **remake** the old statue. She wanted to **remake** it using better materials. The new version was even more beautiful.",
    relatedWords: [
      { word: "maker", meaning: "A person or thing that makes something" },
      { word: "making", meaning: "The action of creating something" }
    ],
    category: "Art"
  },
  {
    id: "391",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Brave and not afraid.",
    exampleSentence: "The fearless knight fought the dragon.",
    story: "The **fearless** girl climbed to the top of the tree. She was so **fearless** that she didn't even look down. Everyone was amazed by her courage.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "392",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something.",
    exampleSentence: "I dislike eating cold pizza.",
    story: "Many people **dislike** getting up early. I also **dislike** it when it's dark outside in the morning. I prefer to sleep in!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "393",
    word: "hopeful",
    morphology: { prefix: "", root: "hope", suffix: "ful" },
    meaning: "Feeling or showing hope.",
    exampleSentence: "We are hopeful that the weather will be nice.",
    story: "The **hopeful** gardener waited for the seeds to sprout. She felt **hopeful** when she saw the first green leaf. Soon, her garden was full of flowers.",
    relatedWords: [
      { word: "hopeless", meaning: "Feeling that there is no hope" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "394",
    word: "preorder",
    morphology: { prefix: "pre", root: "order", suffix: "" },
    meaning: "To order something before it is available.",
    exampleSentence: "I want to preorder the new video game.",
    story: "We had to **preorder** the book at the store. If you **preorder**, you get it on the very first day. I was so excited to start reading!",
    relatedWords: [
      { word: "ordering", meaning: "The action of putting in order" },
      { word: "orderly", meaning: "Neatly and methodically arranged" }
    ],
    category: "Shopping"
  },
  {
    id: "395",
    word: "baker",
    morphology: { prefix: "", root: "bake", suffix: "er" },
    meaning: "A person who bakes bread or cakes.",
    exampleSentence: "The baker made a delicious chocolate cake.",
    story: "The **baker** woke up very early to start the ovens. Every **baker** in the shop was busy making fresh bread. The smell was wonderful.",
    relatedWords: [
      { word: "baking", meaning: "The activity of cooking food in an oven" },
      { word: "bakery", meaning: "A place where bread and cakes are made or sold" }
    ],
    category: "Cooking"
  },
  {
    id: "396",
    word: "softly",
    morphology: { prefix: "", root: "soft", suffix: "ly" },
    meaning: "In a quiet or gentle way.",
    exampleSentence: "She spoke softly so she wouldn't wake the baby.",
    story: "The snow fell **softly** on the ground. It was so **softly** landing that you couldn't hear a sound. The world looked like a white blanket.",
    relatedWords: [
      { word: "softness", meaning: "The quality of being soft" },
      { word: "soften", meaning: "Make or become less hard" }
    ],
    category: "Everyday Life"
  },
  {
    id: "397",
    word: "unzip",
    morphology: { prefix: "un", root: "zip", suffix: "" },
    meaning: "To open a zipper.",
    exampleSentence: "Please unzip your jacket before you sit down.",
    story: "I had to **unzip** my bag to find my lunch. It was hard to **unzip** because it was so full. Finally, I found my sandwich!",
    relatedWords: [
      { word: "zipper", meaning: "A device used for fastening clothes" },
      { word: "zipping", meaning: "The action of fastening with a zipper" }
    ],
    category: "Everyday Life"
  },
  {
    id: "398",
    word: "recall",
    morphology: { prefix: "re", root: "call", suffix: "" },
    meaning: "To remember something.",
    exampleSentence: "I can't recall where I put my keys.",
    story: "The witness tried to **recall** what happened. It was hard to **recall** every detail of the event. But then a small memory came back.",
    relatedWords: [
      { word: "calling", meaning: "The action of shouting or crying out" },
      { word: "caller", meaning: "A person who makes a phone call" }
    ],
    category: "School"
  },
  {
    id: "399",
    word: "homeless",
    morphology: { prefix: "", root: "home", suffix: "less" },
    meaning: "Without a home.",
    exampleSentence: "The shelter helps homeless people in the city.",
    story: "The **homeless** puppy was shivering in the rain. A kind family took the **homeless** dog in and gave it a warm bed. Now it has a forever home.",
    relatedWords: [
      { word: "homely", meaning: "Simple but cozy and comfortable" },
      { word: "homing", meaning: "Relating to an animal's ability to return home" }
    ],
    category: "Social"
  },
  {
    id: "400",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone or something.",
    exampleSentence: "I distrust the thin ice on the pond.",
    story: "It is wise to **distrust** a stranger who offers you candy. You should always **distrust** things that seem too good to be true. Stay safe!",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Safety"
  },
  {
    id: "401",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Grateful and appreciative.",
    exampleSentence: "I am thankful for the help you gave me.",
    story: "The **thankful** boy wrote a card to his teacher. He felt **thankful** for all the things he had learned. It was a very nice gesture.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "402",
    word: "prepaid",
    morphology: { prefix: "pre", root: "pay", suffix: "ed" },
    meaning: "Paid for in advance.",
    exampleSentence: "I have a prepaid phone card.",
    story: "We used a **prepaid** pass to enter the theme park. Since it was **prepaid**, we didn't have to wait at the ticket booth. We went straight to the rides!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "403",
    word: "runner",
    morphology: { prefix: "", root: "run", suffix: "er" },
    meaning: "A person who runs.",
    exampleSentence: "The runner crossed the finish line first.",
    story: "The **runner** trained every morning in the park. Every **runner** in the race was very fast. It was a very close competition.",
    relatedWords: [
      { word: "running", meaning: "The activity of moving fast on foot" },
      { word: "runway", meaning: "A strip of hard ground for aircraft" }
    ],
    category: "Activities"
  },
  {
    id: "404",
    word: "quietly",
    morphology: { prefix: "", root: "quiet", suffix: "ly" },
    meaning: "In a quiet way; without noise.",
    exampleSentence: "Please walk quietly in the library.",
    story: "The cat crept **quietly** toward the mouse. It moved so **quietly** that the mouse didn't even hear it. But the mouse was fast and got away!",
    relatedWords: [
      { word: "quietness", meaning: "The quality of being quiet" },
      { word: "quieten", meaning: "Make or become quiet" }
    ],
    category: "Everyday Life"
  },
  {
    id: "405",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Having bad luck.",
    exampleSentence: "It was unlucky that I lost my favorite pen.",
    story: "The **unlucky** team lost the game in the last minute. They felt **unlucky** because they had played so well. But they promised to try harder next time.",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "406",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again to improve it.",
    exampleSentence: "I had to rewrite my poem for the contest.",
    story: "The author decided to **rewrite** the ending of the book. She wanted to **rewrite** it to make it more exciting. The new ending was much better.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes" },
      { word: "writing", meaning: "The activity of creating written work" }
    ],
    category: "School"
  },
  {
    id: "407",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care.",
    exampleSentence: "It was careless to leave the door unlocked.",
    story: "The **careless** driver almost hit a tree. He was being **careless** and not watching the road. He learned a very important lesson that day.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "408",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone else.",
    exampleSentence: "I disagree with the idea that cats are better than dogs.",
    story: "The two friends would often **disagree** on what movie to watch. Even when they **disagree**, they are still best friends. They always find a compromise.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "409",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Full of fun and high spirits.",
    exampleSentence: "The playful puppy barked at the ball.",
    story: "The **playful** children ran around the garden. They were so **playful** that they didn't want to come inside for dinner. It was a beautiful evening.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Everyday Life"
  },
  {
    id: "410",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before cooking.",
    exampleSentence: "You must preheat the oven to 350 degrees.",
    story: "We had to **preheat** the oven for the pizza. While it was on **preheat**, we added the toppings. Soon, the pizza was ready to bake!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "411",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who teaches students.",
    exampleSentence: "My teacher helps me learn math.",
    story: "The **teacher** explained the lesson very clearly. Every **teacher** in the school is very dedicated. We are lucky to have such good helpers.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "412",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "In a fast manner.",
    exampleSentence: "The cat jumped quickly onto the table.",
    story: "The boy ran **quickly** to catch the bus. He had to move **quicky** because he was late. He made it just in time!",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Everyday Life"
  },
  {
    id: "413",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Feeling sad or miserable.",
    exampleSentence: "The girl felt unhappy when she lost her doll.",
    story: "The **unhappy** child cried for his mother. He felt **unhappy** until she gave him a big hug. Then he felt much better.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "414",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again after it has been damaged.",
    exampleSentence: "They had to rebuild the house after the fire.",
    story: "The city decided to **rebuild** the old bridge. It took many months to **rebuild** it properly. Now it is safe for everyone to cross.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "415",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Having no fear; very brave.",
    exampleSentence: "The fearless explorer went into the jungle.",
    story: "The **fearless** boy wasn't afraid of the dark. He was so **fearless** that he went into the basement alone. He is the bravest person I know.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "416",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "I disagree with your choice of music.",
    story: "The two scientists would often **disagree** on the results. Even when they **disagree**, they work together to find the truth. It is a good way to learn.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "417",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pleasing to the senses.",
    exampleSentence: "The garden was full of beautiful flowers.",
    story: "We saw a **beautiful** rainbow after the storm. The **beautiful** colors stretched across the sky. It was a truly amazing sight.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "418",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Don't forget to preheat the oven for the cake.",
    story: "Mom told me to **preheat** the oven to 400 degrees. While it was on **preheat**, we prepared the vegetables. Soon, dinner was cooking!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "419",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who provides help.",
    exampleSentence: "I am a helpful helper in the kitchen.",
    story: "The **helper** carried the heavy bags for the old lady. Every **helper** in the community is very appreciated. It is good to be kind to others.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "Social"
  },
  {
    id: "420",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind and gentle way.",
    exampleSentence: "She smiled kindly at the little boy.",
    story: "The teacher spoke **kindly** to the crying child. She **kindly** wiped away his tears and gave him a sticker. He felt much better.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "421",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "422",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "423",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks.",
    exampleSentence: "I am thankful for my family.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "424",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "425",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "426",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "427",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "428",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "429",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time together.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "430",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "431",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "432",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed; not quickly.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "433",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight to see.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "434",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "435",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "436",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "437",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Free from disturbance; tranquil.",
    exampleSentence: "The morning was peaceful and quiet.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "438",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A preliminary test to evaluate knowledge.",
    exampleSentence: "We took a pretest before starting the new unit.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "439",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints pictures or buildings.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "440",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  },
  {
    id: "441",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck; unfortunate.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "442",
    word: "repay",
    morphology: { prefix: "re", root: "pay", suffix: "" },
    meaning: "To pay back money that you owe.",
    exampleSentence: "I will repay you for the lunch tomorrow.",
    story: "Sam borrowed five dollars from his sister. He promised to **repay** her as soon as he got his allowance. He felt good when he was able to **repay** the debt.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "443",
    word: "breathless",
    morphology: { prefix: "", root: "breath", suffix: "less" },
    meaning: "Out of breath; gasping.",
    exampleSentence: "The race left the runners breathless.",
    story: "After running up the hill, I was **breathless**. I sat down until I was no longer **breathless**. It was a long way to the top!",
    relatedWords: [
      { word: "breathing", meaning: "The process of taking air into the lungs" },
      { word: "breathtaking", meaning: "Astonishing or awe-inspiring" }
    ],
    category: "Activities"
  },
  {
    id: "444",
    word: "disobey",
    morphology: { prefix: "dis", root: "obey", suffix: "" },
    meaning: "To not follow rules or orders.",
    exampleSentence: "You should never disobey the safety rules.",
    story: "The puppy would sometimes **disobey** its owner. If you **disobey** the signs, you might get in trouble. It is important to listen carefully.",
    relatedWords: [
      { word: "obedience", meaning: "Compliance with an order or request" },
      { word: "obedient", meaning: "Complying or willing to comply with orders" }
    ],
    category: "Social"
  },
  {
    id: "445",
    word: "wonderful",
    morphology: { prefix: "", root: "wonder", suffix: "ful" },
    meaning: "Very good; amazing.",
    exampleSentence: "We had a wonderful time at the zoo.",
    story: "The magician performed a **wonderful** trick. Everyone thought it was **wonderful** how he made the bird appear. It was a day full of surprises.",
    relatedWords: [
      { word: "wondering", meaning: "A feeling of surprise or admiration" },
      { word: "wonderment", meaning: "A state of awed admiration" }
    ],
    category: "Emotions"
  },
  {
    id: "446",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something in advance.",
    exampleSentence: "We had to prepay for the bus tickets.",
    story: "If you **prepay** for your meal, you can skip the line. Mom decided to **prepay** for the whole family. It made our trip much easier.",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "447",
    word: "dancer",
    morphology: { prefix: "", root: "dance", suffix: "er" },
    meaning: "A person who dances.",
    exampleSentence: "The dancer moved gracefully across the floor.",
    story: "The **dancer** practiced for hours every day. Every **dancer** in the show wore a beautiful costume. They all did a great job.",
    relatedWords: [
      { word: "dancing", meaning: "The activity of performing a dance" },
      { word: "dancehall", meaning: "A large public hall for dancing" }
    ],
    category: "Art"
  },
  {
    id: "448",
    word: "loudly",
    morphology: { prefix: "", root: "loud", suffix: "ly" },
    meaning: "In a way that makes a lot of noise.",
    exampleSentence: "The thunder boomed loudly in the sky.",
    story: "The children laughed **loudly** at the joke. They were so **loudly** cheering that the neighbors could hear them. It was a very fun party.",
    relatedWords: [
      { word: "loudness", meaning: "The quality of being loud" },
      { word: "loudspeaker", meaning: "A device that converts electrical signals into sound" }
    ],
    category: "Everyday Life"
  },
  {
    id: "449",
    word: "unhook",
    morphology: { prefix: "un", root: "hook", suffix: "" },
    meaning: "To release something from a hook.",
    exampleSentence: "Can you help me unhook my backpack?",
    story: "I had to **unhook** the fish from the line. It was hard to **unhook** it without hurting it. Finally, I let the fish go back into the water.",
    relatedWords: [
      { word: "hooked", meaning: "Attached or fastened with a hook" },
      { word: "hooking", meaning: "The action of catching with a hook" }
    ],
    category: "Activities"
  },
  {
    id: "450",
    word: "remake",
    morphology: { prefix: "re", root: "make", suffix: "" },
    meaning: "To make something again.",
    exampleSentence: "I had to remake my bed this morning.",
    story: "The artist decided to **remake** the old statue. She wanted to **remake** it using better materials. The new version was even more beautiful.",
    relatedWords: [
      { word: "maker", meaning: "A person or thing that makes something" },
      { word: "making", meaning: "The action of creating something" }
    ],
    category: "Art"
  },
  {
    id: "451",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Brave and not afraid.",
    exampleSentence: "The fearless knight fought the dragon.",
    story: "The **fearless** girl climbed to the top of the tree. She was so **fearless** that she didn't even look down. Everyone was amazed by her courage.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "452",
    word: "dislike",
    morphology: { prefix: "dis", root: "like", suffix: "" },
    meaning: "To not like something.",
    exampleSentence: "I dislike eating cold pizza.",
    story: "Many people **dislike** getting up early. I also **dislike** it when it's dark outside in the morning. I prefer to sleep in!",
    relatedWords: [
      { word: "liking", meaning: "A feeling of regard or fondness" },
      { word: "likable", meaning: "Pleasant or easy to like" }
    ],
    category: "Emotions"
  },
  {
    id: "453",
    word: "hopeful",
    morphology: { prefix: "", root: "hope", suffix: "ful" },
    meaning: "Feeling or showing hope.",
    exampleSentence: "We are hopeful that the weather will be nice.",
    story: "The **hopeful** gardener waited for the seeds to sprout. She felt **hopeful** when she saw the first green leaf. Soon, her garden was full of flowers.",
    relatedWords: [
      { word: "hopeless", meaning: "Feeling that there is no hope" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "454",
    word: "preorder",
    morphology: { prefix: "pre", root: "order", suffix: "" },
    meaning: "To order something before it is available.",
    exampleSentence: "I want to preorder the new video game.",
    story: "We had to **preorder** the book at the store. If you **preorder**, you get it on the very first day. I was so excited to start reading!",
    relatedWords: [
      { word: "ordering", meaning: "The action of putting in order" },
      { word: "orderly", meaning: "Neatly and methodically arranged" }
    ],
    category: "Shopping"
  },
  {
    id: "455",
    word: "baker",
    morphology: { prefix: "", root: "bake", suffix: "er" },
    meaning: "A person who bakes bread or cakes.",
    exampleSentence: "The baker made a delicious chocolate cake.",
    story: "The **baker** woke up very early to start the ovens. Every **baker** in the shop was busy making fresh bread. The smell was wonderful.",
    relatedWords: [
      { word: "baking", meaning: "The activity of cooking food in an oven" },
      { word: "bakery", meaning: "A place where bread and cakes are made or sold" }
    ],
    category: "Cooking"
  },
  {
    id: "456",
    word: "softly",
    morphology: { prefix: "", root: "soft", suffix: "ly" },
    meaning: "In a quiet or gentle way.",
    exampleSentence: "She spoke softly so she wouldn't wake the baby.",
    story: "The snow fell **softly** on the ground. It was so **softly** landing that you couldn't hear a sound. The world looked like a white blanket.",
    relatedWords: [
      { word: "softness", meaning: "The quality of being soft" },
      { word: "soften", meaning: "Make or become less hard" }
    ],
    category: "Everyday Life"
  },
  {
    id: "457",
    word: "unzip",
    morphology: { prefix: "un", root: "zip", suffix: "" },
    meaning: "To open a zipper.",
    exampleSentence: "Please unzip your jacket before you sit down.",
    story: "I had to **unzip** my bag to find my lunch. It was hard to **unzip** because it was so full. Finally, I found my sandwich!",
    relatedWords: [
      { word: "zipper", meaning: "A device used for fastening clothes" },
      { word: "zipping", meaning: "The action of fastening with a zipper" }
    ],
    category: "Everyday Life"
  },
  {
    id: "458",
    word: "recall",
    morphology: { prefix: "re", root: "call", suffix: "" },
    meaning: "To remember something.",
    exampleSentence: "I can't recall where I put my keys.",
    story: "The witness tried to **recall** what happened. It was hard to **recall** every detail of the event. But then a small memory came back.",
    relatedWords: [
      { word: "calling", meaning: "The action of shouting or crying out" },
      { word: "caller", meaning: "A person who makes a phone call" }
    ],
    category: "School"
  },
  {
    id: "459",
    word: "homeless",
    morphology: { prefix: "", root: "home", suffix: "less" },
    meaning: "Without a home.",
    exampleSentence: "The shelter helps homeless people in the city.",
    story: "The **homeless** puppy was shivering in the rain. A kind family took the **homeless** dog in and gave it a warm bed. Now it has a forever home.",
    relatedWords: [
      { word: "homely", meaning: "Simple but cozy and comfortable" },
      { word: "homing", meaning: "Relating to an animal's ability to return home" }
    ],
    category: "Social"
  },
  {
    id: "460",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone or something.",
    exampleSentence: "I distrust the thin ice on the pond.",
    story: "It is wise to **distrust** a stranger who offers you candy. You should always **distrust** things that seem too good to be true. Stay safe!",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Safety"
  },
  {
    id: "461",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Grateful and appreciative.",
    exampleSentence: "I am thankful for the help you gave me.",
    story: "The **thankful** boy wrote a card to his teacher. He felt **thankful** for all the things he had learned. It was a very nice gesture.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "462",
    word: "prepaid",
    morphology: { prefix: "pre", root: "pay", suffix: "ed" },
    meaning: "Paid for in advance.",
    exampleSentence: "I have a prepaid phone card.",
    story: "We used a **prepaid** pass to enter the theme park. Since it was **prepaid**, we didn't have to wait at the ticket booth. We went straight to the rides!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payer", meaning: "A person who pays" }
    ],
    category: "Money"
  },
  {
    id: "463",
    word: "runner",
    morphology: { prefix: "", root: "run", suffix: "er" },
    meaning: "A person who runs.",
    exampleSentence: "The runner crossed the finish line first.",
    story: "The **runner** trained every morning in the park. Every **runner** in the race was very fast. It was a very close competition.",
    relatedWords: [
      { word: "running", meaning: "The activity of moving fast on foot" },
      { word: "runway", meaning: "A strip of hard ground for aircraft" }
    ],
    category: "Activities"
  },
  {
    id: "464",
    word: "quietly",
    morphology: { prefix: "", root: "quiet", suffix: "ly" },
    meaning: "In a quiet way; without noise.",
    exampleSentence: "Please walk quietly in the library.",
    story: "The cat crept **quietly** toward the mouse. It moved so **quietly** that the mouse didn't even hear it. But the mouse was fast and got away!",
    relatedWords: [
      { word: "quietness", meaning: "The quality of being quiet" },
      { word: "quieten", meaning: "Make or become quiet" }
    ],
    category: "Everyday Life"
  },
  {
    id: "465",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Having bad luck.",
    exampleSentence: "It was unlucky that I lost my favorite pen.",
    story: "The **unlucky** team lost the game in the last minute. They felt **unlucky** because they had played so well. But they promised to try harder next time.",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "466",
    word: "rewrite",
    morphology: { prefix: "re", root: "write", suffix: "" },
    meaning: "To write something again to improve it.",
    exampleSentence: "I had to rewrite my poem for the contest.",
    story: "The author decided to **rewrite** the ending of the book. She wanted to **rewrite** it to make it more exciting. The new ending was much better.",
    relatedWords: [
      { word: "writer", meaning: "A person who writes" },
      { word: "writing", meaning: "The activity of creating written work" }
    ],
    category: "School"
  },
  {
    id: "467",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not taking enough care.",
    exampleSentence: "It was careless to leave the door unlocked.",
    story: "The **careless** driver almost hit a tree. He was being **careless** and not watching the road. He learned a very important lesson that day.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "468",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone else.",
    exampleSentence: "I disagree with the idea that cats are better than dogs.",
    story: "The two friends would often **disagree** on what movie to watch. Even when they **disagree**, they are still best friends. They always find a compromise.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "469",
    word: "playful",
    morphology: { prefix: "", root: "play", suffix: "ful" },
    meaning: "Full of fun and high spirits.",
    exampleSentence: "The playful puppy barked at the ball.",
    story: "The **playful** children ran around the garden. They were so **playful** that they didn't want to come inside for dinner. It was a beautiful evening.",
    relatedWords: [
      { word: "player", meaning: "A person taking part in a sport or game" },
      { word: "playing", meaning: "Engaging in activity for enjoyment" }
    ],
    category: "Everyday Life"
  },
  {
    id: "470",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before cooking.",
    exampleSentence: "You must preheat the oven to 350 degrees.",
    story: "We had to **preheat** the oven for the pizza. While it was on **preheat**, we added the toppings. Soon, the pizza was ready to bake!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "471",
    word: "teacher",
    morphology: { prefix: "", root: "teach", suffix: "er" },
    meaning: "A person who teaches students.",
    exampleSentence: "My teacher helps me learn math.",
    story: "The **teacher** explained the lesson very clearly. Every **teacher** in the school is very dedicated. We are lucky to have such good helpers.",
    relatedWords: [
      { word: "teaching", meaning: "The occupation of a teacher" },
      { word: "teachable", meaning: "Able to be taught" }
    ],
    category: "School"
  },
  {
    id: "472",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "In a fast manner.",
    exampleSentence: "The cat jumped quickly onto the table.",
    story: "The boy ran **quickly** to catch the bus. He had to move **quicky** because he was late. He made it just in time!",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Everyday Life"
  },
  {
    id: "473",
    word: "unhappy",
    morphology: { prefix: "un", root: "happy", suffix: "" },
    meaning: "Feeling sad or miserable.",
    exampleSentence: "The girl felt unhappy when she lost her doll.",
    story: "The **unhappy** child cried for his mother. He felt **unhappy** until she gave him a big hug. Then he felt much better.",
    relatedWords: [
      { word: "happiness", meaning: "The state of being happy" },
      { word: "happily", meaning: "In a happy way" }
    ],
    category: "Emotions"
  },
  {
    id: "474",
    word: "rebuild",
    morphology: { prefix: "re", root: "build", suffix: "" },
    meaning: "To build something again after it has been damaged.",
    exampleSentence: "They had to rebuild the house after the fire.",
    story: "The city decided to **rebuild** the old bridge. It took many months to **rebuild** it properly. Now it is safe for everyone to cross.",
    relatedWords: [
      { word: "builder", meaning: "A person who builds things" },
      { word: "building", meaning: "A structure with a roof and walls" }
    ],
    category: "Activities"
  },
  {
    id: "475",
    word: "fearless",
    morphology: { prefix: "", root: "fear", suffix: "less" },
    meaning: "Having no fear; very brave.",
    exampleSentence: "The fearless explorer went into the jungle.",
    story: "The **fearless** boy wasn't afraid of the dark. He was so **fearless** that he went into the basement alone. He is the bravest person I know.",
    relatedWords: [
      { word: "fearful", meaning: "Feeling afraid" },
      { word: "fearing", meaning: "Being afraid of something" }
    ],
    category: "Character"
  },
  {
    id: "476",
    word: "disagree",
    morphology: { prefix: "dis", root: "agree", suffix: "" },
    meaning: "To have a different opinion from someone.",
    exampleSentence: "I disagree with your choice of music.",
    story: "The two scientists would often **disagree** on the results. Even when they **disagree**, they work together to find the truth. It is a good way to learn.",
    relatedWords: [
      { word: "agreement", meaning: "A shared opinion or decision" },
      { word: "agreeable", meaning: "Pleasant or enjoyable" }
    ],
    category: "Social"
  },
  {
    id: "417",
    word: "beautiful",
    morphology: { prefix: "", root: "beauty", suffix: "ful" },
    meaning: "Very pleasing to the senses.",
    exampleSentence: "The garden was full of beautiful flowers.",
    story: "We saw a **beautiful** rainbow after the storm. The **beautiful** colors stretched across the sky. It was a truly amazing sight.",
    relatedWords: [
      { word: "beautify", meaning: "To make something beautiful" },
      { word: "beautician", meaning: "A person who gives beauty treatments" }
    ],
    category: "Art"
  },
  {
    id: "478",
    word: "preheat",
    morphology: { prefix: "pre", root: "heat", suffix: "" },
    meaning: "To heat an oven before using it.",
    exampleSentence: "Don't forget to preheat the oven for the cake.",
    story: "Mom told me to **preheat** the oven to 400 degrees. While it was on **preheat**, we prepared the vegetables. Soon, dinner was cooking!",
    relatedWords: [
      { word: "heater", meaning: "A device for warming a room" },
      { word: "heating", meaning: "The process of making something warm" }
    ],
    category: "Cooking"
  },
  {
    id: "479",
    word: "helper",
    morphology: { prefix: "", root: "help", suffix: "er" },
    meaning: "A person who provides help.",
    exampleSentence: "I am a helpful helper in the kitchen.",
    story: "The **helper** carried the heavy bags for the old lady. Every **helper** in the community is very appreciated. It is good to be kind to others.",
    relatedWords: [
      { word: "helpful", meaning: "Giving help" },
      { word: "helping", meaning: "The action of giving help" }
    ],
    category: "Social"
  },
  {
    id: "480",
    word: "kindly",
    morphology: { prefix: "", root: "kind", suffix: "ly" },
    meaning: "In a kind and gentle way.",
    exampleSentence: "She smiled kindly at the little boy.",
    story: "The teacher spoke **kindly** to the crying child. She **kindly** wiped away his tears and gave him a sticker. He felt much better.",
    relatedWords: [
      { word: "kindness", meaning: "The quality of being friendly and generous" },
      { word: "kindred", meaning: "One's family and relations" }
    ],
    category: "Social"
  },
  {
    id: "481",
    word: "return",
    morphology: { prefix: "re", root: "turn", suffix: "" },
    meaning: "To come or go back.",
    exampleSentence: "When will you return from your trip?",
    story: "The birds **return** to the south every winter. They **return** to the same trees every year. It is amazing how they find their way.",
    relatedWords: [
      { word: "turning", meaning: "The action of rotating" },
      { word: "turnover", meaning: "The amount of money taken by a business" }
    ],
    category: "Nature"
  },
  {
    id: "482",
    word: "unlucky",
    morphology: { prefix: "un", root: "luck", suffix: "y" },
    meaning: "Not having good luck.",
    exampleSentence: "It was unlucky that it rained on our picnic.",
    story: "The **unlucky** boy tripped over a rock. He felt **unlucky** all day until he found a shiny coin. Then his luck changed!",
    relatedWords: [
      { word: "luckily", meaning: "By good fortune" },
      { word: "lucky", meaning: "Having good fortune" }
    ],
    category: "Everyday Life"
  },
  {
    id: "483",
    word: "thankful",
    morphology: { prefix: "", root: "thank", suffix: "ful" },
    meaning: "Feeling or showing thanks.",
    exampleSentence: "I am thankful for my family.",
    story: "We were **thankful** for the warm meal. Everyone felt **thankful** to be together. It was a very special holiday.",
    relatedWords: [
      { word: "thankless", meaning: "Not expressing gratitude" },
      { word: "thanks", meaning: "An expression of gratitude" }
    ],
    category: "Emotions"
  },
  {
    id: "484",
    word: "misread",
    morphology: { prefix: "mis", root: "read", suffix: "" },
    meaning: "To read something incorrectly.",
    exampleSentence: "I misread the sign and went the wrong way.",
    story: "The student would often **misread** the instructions. If you **misread** the map, you might get lost. Always read carefully!",
    relatedWords: [
      { word: "reader", meaning: "A person who reads" },
      { word: "reading", meaning: "The action of looking at written words" }
    ],
    category: "School"
  },
  {
    id: "485",
    word: "unusual",
    morphology: { prefix: "un", root: "usual", suffix: "" },
    meaning: "Not common; strange.",
    exampleSentence: "It was an unusual sight to see a pink elephant.",
    story: "The weather was very **unusual** today. It was **unusual** to see snow in the summer! Everyone was very surprised.",
    relatedWords: [
      { word: "usually", meaning: "Under normal conditions" },
      { word: "usage", meaning: "The action of using something" }
    ],
    category: "Everyday Life"
  },
  {
    id: "486",
    word: "replace",
    morphology: { prefix: "re", root: "place", suffix: "" },
    meaning: "To put something new in place of something old.",
    exampleSentence: "I need to replace the batteries in my toy.",
    story: "The light bulb broke, so Dad had to **replace** it. He decided to **replace** all the old bulbs with new ones. Now the room is much brighter!",
    relatedWords: [
      { word: "placement", meaning: "The action of putting something in a place" },
      { word: "displace", meaning: "Take over the place of" }
    ],
    category: "Home"
  },
  {
    id: "487",
    word: "hopeless",
    morphology: { prefix: "", root: "hope", suffix: "less" },
    meaning: "Feeling that there is no hope.",
    exampleSentence: "The situation felt hopeless when we got lost.",
    story: "The team felt **hopeless** after losing the game. But their coach told them not to feel **hopeless**. They practiced hard and won the next one!",
    relatedWords: [
      { word: "hopeful", meaning: "Feeling or inspiring optimism" },
      { word: "hoping", meaning: "Wanting something to happen" }
    ],
    category: "Emotions"
  },
  {
    id: "488",
    word: "disappear",
    morphology: { prefix: "dis", root: "appear", suffix: "" },
    meaning: "To go out of sight.",
    exampleSentence: "The sun will disappear behind the clouds.",
    story: "The magician made the rabbit **disappear**. We watched it **disappear** right before our eyes! It was a very cool trick.",
    relatedWords: [
      { word: "appearance", meaning: "The way that someone or something looks" },
      { word: "apparent", meaning: "Clearly visible or understood" }
    ],
    category: "Magic"
  },
  {
    id: "489",
    word: "joyful",
    morphology: { prefix: "", root: "joy", suffix: "ful" },
    meaning: "Full of joy; very happy.",
    exampleSentence: "The joyful children played in the park.",
    story: "It was a **joyful** celebration for the birthday boy. The **joyful** music made everyone want to dance. We had a wonderful time together.",
    relatedWords: [
      { word: "joyless", meaning: "Not giving or feeling any pleasure" },
      { word: "enjoy", meaning: "Take delight or pleasure in" }
    ],
    category: "Emotions"
  },
  {
    id: "490",
    word: "prepay",
    morphology: { prefix: "pre", root: "pay", suffix: "" },
    meaning: "To pay for something before you get it.",
    exampleSentence: "You have to prepay for the movie tickets.",
    story: "We had to **prepay** for our lunch at the park. If you **prepay**, you don't have to wait in line later. It saves a lot of time!",
    relatedWords: [
      { word: "payment", meaning: "The action of paying" },
      { word: "payable", meaning: "Required to be paid" }
    ],
    category: "Money"
  },
  {
    id: "491",
    word: "singer",
    morphology: { prefix: "", root: "sing", suffix: "er" },
    meaning: "A person who sings.",
    exampleSentence: "She is a very talented singer.",
    story: "The **singer** performed on the big stage. Every **singer** in the choir sang beautifully. The audience clapped for a long time.",
    relatedWords: [
      { word: "singing", meaning: "The activity of performing songs" },
      { word: "song", meaning: "A short poem or set of words set to music" }
    ],
    category: "Music"
  },
  {
    id: "492",
    word: "slowly",
    morphology: { prefix: "", root: "slow", suffix: "ly" },
    meaning: "At a slow speed; not quickly.",
    exampleSentence: "The turtle moved slowly across the grass.",
    story: "The snail crawled **slowly** up the wall. It moved so **slowly** that it took all day to reach the top. But it never gave up!",
    relatedWords: [
      { word: "slowness", meaning: "The quality of being slow" },
      { word: "slowing", meaning: "Reducing speed" }
    ],
    category: "Nature"
  },
  {
    id: "493",
    word: "unfold",
    morphology: { prefix: "un", root: "fold", suffix: "" },
    meaning: "To open something that was folded.",
    exampleSentence: "Please unfold the map so we can see it.",
    story: "I watched the flower **unfold** its petals. It took a long time to **unfold** in the morning sun. It was a beautiful sight to see.",
    relatedWords: [
      { word: "folder", meaning: "A folding cover or holder" },
      { word: "folding", meaning: "Able to be folded" }
    ],
    category: "Nature"
  },
  {
    id: "494",
    word: "retell",
    morphology: { prefix: "re", root: "tell", suffix: "" },
    meaning: "To tell a story again.",
    exampleSentence: "Can you retell the story of the three little pigs?",
    story: "The teacher asked us to **retell** the story in our own words. When you **retell** a story, you remember it better. We all took turns sharing.",
    relatedWords: [
      { word: "teller", meaning: "A person who tells something" },
      { word: "telling", meaning: "Having a striking or revealing effect" }
    ],
    category: "School"
  },
  {
    id: "495",
    word: "careless",
    morphology: { prefix: "", root: "care", suffix: "less" },
    meaning: "Not giving enough attention or thought.",
    exampleSentence: "He made a careless mistake on his test.",
    story: "The **careless** boy dropped his ice cream. He was being **careless** and didn't see the rock in his way. Next time, he will be more careful.",
    relatedWords: [
      { word: "careful", meaning: "Avoiding danger or mistakes" },
      { word: "caring", meaning: "Displaying kindness and concern" }
    ],
    category: "Safety"
  },
  {
    id: "496",
    word: "distrust",
    morphology: { prefix: "dis", root: "trust", suffix: "" },
    meaning: "To not trust someone.",
    exampleSentence: "I distrust the cat when it is near the fishbowl.",
    story: "The mouse would **distrust** any cheese left in the open. It was wise to **distrust** the trap. The mouse stayed safe in its hole.",
    relatedWords: [
      { word: "trusting", meaning: "Showing trust" },
      { word: "trustworthy", meaning: "Able to be relied on" }
    ],
    category: "Social"
  },
  {
    id: "497",
    word: "peaceful",
    morphology: { prefix: "", root: "peace", suffix: "ful" },
    meaning: "Free from disturbance; tranquil.",
    exampleSentence: "The morning was peaceful and quiet.",
    story: "It was a **peaceful** afternoon in the woods. The **peaceful** sound of the birds was very relaxing. I could have stayed there forever.",
    relatedWords: [
      { word: "peacemaker", meaning: "A person who brings about peace" },
      { word: "peacetime", meaning: "A period when a country is not at war" }
    ],
    category: "Nature"
  },
  {
    id: "498",
    word: "pretest",
    morphology: { prefix: "pre", root: "test", suffix: "" },
    meaning: "A preliminary test to evaluate knowledge.",
    exampleSentence: "We took a pretest before starting the new unit.",
    story: "The teacher gave us a **pretest** on fractions. After the **pretest**, we knew exactly what we needed to study. It helped us learn faster!",
    relatedWords: [
      { word: "tester", meaning: "A person who tests something" },
      { word: "testing", meaning: "The action of testing" }
    ],
    category: "School"
  },
  {
    id: "499",
    word: "painter",
    morphology: { prefix: "", root: "paint", suffix: "er" },
    meaning: "A person who paints pictures or buildings.",
    exampleSentence: "The painter used bright colors for the mural.",
    story: "The **painter** worked all day on the house. Every **painter** in the crew was very skilled. The house looked brand new when they were done.",
    relatedWords: [
      { word: "painting", meaning: "The action of painting" },
      { word: "paintbox", meaning: "A box containing paints" }
    ],
    category: "Art"
  },
  {
    id: "500",
    word: "quickly",
    morphology: { prefix: "", root: "quick", suffix: "ly" },
    meaning: "At a fast speed; rapidly.",
    exampleSentence: "The rabbit ran quickly into the hole.",
    story: "The fire truck drove **quickly** down the street. It had to move **quickly** to reach the fire. Everyone moved out of the way.",
    relatedWords: [
      { word: "quickness", meaning: "The quality of being quick" },
      { word: "quicken", meaning: "Make or become faster" }
    ],
    category: "Safety"
  }
];
