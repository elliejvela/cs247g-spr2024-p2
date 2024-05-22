// item combinations should be split by a comma e.g. "1-1, 1-2"
let resources = {
  default: {
    message: "",
    title: "",
  },
  level1: {
    title: "The Rooftop",
    message:
      "Why am I on top of the roof... my head hurts... \n\n(Get 1-1, 1-2, 1-3, 1-4)",
  },
  "1-1": {
    title: "Lock",
    message: "The door is locked shut...if only I knew the combination",
    interaction: "code",
    code: "3617",
    successMessage:
      "To the next floor... (Unlock Level 2)\n\n(Type 'Level 2' in the first text box)",
  },
  "1-2": {
    title: "Poster",
    message: "A poster to some arts event...interesting",
  },
  "1-3": {
    title: "Over the Roof (Left)",
    message:
      "The building seems about 5 stories tall...I wonder why there's so many police down there",
  },
  "1-4": {
    title: "Over the Roof (Right)",
    message:
      "This art event seems similar to the poster I saw earlier... I wonder if they're related",
  },
  level2: {
    title: "From the roof to the janitor closet",
    message: "After the roof is the janitor's closet... \n\n(Get 2-4, 2-14)",
  },
  "2-1": {
    title: "Boxes",
    message:
      "A bunch of cardboard boxes...I wonder if there's anything in them",
  },
  "2-2": {
    title: "Empty Pots",
    message:
      "Empty pots...it seems like it's been a while since they were last cared for",
  },
  "2-3": {
    title: "Shelf",
    message:
      "There appears to be a number of items on this shelf...\n\n(Get 2-2, 2-6, 2-7, 2-8, 2-9)",
  },
  "2-4": {
    title: "Janitor Closet",
    message:
      "A...janitor's closet? The only exit from the roof led me to a dead end? \n\n(Get 2-1, 2-3, 2-15, 2-17)",
  },
  "2-5": {
    title: "Reinforced Boxes",
    message: "Now these boxes aren't so flimsy anymore",
  },
  "2-6": {
    title: "large Mulch Bags",
    message: "Mulch bags, but they're too malleable to stand on",
  },
  "2-7": {
    title: "Messed Up Rag",
    message: "Agh, is that blood? What happened here...",
  },
  "2-8": {
    title: "Tool Box",
    message:
      "An old tool box...there's a lock on it, but the drop seems to have messed it up. I wonder if I can't force it open with something...",
  },
  "2-9": {
    title: "Potted Plants",
    message: "The plants seem to have been dead for quite some time now...",
  },
  "2-10": {
    title: "Screwdriver",
    message: "Finally. Gosh this thing looks ancient",
  },
  "2-11": {
    title: "Opened Boxes",
    message: "What's in here? A screwdriver set?",
  },
  "2-12": { title: "Broken Shelf", message: "Agh! It wasn't stable enough" },
  "2-13": {
    title: "",
    message:
      "A screwdriver set, but its so rusty that I can't get it open with my bare hands. If only I had some tool...",
  },
  "2-14": {
    title: "Vent Cover",
    message:
      "A potential exit? It's sealed shut by screws though, and how would I even reach up there?",
  },
  "2-15": {
    title: "Cleaning Logs",
    message:
      "This place used to be cleaned every week...it hasn't been cleaned in over 4 months...",
  },
  "2-16": {
    title: "Oddly Specific Key",
    message: "A key...I haven't seen any keyholes around here",
  },
  "2-17": {
    title: "Bent Mop",
    message: "What the heck happened to this mop? Is that a hint of blood?",
  },
  "2-18": {
    title: "A Way Up",
    message: "Let's see where this takes me... \n\n(Unlock Level 3)",
    soundName: "VentCrawl",
  },
  "2-6,2-11": {
    title: "Adding Mulch to Boxes",
    message: "This looks sturdy enough to stand on... \n\n(Get 2-5)",
  },
  "2-3,2-14": {
    title: "Breaking the shelf",
    message:
      "Hopefully they won't mind the broken shelf... \n\n(Get 2-12, 2-2, 2-6, 2-7, 2-8, 2-9)",
  },
  "2-3,2-17": {
    title: "Forcing the screwdriver set open",
    message: "I finally got this open... \n\n(Get 2-10)",
  },
  "2-10,2-14": {
    title: "Opening the vent cover",
    message: "Now it's open... \n\n(Get 2-18)",
  },
  "2-8,2-17": {
    title: "Whacking the tool box open",
    message: "There's a key inside, but there's no locks...\n\n(Get 2-16)",
  },
  level3: {
    title: "The apartment room after the vent",
    message:
      "This doesn't look like my apartment. I think. Luckily it doesn't sound like anyone's home.\n\n(Get 3-21, 3-18)",
  },
  "3-1": {
    title: "Office Door",
    message: "Hmm, it's locked",
  },
  "3-2": {
    title: "Handwritten Note",
    message:
      "It says: \n“Hey Mitch, we left your payment on the kitchen counter next to the sink, thanks again for dog sitting on such short notice. ChuChu’s bowls are on the balcony, make sure she gets fed 1 cup of food at night and 1 cup of food in the evening. The door gets jammed pretty frequently, just pry it open with something if it does.",
  },
  "3-3": {
    title: "Open Window",
    message: "If I reach I think I can climb through that window\n\n(Get 3-8)",
  },
  "3-4": {
    title: "Disheveled Desk",
    message:
      "I can’t decipher this chicken scratch at all. Whatever they were doing, it looks like they were really dedicated to it",
  },
  //3-5
  "3-11,3-19": {
    title: "Balcony",
    message: "Ugh, I hate heights. Makes my stomach turn\n\n(Get 3-3, 3-7)",
  },
  //3-6
  "3-7,3-10": {
    title: "Means of Egress (sheets over railing)",
    message: "God, am I really doing this?\n\n(Unlock Level 4)",
  },
  "3-7": {
    title: "Railing",
    message:
      "URGH, why would I look down, it's so high up.\nThere's another balcony below, but the drop from here is a bit high. I wonder how I could get down there.",
  },
  "3-8": {
    title: "Bedroom",
    message:
      "This bedroom is so neat it feels untouched. Like no one has lived here in years.\n\n(Get 3-12, 3-17)",
  },
  "3-9": {
    title: "Bedroom Door",
    message: "It's locked...",
  },
  //3-10
  "3.12,3.16,3.20": {
    title: "Blanket Ladder",
    message: "I think that should hold.",
  },
  "3-11": {
    title: "Butter Knife",
    message: "Standard-issue butter knife, it would seem",
  },
  "3-12": {
    title: "Sheet",
    message:
      "Usually, I'd hate to ruin such a neatly-made bed. I'm sure whoever lives here will understand.",
  },
  //3-13
  "3-1,3-15": {
    title: "Office",
    message: "Wow, it's a mess in here\n\n(Get 3-13, 3-16)",
  },
  "3-14": {
    title: "Fridge",
    message: "Ah, there's a note here\n\n(Get 3-2)",
  },
  "3-15": {
    title: "Key",
    message: "This should come in handy",
  },
  "3-16": {
    title: "Pillow and Blanket",
    message: "I guess that explains why the bedroom is so neat.",
  },
  "3-17": {
    title: "Dresser",
    message: "Aha, there's a key here\n\n(Get 3-15)",
  },
  "3-18": {
    title: "Kitchenette",
    message:
      "It's appointed well enough. Wonder if there's anything around here to help me get out.\n\n(Get 3-11, 3-14)",
  },
  "3-19": {
    title: "Sliding Glass Door",
    message: "It's jammed.",
  },
  "3-20": {
    title: "Throw Blanket",
    message: "This blanket is surpisingly sturdy.",
  },
  "3-21": {
    title: "Living Room",
    message:
      "Much tidier than my apartment, certainly. And the view is much better.\n\n(Get 3-1, 3-9, 3-19, 3-20)",
  },
};

export { resources };
