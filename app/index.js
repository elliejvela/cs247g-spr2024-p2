import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Keyboard,
  FlatList,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { PaperProvider, List } from "react-native-paper";
import { Audio } from "expo-av";

import { resources } from "../assets/resources.js";
import ItemModal from "../components/Modal.js";

let backgroundImage = require("../assets/images/old_building.png"); // Source: https://i.pinimg.com/originals/f5/69/e2/f569e26c228d92f3c1f46e41fa04528f.jpg

export default function Index() {
  let [beginGame, setBeginGame] = useState(false);
  let [userInput, setUserInput] = useState("");
  let [message, setMessage] = useState("");
  let [cardTitle, setCardTitle] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [interactionType, setInteractionType] = useState("");
  let [requiredCode, setRequiredCode] = useState("");
  let [userCode, setUserCode] = useState("");
  let [showEnding, setShowEnding] = useState(false);
  let [endingIndex, setEndingIndex] = useState(0);

  let [userLvlProgress, setUserLvlProgress] = useState([]);
  let [userSelectedLvlButton, setUserSelectedLvlButton] = useState(0);

  let [foundItems, setFoundItems] = useState([[], [], [], [], []]);

  // audio player
  const [SfxPlayer, setSfxPlayer] = useState(undefined);
  const [bgMusicPlayer, setBgMusicPlayer] = useState(undefined);
  const BACKGROUND_MUSIC_VOLUME = 0.5;
  const SFX_VOLUME = 1.0;

  // Modal for prior observations
  const [modalVisible, setModalVisible] = useState(false);
  const [modalResource, setModalResource] = useState("");

  // play sound effects
  async function playSound(soundName) {
    const SfxPlayer = new Audio.Sound();
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: false,
      staysActiveInBackground: false,
    });

    level_1_sound_effects = {
      VentCrawl: require("../assets/sounds/VentCrawl.mp3"),
      InvalidCombo: require("../assets/sounds/InvalidCombo.mp3"),
      StartupSound: require("../assets/sounds/StartupSound.mp3"),
    };

    soundfile = level_1_sound_effects[soundName];
    if (soundName === undefined) {
      await SfxPlayer.loadAsync(require("../assets/sounds/CorrectCombo.mp3"), {
        volume: SFX_VOLUME,
      });
      console.log("Playing default interaction");
      setSfxPlayer(SfxPlayer);

      await SfxPlayer.playAsync();
    } else if (soundName.toLowerCase() === "none") {
      console.log("playing no sound");
      return;
    } else if (soundfile != undefined) {
      await SfxPlayer.loadAsync(soundfile, { volume: SFX_VOLUME });
      console.log("Playing Sound " + soundName);
      setSfxPlayer(SfxPlayer);

      await SfxPlayer.playAsync();
    } else {
      console.log("invalid soundname " + soundName);
    }
  }

  useEffect(() => {
    return SfxPlayer
      ? () => {
          SfxPlayer.unloadAsync();
          console.log("Unloading Sound");
        }
      : undefined;
  }, [SfxPlayer]);

  async function playBgMusic(bgMusicName) {
    const musicPlayer = new Audio.Sound();
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: false,
      staysActiveInBackground: false,
    });

    bgMusic = {
      "level-1-background": require("../assets/sounds/level-1-background.mp3"),
      "level-1-trimmed": require("../assets/sounds/level-1-trimmed.mov"),
    };

    soundfile = bgMusic[bgMusicName];
    if (bgMusicName === "") {
      return;
    } else if (soundfile != undefined) {
      await musicPlayer.loadAsync(soundfile, {
        volume: BACKGROUND_MUSIC_VOLUME,
      });
      console.log("Playing background music " + bgMusicName);
      setBgMusicPlayer(musicPlayer);

      await musicPlayer.setIsLoopingAsync(true);
      await musicPlayer.playAsync();
    } else {
      console.log("invalid bg music name");
    }
  }

  useEffect(() => {
    return bgMusicPlayer
      ? () => {
          bgMusicPlayer.unloadAsync();
          console.log("Unloading Bg Music");
        }
      : undefined;
  }, [bgMusicPlayer]);

  const handleSubmission = () => {
    //process user input for JSON lookup
    let input = userInput.toLowerCase().replaceAll(" ", "");
    input = input.split("+");
    // this sorts a string of numbers in numerical order rather than alphabetical order
    input.sort(function (a, b) {
      return a - b;
    });
    input = input.toString();

    if (resources[input] !== undefined && input !== "ending") {
      //process user input

      let lvlNum = input.charAt(0); // for observations, first char is always a number
      // If it's the next level, add next level to the progress bar
      if (input.includes("level")) {
        // the last character will always be a number
        lvlNum = input.charAt(input.length - 1);

        // Block skipping levels

        if (lvlNum > 1) {
          // Check if the required card is already used
          let validPassLevel = false;

          switch (lvlNum) {
            case "2":
              validPassLevel = true;
              break; // TODO: Get feedback from team if we want to add a card to Level 1 that is the success card check, Level 2/3/4 all have a success card
            case "3":
              validPassLevel =
                foundItems[1].find((ele) => ele.id === "218") !== undefined;
              break;
            case "4":
              validPassLevel =
                foundItems[2].find((ele) => ele.id === "321") !== undefined;
              break;
            case "5":
              validPassLevel =
                foundItems[3].find((ele) => ele.id === "429") !== undefined;
              break;
            default:
              console.log("default case");
          }

          if (!validPassLevel) {
            setCardTitle("The Job is Not Done...");
            setMessage("There are still things to do here...");
            return;
          }
        }

        if (
          userLvlProgress.find((ele) => ele === "Level " + lvlNum) === undefined
        ) {
          let tempList = [...userLvlProgress, `Level ${lvlNum}`];
          tempList.sort();
          setUserLvlProgress(tempList);
          setUserSelectedLvlButton(lvlNum - 1);
        }
      }

      playSound(resources[input].sound);
      playBgMusic(resources[input].bgMusic);
      setMessage(resources[input].message);
      setCardTitle(resources[input].title);

      // Check for interaction type
      if (resources[input].interaction) {
        let interactionType = resources[input].interaction;

        setInteractionType(interactionType);
        setRequiredCode(resources[input]["code"]);
      }

      // Special interaction for Level 5
      if (input === "58,530") {
        resources["58"]["message"] =
          "I can't force the door open, my only option is to blow the handle lock off...";
        resources["58"]["code"] = "524,539,543,545,549";
        resources["58"]["interaction"] = "5 - Item Combo";
        resources["58"]["successMessage"] =
          "The door opened... now to get out of here\n\n(Get Ending)";
      }

      if (
        foundItems[parseInt(lvlNum) - 1].find((ele) => ele.id === input) ===
        undefined
      ) {
        let tempList = foundItems;

        tempList[parseInt(lvlNum) - 1].push({
          id: input,
          title: resources[input].title,
        });

        setFoundItems(tempList);
      }
    } else if (userInput.toLowerCase() === "ending") {
      setShowEnding(true);
      setInteractionType(resources["ending"]["interaction"]);
    } else {
      playSound("InvalidCombo");
      setMessage("This combination doesn't seem to work...");
    }
    setSubmitted(!submitted);
  };

  const handleCodeSubmission = () => {
    // valid userInputs for code submission
    let validUserInputs = ["11", "513", "542", "58"];

    let code = userCode.toLowerCase().replaceAll(" ", "");
    code = code.split("+");
    // this sorts a string of numbers in numerical order rather than alphabetical order
    code.sort(function (a, b) {
      return a - b;
    });
    code = code.toString();

    if (
      validUserInputs.find((ele) => ele === userInput) !== undefined &&
      code === requiredCode
    ) {
      setMessage(resources[userInput].successMessage);
      setRequiredCode("");
      setInteractionType("");
      setUserCode("");
    } else {
      if (validUserInputs.find((ele) => ele === userInput) === undefined) {
        setMessage(
          "I really should be looking at the right thing before inputing the code..."
        );
      } else if (code !== requiredCode) {
        setMessage("This seems not correct...");
      } else {
        setMessage("This doesn't seem to work, I should try again...");
      }
    }
  };

  const renderFoundAsButton = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // For opening item info modal
          setModalResource(item.id);
          setModalVisible(true);
        }}
        style={styles.flatlistButton}
      >
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const handleReset = () => {
    setUserInput("");
    setMessage(resources["default"].message);
    setCardTitle(resources["default"].title);
  };

  if (!beginGame) {
    return (
      <View style={styles.contentView}>
        <Text style={styles.title}>Descent</Text>

        <Text>
          You will be inputing card numbers (11, 12), Level Numbers (Level 1),
          as well as combinations (11+12).
        </Text>
        <Text>
          Card Numbers (Observations) will give more information about the card
        </Text>
        <Text>Level Numbers will give information on the Level</Text>
        <Text>Combinations (Item Combos) may lead to new items</Text>

        <Text>
          Make sure to read carefully as some clues are hidden in text 😊
        </Text>

        <Text>To start, enter "Level 1" into the text box</Text>

        <View style={styles.textBoxButton}>
          <TextInput
            multiline
            style={styles.textBox}
            placeholder="Level 1"
            value={userInput}
            onChangeText={(text) => {
              setUserInput(text);
            }}
          />
          <TouchableOpacity
            onPress={() => {
              if (userInput.toLowerCase() == "level 1") {
                setBeginGame(true);
                handleSubmission();
                setUserLvlProgress(["Level 1"]);
              }
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (showEnding) {
    let endingMessages = [
      {
        message: `You see a crowd of police officers circled around something, but you don't know what. You walk up to them and ask, 'What's happening,' but none of them turn around. You ask again, this time shouting, but still no one turns. You eventually push through the crowd of officers and see a dead body.\n\nYou look closer, and the body looks strangely familiar...\n\nYou realize the body is on the floor looks familiar. It’s you. `,
        buttonText: `My Head Hurts...`
      },
      {
        message: `I have been dead this whole time.\n\nI navigated through the building as a ghost.`,
        buttonText: `My Head Hurts...`
      },
      {
        message: `I remember masked teenagers.\n\nThey were spraying graffiti on the roof.\n\nIt was dark.\n\nI had to stop them.\n\nI ran after them.\n\nI caught one.\n\nHe fell down.\n\nHe stopped moving.\n\nThere's blood.`, 
        buttonText: `But that can't be...`
      },
      {
        message: `I’m not a murderer.\n\nI have to save him.\n\nWhat do I have?\n\nI have my mop.\n\nI have my cleaning rag.\n\nLet me clean up the blood.`,
        buttonText: `This isn't me. This isn't me. This isn't me.`
      },
      {
        message: `It’s my son.\n\nIt’s Mitch.\n\nHe’s dead.\n\nWhat have I done.\n\nWithout Mitch, why should I even live.\n\nThe roof.\n\nIt’s pretty high up…\n\nIt’s late.\n\nThe elevator’s broken.\n\nLet’s take the short way down…`,
        buttonText: `This isn't happening. This isn't real. This is a dream.`
      },
      {
        message: ``,
        buttonText: `To Mitch,`
      },
      {
        message: ``,
        buttonText: `I know you'll never read this. But let dad write this.`
      },
      {
        message: ``,
        buttonText: `I did something I shouldn't have.`
      },
      {
        message: ``,
        buttonText: `Mitch...`,
      },
      {
        message: ``,
        buttonText: `Dad's sorry.`
      },
      {
        message: ``,
        buttonText: `Dad will meet you again. I will meet you again.`
      },
      {
        message: ``,
        buttonText: `I'm coming.`
      },
      {
        message: ``,
        buttonText: `Please wait for me.`
      }
      
    ]

    if (endingIndex > 12) {
      return (
        <View style={styles.standardView}>
        <View style={styles.contentView}>
          <Text style={styles.title}>Descent</Text>
          <Text style={styles.messageText}>
            {`I'm falling. Downwards. Descending.\n\nThis is my final Descent.`}
          </Text>
        </View>

        <View style={styles.textBoxButton}>
        <TouchableOpacity
          onPress={() => {
            setShowEnding(false)
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Review Game</Text>
        </TouchableOpacity>
        </View>
        
      </View>
      )
    } else {
      return (
        <View style={styles.standardView}>
          <View style={styles.contentView}>
            <Text style={styles.title}>The Last Observation</Text>
            <Text style={styles.messageText}>
              {endingMessages[endingIndex].message}
            </Text>
          </View>
  
          <View style={styles.textBoxButton}>
          {endingIndex < 13 && <TouchableOpacity
            onPress={() => {
              setEndingIndex(endingIndex + 1)
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{endingMessages[endingIndex].buttonText}</Text>
          </TouchableOpacity>}
          </View>
          
        </View>
      );
    }
    
  } else {
    return (
      <Pressable style={styles.standardView} onPress={Keyboard.dismiss}>
        <PaperProvider>
          <View style={styles.standardView}>
            <ImageBackground
              source={backgroundImage}
              imageStyle={{ opacity: 0.05 }}
            >
              <ItemModal
                visible={modalVisible}
                onDismiss={() => {
                  setModalVisible(false);
                }}
                resourceId={modalResource}
              />
              <View style={styles.contentView}>
                <Text style={styles.title}>Descent</Text>
              </View>

              <View style={styles.textBoxButton}>
                <TextInput
                  multiline
                  style={styles.textBox}
                  placeholder="Enter Observations or Combinations... (11, 11+12)"
                  value={userInput}
                  onChangeText={(text) => {
                    if (text === "") {
                      setSubmitted(false);
                      handleReset();

                      setInteractionType("");
                    }

                    if (interactionType !== "") {
                      setInteractionType("");
                    }

                    setUserInput(text);
                  }}
                />
                <TouchableOpacity
                  onPress={handleSubmission}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
              {userInput === "" && (
                <View style={styles.contentView}>
                  <Text>
                    {
                      'Hint: Input observations as numbers (11, 12, etc.). \nInput combinations using "+" (11 + 12)'
                    }
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>
                    Combinations can be made with up to 4 observations.
                  </Text>
                </View>
              )}

              {/* Button Group to control observations list */}
              <View style={styles.tabButtonGroup}>
                {userLvlProgress.map((levelProgress, index) => {
                  return (
                    <TouchableOpacity
                      id={index}
                      style={
                        index === userSelectedLvlButton
                          ? styles.tabButtonSelected
                          : styles.tabButtonNotSelected
                      }
                      onPress={() => setUserSelectedLvlButton(index)}
                      key={index}
                    >
                      <Text
                        style={
                          index === userSelectedLvlButton
                            ? styles.tabButtonTextSelect
                            : styles.tabButtonTextNotSelect
                        }
                      >
                        {levelProgress}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {foundItems.length > 0 && (
                <View style={styles.flatlistView}>
                  <Text style={styles.messageText}>Current Observations</Text>
                  <FlatList
                    style={styles.flatlist}
                    data={foundItems[userSelectedLvlButton]}
                    renderItem={renderFoundAsButton}
                    keyExtractor={(item) => item.id}
                    horizontal
                  />
                </View>
              )}

              {interactionType !== "" && (
                <View style={styles.textBoxButton}>
                  <TextInput
                    multiline
                    style={styles.textBox}
                    placeholder={`Enter ${interactionType}..`}
                    value={userCode}
                    onChangeText={(text) => {
                      setUserCode(text);
                    }}
                  />
                  <TouchableOpacity
                    onPress={handleCodeSubmission}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>
                      {"Submit " + interactionType}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}

              <View style={styles.contentView}>
                <Text style={styles.title}>{cardTitle}</Text>
                <Text style={styles.messageText}>{message}</Text>
              </View>
            </ImageBackground>
          </View>
        </PaperProvider>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  standardView: {
    display: "flex",
    flex: 1,
  },
  textBoxButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  reactLogo: {
    height: 250,
    width: 250,
    bottom: 50,
    left: 0,
  },
  textBox: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
  },
  contentView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 20,
  },
  messageText: {
    fontSize: 22,
  },
  title: {
    fontSize: 25,
  },
  flatlistView: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 20,
  },
  flatlist: {
    maxHeight: 80,
  },
  flatlistButton: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 16,
    marginRight: 5,
  },
  tabButtonGroup: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    paddingHorizontal: 20,
    // gap: 20,
    paddingBottom: 20,
    flexDirection: "row",
  },
  tabButtonSelected: {
    backgroundColor: "black",
    padding: 12,
    // borderRadius: 16,
    // marginRight: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  tabButtonNotSelected: {
    backgroundColor: "white",
    padding: 12,
    borderWidth: 1,
    borderColor: "black",
  },
  tabButtonTextSelect: {
    color: "white",
  },
  tabButtonTextNotSelect: {
    color: "black",
  },
});
