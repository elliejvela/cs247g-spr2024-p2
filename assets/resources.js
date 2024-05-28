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
  21: {
    title: "Janitor Closet",
    message:
      "A...janitor's closet? The only exit from the roof led me to a dead end? \n\n(Get 22, 23, 24, 25, 26)",
  },
  22: {
    title: "Shelf",
    message:
      "There appears to be a number of items on this shelf...\n\n(Get 27, 28, 29, 210, 211, 2B)",
  },
  23: {
    title: "Vent Cover",
    message:
      "A potential exit? It's sealed shut by screws though, and how would I even reach up there?",
  },
  24: {
    title: "Boxes",
    message:
      "A bunch of cardboard boxes...I wonder if there's anything in them\n\n(Get 213, 214)",
  },
  25: {
    title: "Cleaning Logs",
    message:
      "This place used to be cleaned every week...it hasn't been cleaned in over 4 months...",
  },
  26: {
    title: "Bent Mop",
    message: "What the heck happened to this mop? Is that a hint of blood?",
  },
  27: {
    title: "Large Mulch Bags",
    message:
      "Mulch bags, but they're too malleable to stand on. I wonder if I can fill anything with this...",
  },
  28: {
    title: "Potted Plants",
    message: "The plants seem to have been dead for quite some time now...",
  },
  29: {
    title: "Empty Pots",
    message:
      "Empty pots...it seems like it's been a while since they were last cared for",
  },
  210: {
    title: "Tool Box",
    message:
      "An old tool box...there's a lock on it, but the drop seems to have messed it up. I wonder if I can't force it open with something...",
  },
  211: {
    title: "Messed Up Rag",
    message: "Agh, is that blood? What happened here...",
  },
  212: {
    title: "Oddly Specific Key",
    message: "A key...I haven't seen any keyholes around here",
  },
  213: {
    title: "Opened Boxes",
    message:
      "This seems to be enough to reach the vent cover, but I can't stand on them...",
  },
  214: {
    title: "Sealed Screwdriver Set",
    message:
      "A screwdriver set, but its so rusty that I can't get it open with my bare hands. If only I had some tool...",
  },
  215: {
    title: "Screwdriver",
    message: "Finally. Gosh this thing looks ancient",
  },
  216: {
    title: "Reinforced Boxes",
    message: "Now these boxes aren't so flimsy anymore",
  },
  217: { title: "Broken Shelf", message: "Agh! It wasn't stable enough" },
  218: {
    title: "A Way Up",
    message: "Let's see where this takes me... \n\n(Unlock Level 3)",
    soundName: "VentCrawl",
  },
  "22,23": {
    title: "Breaking the shelf",
    message:
      "Hopefully they won't mind the broken shelf... \n\n(Get 27, 28, 29, 210, 211)",
  },
  "24,27": {
    title: "Adding Mulch to Boxes",
    message: "This looks sturdy enough to stand on... \n\n(Get 216)",
  },
  "26,210": {
    title: "Whacking the tool box open",
    message: "There's a key inside, but there's no locks...\n\n(Get 212)",
  },
  "27,28": {
    title: "Adding Mulch to the pot",
    message:
      "There's still a lot of mulch, is there anything else I can add this to?",
  },
  "27,29": {
    title: "Adding Mulch to the pot",
    message:
      "There's still a lot of mulch, is there anything else I can add this to?",
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
  31: {
    title: "Living Room",
    message:
      "Much tidier than my apartment, certainly. And the view is much better.\n\n(Get 32, 33, 34, 35, 36, 3B)",
  },
  32: {
    title: "Office Door",
    message: "Hmm, it's locked",
  },
  33: {
    title: "Bedroom Door",
    message: "It's locked...",
  },
  34: {
    title: "Throw Blanket",
    message: "This blanket is surpisingly sturdy.",
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
  37: {
    title: "Fridge",
    message: "Ah, there's a note here\n\n(Get 39)",
  },
  38: {
    title: "Butter Knife",
    message: "Standard-issue butter knife, it would seem",
  },
  39: {
    title: "Handwritten Note",
    message:
      "It says: \n“Hey Mitch, we left your payment on the kitchen counter next to the sink, thanks again for dog sitting on such short notice. ChuChu’s bowls are on the balcony, make sure she gets fed 1 cup of food at night and 1 cup of food in the evening. The door gets jammed pretty frequently, just pry it open with something if it does.",
  },
  310: {
    title: "Balcony",
    message: "Ugh, I hate heights. Makes my stomach turn\n\n(Get 311, 312, 3C)",
  },
  311: {
    title: "Open Window",
    message: "If I reach I think I can climb through that window\n\n(Get 313)",
  },
  312: {
    title: "Railing",
    message:
      "URGH, why would I look down, it's so high up.\nThere's another balcony below, but the drop from here is a bit high. I wonder how I could get down there.",
  },
  313: {
    title: "Bedroom",
    message:
      "This bedroom is so neat it feels untouched. Like no one has lived here in years.\n\n(Get 313, 314, 315, 3D)",
  },
  314: {
    title: "Dresser",
    message: "Aha, there's a key here\n\n(Get 316)",
  },
  315: {
    title: "Sheet",
    message:
      "I'm sure whoever lives here will understand if I borrow this. Without returning it.",
  },
  316: {
    title: "Key",
    message: "This should come in handy",
  },
  317: {
    title: "Office",
    message: "Wow, it's a mess in here\n\n(Get 318, 319, 3E)",
  },
  318: {
    title: "Disheveled Desk",
    message:
      "I can’t decipher this chicken scratch at all. Whatever they were doing, it looks like they were really dedicated to it",
  },
  319: {
    title: "Pillow and Blanket",
    message: "I guess that explains why the bedroom is so neat.",
  },
  320: {
    title: "Blanket Ladder",
    message: "I think that should hold.",
  },
  321: {
    title: "Means of Egress (sheets over railing)",
    message: "God, am I really doing this?\n\n(Unlock Level 4)",
  },
  "32,316": {
    title: "Unlocking the Office Door",
    message: "Let's see what's inside\n\n(Get 317)",
  },
  "34,312": {
    title: "A way down?",
    message: "This doesn't go far enough down, it's still too dangerous.",
  },
  "312,315": {
    title: "A way down?",
    message: "This doesn't go far enough down, it's still too dangerous.",
  },
  "312,314": {
    title: "A way down?",
    message: "This doesn't go far enough down, it's still too dangerous.",
  },
  "34,312,315": {
    title: "A way down?",
    message: "Almost there, I think adding 1 more might be enough...",
  },
  "34,312,319": {
    title: "A way down?",
    message: "Almost there, I think adding 1 more might be enough...",
  },
  "315,319,312": {
    title: "A way down?",
    message: "Almost there, I think adding 1 more might be enough...",
  },
  "34,312,315,319": {
    title: "A little much",
    message: "It's long enough, but I better tie the sheets together first...",
  },
  "36,38": {
    title: "Prying the door open",
    message: "Just like the note said...\n\n(Get 310)",
  },
  "312,320": {
    title: "Typing the sheets the railing",
    message: "I hope this is tight enough...\n\n(Get 321)",
  },
  "34,315,319": {
    title: "Tying 3 Sheets together",
    message: "This should be long enough...\n\n(Get 320)",
  },
  level4: {
    title: "Level 4: The Pool",
    message: "Get 41, 42, 43, 44, 48",
  },
  41: {
    title: "Barricaded exit door",
    message:
      "This door is barricaded...and locked from the outside? Better look elsewhere",
  },
  42: {
    title: "Pool",
    message:
      "What's that at the bottom of the pool? It's a different color than the rest of the tiles, and also bigger. If only I could empty this pool and find out what's under there...",
  },
  43: {
    title: "Controller Room",
    message:
      "Perhaps this room can help me empty the pool...but I need a key to unlock it",
  },
  44: {
    title: "Maintenance closet",
    message:
      "Woah they really made this door maximum security. Thick heavy metal and only accessible via key card access...\n\n(Get 45)",
  },
  45: {
    title: "Crack in maintenance closet",
    message:
      "Is that...janitor pants with blood stains? The set of keys hanging on it might be useful. Same with that wrench on the shelf. It's just too far for me to reach with my hands. Wait, and what's that on the right? It looks like...some sort of secret trapdoor connecting to another room...",
  },
  46: {
    title: "Towel racks",
    message:
      "Some of these towels are still a bit damp...someone must've been here not too long ago...",
  },
  47: {
    title: "Metal grate on wall",
    message:
      "According to the trapdoor I saw in the janitor's closet, there should be something behind this grate, I just need some tool to help me unscrew these bolts...",
  },
  48: {
    title: "Locker Room",
    message: "I really hope there's no one here...\n\n (Get 49, 412)",
  },
  49: {
    title: "Open locker",
    message:
      "Looks like someone forgot to lock their valuables...\n\n (Get 410, 411)",
  },
  410: {
    title: "Gym Gloves",
    message: "These smell gross",
  },
  411: {
    title: "Headlight",
    message: "Interesting...I guess this could perhaps be useful later on",
  },
  412: {
    title: "Pool Skimmer Net",
    message: "Hmm this could be useful for reaching things",
  },
  413: {
    title: "Wrench",
    message: "Yes! The pool skimmer was just long enough",
  },
  414: {
    title: "Sauna",
    message:
      "This sauna is so...old and out-of-order. No wonder they hid this from the public.\n\n(Get 415, 416)",
  },
  415: {
    title: "Loose plank",
    message:
      "A semi-loose plank...agh! It's giving me splinters. I need a safer way to remove this",
  },
  416: {
    title: "Blood-stained towel",
    message: "What's with all the blood everywhere I go...",
  },
  417: {
    title: "Inside maintenance closet",
    message: "Finally \n\n (Get 418, 421)",
  },
  418: {
    title: "Janitor pants",
    message:
      "Get me away from these blood stains...let me just take the keys \n\n (Get 419, 420)",
  },
  419: {
    title: "Rectangular Key",
    message: "A rectangular shaped key",
  },
  420: {
    title: "Round Key",
    message: "A round shaped key",
  },
  421: {
    title: "Toilet Plunger",
    message:
      "This provides me nothing...I guess it's a good suctioning tool though",
  },
  422: {
    title: "Inside controller room",
    message:
      "Finally...hopefully there's something here that can help me empty the pool\n\n(Get 423)",
  },
  423: {
    title: "Locked Cupboard",
    message: "It's locked, interesting key shape though...",
  },
  424: {
    title: "Open Cupboard",
    message: "So that's what the other key was for... \n\n(Get 425)",
  },
  425: {
    title: "Pool pump",
    message:
      "Finally...let's take a closer look at that thing at the bottom\n\n(Get 427)",
  },
  426: {
    title: "Empty Pool",
    message: "I really hope there's no one here...\n\n (Get 49, 412)",
  },
  427: {
    title: "Odd-Looking Pool Tile",
    message:
      "It seems removable, but it's too difficult to remove with my fingers...I need something that will pull this tile off ",
  },
  428: {
    title: "Tunnel leading downwards",
    message:
      "Well that's one way to use a toilet plunger. Gosh that's pitch black...I'm not trying to fall to my death today",
  },
  429: {
    title: "Onto the next level",
    message: "Let's climb down this ladder and see what's next",
  },
  "45,412": {
    title: "Reaching into the maintenance closet...",
    message: "Yes! The pool skimmer was just long enough\n\n (Get 413)",
  },
  "47,413": {
    title: "Breaking the metal grate...",
    message:
      "This sauna is so...old and out-of-order. No wonder they hid this from the public.This sauna is so...old and out-of-order. No wonder they hid this from the public.\n\n(Get 414)",
  },
  "410,415": {
    title: "Remoing the loose plank...",
    message: "Finally... \n\n(Get 417)",
  },
  "43,49": {
    title: "Unlocking the controller room...",
    message:
      "Finally...hopefully there's something here that can help me empty the pool\n\n(Get 422)",
  },
  "44,420": {
    title: "Unlocking locked cupboard...",
    message: "So that's what the other key was for...\n\n(Get 424)",
  },
  "42,425": {
    title: "Emptying the pool...",
    message:
      "Finally...let's take a closer look at that thing at the bottom\n\n(Get 426)",
  },
  "421,427": {
    title: "Removing the tile...",
    message:
      "Well that's one way to use a toilet plunger. Gosh that's pitch black...I'm not trying to fall to my death today\n\n(Get 428)",
  },
  "411,428": {
    title: "Climbing down the tunnel...",
    message: "Let's climb down this ladder and see what's next \n\n(Get 429)",
  },
};

export { resources };
