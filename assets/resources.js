// item combinations should be split by a comma e.g. "1-1, 1-2"

// TODO: label numbers to be consistent with order of getting items
// TODO: Relabel number to remove the "-" for easier input
let resources = {
  default: {
    message: "",
    title: "",
  },
  level1: {
    title: "Level 1: The Rooftop",
    message:
      "Why am I on top of the roof... my head hurts... \n\n(Get 11, 12, 13, 14)",
  },
  11: {
    title: "Lock",
    message: "The door is locked shut...if only I knew the combination",
    interaction: "code",
    code: "3617",
    successMessage:
      "To the next floor... (Unlock Level 2)\n\n(Type 'Level 2' in the first text box)",
  },
  12: {
    title: "Poster",
    message: "A poster to some arts event...interesting",
  },
  13: {
    title: "Over the Roof (Left)",
    message:
      "The building seems about 5 stories tall...I wonder why there's so many police down there",
  },
  14: {
    title: "Over the Roof (Right)",
    message:
      "This art event seems similar to the poster I saw earlier... I wonder if they're related",
  },
  level2: {
    title: "Level 2: From the roof to the janitor closet",
    message: "After the roof is the janitor's closet... \n\n(Get 21, 2A)",
  },
  24: {
    title: "Boxes",
    message:
      "A bunch of cardboard boxes...I wonder if there's anything in them\n\n(Get 213, 214)",
  },
  29: {
    title: "Empty Pots",
    message:
      "Empty pots...it seems like it's been a while since they were last cared for",
  },
  22: {
    title: "Shelf",
    message:
      "There appears to be a number of items on this shelf...\n\n(Get 27, 28, 29, 210, 211, 2B)",
  },
  21: {
    title: "Janitor Closet",
    message:
      "A...janitor's closet? The only exit from the roof led me to a dead end? \n\n(Get 22, 23, 24, 25, 26)",
  },
  216: {
    title: "Reinforced Boxes",
    message: "Now these boxes aren't so flimsy anymore",
  },
  27: {
    title: "large Mulch Bags",
    message: "Mulch bags, but they're too malleable to stand on",
  },
  211: {
    title: "Messed Up Rag",
    message: "Agh, is that blood? What happened here...",
  },
  210: {
    title: "Tool Box",
    message:
      "An old tool box...there's a lock on it, but the drop seems to have messed it up. I wonder if I can't force it open with something...",
  },
  28: {
    title: "Potted Plants",
    message: "The plants seem to have been dead for quite some time now...",
  },
  215: {
    title: "Screwdriver",
    message: "Finally. Gosh this thing looks ancient",
  },
  213: {
    title: "Opened Boxes",
    message: "What's in here? A screwdriver set?",
  },
  217: { title: "Broken Shelf", message: "Agh! It wasn't stable enough" },
  214: {
    title: "Sealed Screwdriver Set",
    message:
      "A screwdriver set, but its so rusty that I can't get it open with my bare hands. If only I had some tool...",
  },
  23: {
    title: "Vent Cover",
    message:
      "A potential exit? It's sealed shut by screws though, and how would I even reach up there?",
  },
  25: {
    title: "Cleaning Logs",
    message:
      "This place used to be cleaned every week...it hasn't been cleaned in over 4 months...",
  },
  212: {
    title: "Oddly Specific Key",
    message: "A key...I haven't seen any keyholes around here",
  },
  26: {
    title: "Bent Mop",
    message: "What the heck happened to this mop? Is that a hint of blood?",
  },
  218: {
    title: "A Way Up",
    message: "Let's see where this takes me... \n\n(Unlock Level 3)",
    soundName: "VentCrawl",
  },
  "24,27": {
    title: "Adding Mulch to Boxes",
    message: "This looks sturdy enough to stand on... \n\n(Get 216)",
  },
  "22,23": {
    title: "Breaking the shelf",
    message:
      "Hopefully they won't mind the broken shelf... \n\n(Get 27, 28, 29, 210, 211)",
  },
  "212,214": {
    title: "Forcing the screwdriver set open",
    message: "I finally got this open... \n\n(Get 215)",
  },
  "22,210": {
    title: "Whacking the tool box open",
    message: "There's a key inside, but there's no locks...\n\n(Get 212)",
  },
  "212,214": {
    title: "Prying the screwcase open",
    message: "Didn't think I'd use a key like this...\n\n(Get 215)",
  },
  "23,215,216": {
    title: "Getting the Vent Cover open",
    message: "Good, now I can get out of here... \n\n(Get 218)",
  },
  level3: {
    title: "Level 3: No one is home",
    message:
      'This doesn\'t look like my apartment. I think. "Is anyone home?".\n\n(Get 31, 3A)',
  },
  32: {
    title: "Office Door",
    message: "Hmm, it's locked",
  },
  39: {
    title: "Handwritten Note",
    message:
      "It says: \n“Hey Mitch, we left your payment on the kitchen counter next to the sink, thanks again for dog sitting on such short notice. ChuChu’s bowls are on the balcony, make sure she gets fed 1 cup of food at night and 1 cup of food in the evening. The door gets jammed pretty frequently, just pry it open with something if it does.",
  },
  311: {
    title: "Open Window",
    message: "If I reach I think I can climb through that window\n\n(Get 313)",
  },
  318: {
    title: "Disheveled Desk",
    message:
      "I can’t decipher this chicken scratch at all. Whatever they were doing, it looks like they were really dedicated to it",
  },
  310: {
    title: "Balcony",
    message: "Ugh, I hate heights. Makes my stomach turn\n\n(Get 311, 312, 3C)",
  },
  "36,38": {
    title: "Prying the door open",
    message: "Just like the note said...\n\n(Get 310)",
  },
  321: {
    title: "Means of Egress (sheets over railing)",
    message: "God, am I really doing this?\n\n(Unlock Level 4)",
  },
  "312,320": {
    title: "Typing the sheets the railing",
    message: "I hope this is tight enough...\n\n(Get 321)",
  },
  312: {
    title: "Railing",
    message:
      "URGH, why would I look down, it's so high up.\nThere's another balcony below, but the drop from here is a bit high. I wonder how I could get down there.",
  },
  313: {
    title: "Bedroom",
    message:
      "This bedroom is so neat it feels untouched. Like no one has lived here in years.\n\n(Get 313, 314, 3D)",
  },
  33: {
    title: "Bedroom Door",
    message: "It's locked...",
  },
  320: {
    title: "Blanket Ladder",
    message: "I think that should hold.",
  },
  "34,315,319": {
    title: "Tying 3 Sheets together",
    message: "This should be long enough...\n\n(Get 320)",
  },
  38: {
    title: "Butter Knife",
    message: "Standard-issue butter knife, it would seem",
  },
  315: {
    title: "Sheet",
    message:
      "I'm sure whoever lives here will understand if I borrow this. Without returning it.",
  },
  317: {
    title: "Office",
    message: "Wow, it's a mess in here\n\n(Get 318, 319, 3E)",
  },
  "32,316": {
    title: "Unlocking the Office Door",
    message: "Let's see what's inside\n\n(Get 317)",
  },
  37: {
    title: "Fridge",
    message: "Ah, there's a note here\n\n(Get 39)",
  },
  316: {
    title: "Key",
    message: "This should come in handy",
  },
  319: {
    title: "Pillow and Blanket",
    message: "I guess that explains why the bedroom is so neat.",
  },
  314: {
    title: "Dresser",
    message: "Aha, there's a key here\n\n(Get 316)",
  },
  35: {
    title: "Kitchenette",
    message:
      "It's appointed well enough. Wonder if there's anything around here to help me get out.\n\n(Get 37, 38)",
  },
  36: {
    title: "Sliding Glass Door",
    message: "It's jammed.",
  },
  34: {
    title: "Throw Blanket",
    message: "This blanket is surpisingly sturdy.",
  },
  31: {
    title: "Living Room",
    message:
      "Much tidier than my apartment, certainly. And the view is much better.\n\n(Get 32, 33, 34, 35, 36, 3B)",
  },
  level4: {
    title: "Level 4 & 5 Under Development",
    message: "Thanks for playing",
  },
};

export { resources };
