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
        successMessage: "To the next floor... (Unlock Level 2)",
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
        message: "There appears to be a number of items on this shelf...",
    },
    "2-4": {
        title: "Janitor Closet",
        message:
            "A...janitor's closet? The only exit from the roof led me to a dead end?",
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
    },
    "2-6+2-11": {
        title: "Adding Mulch to Boxes",
        message: "This looks sturdy enough to stand on... \n\n(Get 2-5)",
    },
    "2-3+2-14": {
        title: "Breaking the shelf",
        message:
            "Hopefully they won't mind the broken shelf... \n\n(Get 2-12, 2-2, 2-6, 2-7, 2-8, 2-9)",
    },
    "2-3+2-17": {
        title: "Forcing the screwdriver set open",
        message: "I finally got this open... \n\n(Get 2-10)",
    },
    "2-10+2-14": {
        title: "Opening the vent cover",
        message: "Now it's open... \n\n(Get 2-18)",
    },
    "3-1": {
        title: "Office Door",
        message: "",
    },
    "3-2": {
        title: "Handwritten Note",
        message: "",
    },
    "3-3": {
        title: "Open Window",
        message: "",
    },
    "3-4": {
        title: "Disheveled Desk",
        message: "",
    },
    "3-5": {
        title: "Balcony",
        message: "",
    },
    "3-6": {
        title: "Means of Egress (sheets over railing)",
        message: "",
    },
    "3-7": {
        title: "Railing",
        message: "",
    },
    "3-8": {
        title: "Bedroom",
        message: "",
    },
    "3-9": {
        title: "Bedroom Door",
        message: "",
    },
    "3-10": {
        title: "Blanket Ladder",
        message: "",
    },
    "3-11": {
        title: "Butter Knife",
        message: "",
    },
    "3-12": {
        title: "Sheet",
        message: "",
    },
    "3-13": {
        title: "Office",
        message: "",
    },
    "3-14": {
        title: "Fridge",
        message: "",
    },
    "3-15": {
        title: "Key",
        message: "",
    },
    "3-16": {
        title: "Pillow + Blanket",
        message: "",
    },
    "3-17": {
        title: "Dresser",
        message: "",
    },
    "3-18": {
        title: "Kitchenette",
        message: "",
    },
    "3-19": {
        title: "Sliding Glass Door",
        message: "",
    },
    "3-20": {
        title: "Throw Blanket",
        message: "",
    },
    "3-21": {
        title: "Living Room",
        message: "",
    },
};

export { resources };
