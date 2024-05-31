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
  ImageBackground
} from "react-native";
import { useState, useEffect } from "react";
import { PaperProvider, List } from "react-native-paper";
import { Audio } from "expo-av";

import { resources } from "../assets/resources.js";
import ItemModal from "../components/Modal.js";

let backgroundImage = require("../assets/images/old_building.png");

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
  let [endingMessage, setEndingMessage] = useState("");

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
          "I need a different way to open this door...";
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

  const handleEndingSubmit = () => {
    if (userCode.toLowerCase().includes("janitor")) {
      setEndingMessage(
        "With your overwhelming evidence, the police officers lower their guns and thank you for your lead about the real culprit. As the officers rush pass you, you wonder how they're going to go up the building..."
      );
    } else {
      setEndingMessage(
        "Nothing you say convinces the police. You are forced the ground. Your life will never be the same again..."
      );
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

        <Text>You will be inputing card numbers (11, 12), Level Numbers (Level 1), as well as combinations (11+12).</Text>
        <Text>Card Numbers (Observations) will give more information about the card</Text>
        <Text>Level Numbers will give information on the Level</Text>
        <Text>Combinations (Item Combos) may lead to new items</Text>

        <Text>Make sure to read carefully as some clues as hidden in text 😊</Text>

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
    return (
      <View style={styles.standardView}>
        <View style={styles.contentView}>
          <Text style={styles.title}>{resources["ending"]["title"]}</Text>
          <Text style={styles.messageText}>
            {resources["ending"]["message"]}
          </Text>
        </View>

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
            {endingMessage === "" && (
              <TouchableOpacity
                onPress={handleEndingSubmit}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  {"Submit " + interactionType}
                </Text>
              </TouchableOpacity>
            )}

            {endingMessage !== "" && (
              <TouchableOpacity
                onPress={() => setEndingMessage("")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Try Again</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={styles.contentView}>
          <Text styles={styles.messageText}>{endingMessage}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <Pressable style={styles.standardView} onPress={Keyboard.dismiss}>
        <PaperProvider>
          <View style={styles.standardView}>
          <ImageBackground source={backgroundImage} imageStyle={{opacity: 0.05}}>
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
