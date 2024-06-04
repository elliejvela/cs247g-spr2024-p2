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
      "Why am I on top of the roof... my head hurts... There's a door over there, let's take a look...\n\n(Get 1A, 11, 12, 13, 14)",
    bgMusic: "level-1-background",
    sound: "None",
  },
  11: {
    title: "Lock",
    message: "The door is locked shut...if only I knew the combination",
    interaction: "Combo Lock",
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
      "This place used to be cleaned every week...Looks like one room hasn't been cleaned since 2012...",
  },
  26: {
    title: "Bent Mop",
    message: "This feel really good in my hand. Even though it's bent, I'm sure I can still use it to whack stuff.",
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
      "Empty pots...it seems like it's been a while since they were last cared for. Maybe I should.",
  },
  210: {
    title: "Tool Box",
    message:
      "An old tool box...there's a lock on it, but the drop seems to have messed it up. I should be able to smash that lock with something...",
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
    sound: "VentCrawl",
  },
  "22,23": {
    title: "Breaking the shelf",
    message:
      "Hopefully they won't mind the broken shelf... \n\n(Get 27, 28, 29, 210, 211)",
  },
  "23,216": {
    title: "The Vent Cover is Locked!",
    message: "I can reach the cover, but it's still locked shut",
  },
  "24,27": {
    title: "Adding Mulch to Boxes",
    message: "This looks sturdy enough to stand on... \n\n(Get 216)",
  },
  "26,210": {
    title: "Whacking the tool box open",
    message: "There's a key inside, but there's no locks...\n\n(Get 212)",
  },
  "27,213": {
    title: "Adding Mulch to the opened boxes",
    message: "This seems sturdy enough to stand on now\n\n(Get 216)",
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
    message:
      "If I reach I think I can climb through that window. Looks like it goes to the bedroom.\n\n(Get 313)",
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
  "312,315,319": {
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
    message: "Get 41, 42, 43, 44, 47, 48",
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
    message: "This could be useful. Where did I see screws earlier?",
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
    message: "What could be useful here... \n\n (Get 418, 421)",
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
      "Hopefully there's something here that can help me empty the pool...\n\n(Get 423)",
  },
  423: {
    title: "Locked Cupboard",
    message: "It's locked, interesting key shape though...",
  },
  424: {
    title: "Open Cupboard",
    message: "A bunch of junk...wait what's that?\n\n(Get 425)",
  },
  425: {
    title: "Pool pump",
    message:
      "Finally...let's take a closer look at that thing at the bottom\n\n(Get 427)",
  },
  426: {
    title: "Empty Pool",
    message:
      "Let's take a closer look at that thing at the bottom\n\n (Get 49, 412)",
  },
  427: {
    title: "Odd-Looking Pool Tile",
    message:
      "It seems removable, but it's too difficult to remove with my fingers...I need something that will pull this tile off ",
  },
  428: {
    title: "Tunnel leading downwards",
    message:
      "Gosh that's pitch black...I'm not trying to fall to my death today",
  },
  429: {
    title: "Onto the next level",
    message:
      "Let's climb down this ladder and see what's next (Unlock Level 5)",
  },
  "45,412": {
    title: "Reaching into the maintenance closet...",
    message: "Yes! The pool skimmer was just long enough\n\n(Get 413)",
  },
  "47,413": {
    title: "Breaking the metal grate...",
    message: "Woah, a secret room...\n\n(Get 414)",
  },
  "410,415": {
    title: "Removing the loose plank...",
    message: "Finally... \n\n(Get 417)",
  },
  "43,419": {
    title: "Unlocking the controller room...",
    message:
      "Finally...hopefully there's something here that can help me empty the pool\n\n(Get 422)",
  },
  "420,423": {
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
    message: "Well that's one way to use a toilet plunger.(Get 428)",
  },
  "411,428": {
    title: "Climbing down the tunnel...",
    message: "Let's climb down this ladder and see what's next \n\n(Get 429)",
  },
  level5: {
    title: "Level 5: Ground Floor",
    message:
      "I made it to the ground floor, almost out...\n\n(Get 51, 52, 53, 54, 55, 56, 57, 58, 59, 510)",
  },
  51: {
    title: "Elevator",
    message: "It's out of service...",
  },
  52: {
    title: "Front Door",
    message:
      "It's boarded shut... not amount of force will open it from this side",
  },
  53: {
    title: "Front Desk",
    message:
      "It's the front desk, why's there no one here...\n\n(Get 511, 512, 513, 517)",
  },
  54: {
    title: "Filing Cabinets",
    message:
      "That's a lot of cabinets, is it okay for me to look through these?\n\n(Get 527)",
  },
  55: {
    title: "Vending Machine",
    message:
      "There's not a lot of drinks left... but I also don't really have any money",
  },
  56: {
    title: "Big Potted Plants",
    message:
      "Don't tell me that the plants are producing this rancid smell\n\n(Get 523)",
  },
  57: {
    title: "Right Door 1 (Locked)",
    message: "It's a locked door. I don't think I can break it open.",
  },
  58: {
    title: "Left Door 2 (Locked)",
    message: "It's a locked door. I don't think I can open it.",
  },
  59: {
    title: "Restroom door",
    message: "The restroom, maybe I should use it...\n\n(Get 525, 526)",
  },
  510: {
    title: "Lounge area",
    message:
      "Looks like there still a few things left here...\n\n(Get 531, 532, 533)",
  },
  511: {
    title: "Left drawer (Drawer 1)",
    message: "It's the left drawer of the front desk\n\n(Get 518, 519, 520)",
  },
  512: {
    title: "Post - it note on front desk",
    message:
      'It looks like a reminder...\n\n"Note: Remember to get ready for the festival. Decorations are in storage. The temporary code for the safe in storage is the date of the end of the year art festival\n"',
  },
  513: {
    title: "Safe",
    message: "A locked safe, looks like I'll need a 4 digit code\n\n(Get 515)",
    interaction: "4-Digit Lock Code",
    code: "2012",
    successMessage: "Got the safe open!\n\n(Get 514)",
  },
  514: {
    title: "Opened safe",
    message:
      "Ok, now the safe is open. Let's take a look at what's inside\n\n(Get 521, 529, 230)",
  },
  515: {
    title: "Note on Safe",
    message:
      "It's a note on the safe... \n\n\"Note: For new employees, the code is the year where there was that big scandal. Boss want to make sure we always remember to avoid that again. Surprised they're doing the art festival after what happened that day...\"",
  },
  516: {
    title: "Ballpoint Pen",
    message: "It's a ballpoint pen for everyone to use",
  },
  517: {
    title: "Right drawer (Drawer 2)",
    message: "It's the right drawer of the front desk\n\nGet(522)",
  },
  518: {
    title: "Stack of Business cards",
    message: `It's a stack of business cards. it looks like it's for a place called "Fern Apartments"`,
  },
  519: {
    title: "Pair of pens",
    message:
      "A pair of pens, they're different from the ball point pens though",
  },
  520: {
    title: "Flashlight",
    message:
      "It's a flashlight, but it won't turn on. Is the battery dead?\n\n(Get 524)",
  },
  521: {
    title: "Spare change",
    message:
      "There's some spare change, wonder if it's enough to get a drink from the vending machine",
  },
  522: {
    title: "Recent Newspaper Heading",
    message:
      'The headline is: [...ber 5th] After healing from that unsolved death at "Fern Apartments" 5 years ago, the Art Festival is coming in 2 days! \n\n The date is too smudged to make out the month.',
  },
  523: {
    title: "Old Janitor shirt",
    message: "An old janitor shirt, I'd wear it if it wasn't so stinky.",
  },
  524: {
    title: "Dead Battery",
    message: "Looks like I managed to get the battery out of the flashlight. Even if it doesn't work on the flashlight, it might still have charge?",
  },
  525: {
    title: "Restroom Wall",
    message:
      "Looks like there was a fight here...No wonder there's a cleaning cart here as well...",
  },
  526: {
    title: "Cleaning Cart",
    message: "The cleaning cart... if this is here, then where's the janitor?",
  },
  527: {
    title: "Anniversary Book",
    message: "A staff anniversary book for Fern Apartments\n\n(Get 528)",
  },
  528: {
    title: "Bookmarked Page",
    message: "Why does the year skip from 2011 to 2013?",
  },
  529: {
    title: "Door 1 Key",
    message: "This seems to be the key for the door on the left",
  },
  530: {
    title: "Door 2 Key",
    message: "This seems to be the key for the door on the right",
  },
  531: {
    title: "Forgotten Toy",
    message: "A teddy bear, why would a kid leave behind their toy?",
  },
  532: {
    title: "Dead laptop",
    message:
      "Would people leave their laptop open if there wasn't an emergency...?",
  },
  533: {
    title: "Unfinished Homework",
    message:
      "It's some homework, I think I can solve these problems if I try hard enough...",
  },
  534: {
    title: "Side Storage Room",
    message:
      "This feels familiar, like I've been here before...\n\n(Get 535, 538, 539, 540, 541, 542, 543, 544)",
  },
  535: {
    title: "Something High on Top?",
    message: "I think there's something sparkly there, but I can't reach it...",
  },
  536: {
    title: "Sparkler Set",
    message:
      "A sparkler set...? It's only enough for some lights, not really useful...",
  },
  537: { title: "Key", message: "A Key, this is probably the spare..." },
  538: { title: "Tool Kit", message: "It's a tool kit\n\n(Get 546)" },
  539: {
    title: "Steel Wool",
    message:
      "Some steel wool. There's a note warning that it'll ignite next to electricity",
  },
  540: { title: "Ladder", message: "Now I can reach the top shelf" },
  541: {
    title: "Art supplies",
    message: "Looks like stuff for the art festival...",
  },
  542: {
    title: "Locked safe in Storage",
    message: "it's the second locked safe, time to find a second code",
    interaction: "4-digit Code",
    code: "1207",
    successMessage: "It's unlocked!\n\n(Get 545, 547)",
  },
  543: {
    title: "Rubbing alcohol",
    message: "A bottle of rubbing alcohol, it's extremely flammable. ",
  },
  544: { title: "Boxes", message: "Some empty boxes" },
  545: {
    title: "Tiny jar of gunpowder",
    message:
      "it's a tiny jar of gunpowder... it seems to be just enough to cause a small explosion. I'd better use this carefully...",
  },
  546: { title: "Hammer", message: "A hammer from the tool kit" },
  547: {
    title: "Single match stick",
    message:
      "There's no way to light this... If I want to start a fire, then I need to try another way without this match stick...",
  },
  548: {
    title: "Broken Vending machine",
    message: "Even without paying, I can get drinks",
  },
  549: {
    title: "Several drink cans",
    message: "It's not much, but there's are least a couple cans",
  },
  550: {
    title: "Door 2 with Destroyed Lock",
    message:
      "... and ignite with the charge from the battery... and the lock's busted. I can open the door now",
  },
  "55,521": {
    title: "Not enough money",
    message: "There wasn't enough change for even the cheapest drink...",
  },
  "55,546": {
    title: "Bashing the Vending Machine",
    message: "Now I have the cans, I can stack these!\n\n(Get 548, 549)",
  },
  "57,529": {
    title: "Unlocking the the first door",
    message: "Nice, that worked!\n\n(Get 534)",
  },
  "57,530": {
    title: "Trying Key 1 on Door 2",
    message: "The key doesn't fit...",
  },
  "58,529": {
    title: "The key doesn't match!",
    message: "This doesn't work...",
  },
  "58,530": {
    title: "An Unexpected Discovery!",
    message:
      "The key fits but it's jammed! I need to take a second look at this door...",
  },
  "58,524": {
    title: "Would a battery work?",
    message:
      "I don't really see how I'd use a battery by itself to bust the handle...",
  },
  "524,539": {
    title: "Fire Warning",
    message:
      "I think this will cause a fire, but I'd better not do that until I'm ready to blow the handle of the door off",
  },
  "58,524,539": {
    title: "Not the right position",
    message:
      "Lighting the door on fire seems like a good idea, but I'm too close...it'll be dangerous if I light a fire now",
  },
  "524,543": {
    title: "Battery and Alchohol",
    message:
      "This doesn't feel right, wasn't there a warning about electricity before...?",
  },
  "532,539": {
    title: "A dead battery doesn't work",
    message: "Doesn't look like a laptop will ignite the steel wool",
  },
  "58,543": {
    title: "A potential trail",
    message:
      "This should be enough to make a trail, but I should only use the alchohol when I'm ready to blow the handle of the door off.",
  },
  "58,545": {
    title: "It's not enough",
    message:
      "There's no way I'd be able to blow the whole door away with just this little gunpowder. I need to be more intentional about this...",
  },
  "58,549": {
    title: "Stacking cans",
    message:
      "It looks like it's just enough to reach the door handle. Let's make sure to include these when I'm ready to blow the handle of the door off.",
  },
  "58,524,539,543": {
    title: "A trail to the door",
    message:
      "This seems like the path is long enough, just need to find something to make the explosion...",
  },
  "58,524,539,543,545": {
    title: "Not high enough",
    message:
      "The handle is still a little high, is there anything I can use to build up to the handle?",
  },
  "58,524,539,543,545,549": {
    title: "Looking good",
    message:
      "I think this is everything, time to get out of here... (Input items combo to 58 code)",
  },
  "535,540": {
    title: "What's that sparkley thing up here?",
    message: "No wonder it caught my eye...\n\n(Get 536)",
  },
  ending: {
    title: "The Last Observation",
    message:
      `You see a crowd of police officers circled around something, but you don't know what. You walk up to them and ask, 'What's happening,' but none of them turn around. You ask again, this time shouting, but still no one turns. You eventually push through the crowd of officers and see a dead body.\n\nYou look closer, and the body looks strangely familiar...\n\nYou realize the body is on the floor looks familiar. It’s you. `,
  },
};

export { resources };
