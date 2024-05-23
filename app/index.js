import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { Audio } from "expo-av";

import { resources } from "../assets/resources.js"; // TODO: Add actual images and messages
import ItemModal from "../components/Modal.js";

export default function Index() {
  let [beginGame, setBeginGame] = useState(false);
  let [userInput, setUserInput] = useState("");
  let [message, setMessage] = useState("");
  let [cardTitle, setCardTitle] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [interactionType, setInteractionType] = useState("");
  let [requiredCode, setRequiredCode] = useState("");
  let [userCode, setUserCode] = useState("");

  let [foundItems, setFoundItems] = useState([]);

  const [sound, setSound] = useState();

  // Modal for prior observations
  const [modalVisible, setModalVisible] = useState(false);
  const [modalResource, setModalResource] = useState("");

  // play
  async function playSound(soundName) {
    level_1_sounds = {
      VentCrawl: await Audio.Sound.createAsync(
        require("../assets/sounds/VentCrawl.mp3")
      ),
      InvalidCombo: await Audio.Sound.createAsync(
        require("../assets/sounds/InvalidCombo.mp3")
      ),
      StartupSound: await Audio.Sound.createAsync(
        require("../assets/sounds/StartupSound.mp3")
      ),
    };

    const { sound } = level_1_sounds[soundName];
    if (soundName === "") {
      return;
    } else if (sound != undefined) {
      console.log("Playing Sound " + soundName);
      setSound(sound);

      await sound.playAsync();
    } else {
      console.log("invalid soundname");
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
          console.log("Unloading Sound");
        }
      : undefined;
  }, [sound]);

  const handleSubmission = () => {
    //process user input for JSON lookup
    let input = userInput.toLowerCase().replaceAll(" ", "");
    input = input.split("+");
    // this sorts a string of numbers in numerical order rather than alphabetical order
    input.sort(function (a, b) {
      return a - b;
    });
    input = input.toString();

    if (resources[input] !== undefined) {
      //process user input
      playSound(resources[input].soundName);
      setMessage(resources[input].message);
      setCardTitle(resources[input].title);

      // Check for interaction type
      if (resources[input].interaction) {
        let interactionType = resources[input].interaction;

        setInteractionType(interactionType);
        setRequiredCode(resources[input][interactionType]);
      }

      print(foundItems.find((ele) => ele === input));

      if (foundItems.find((ele) => ele.id === input) === undefined) {
        setFoundItems([
          ...foundItems,
          {
            id: input,
            title: resources[input].title,
          },
        ]);
      }
    } else {
      playSound("InvalidCombo");
      setMessage("Invalid card number");
    }
    setSubmitted(!submitted);
  };

  const handleCodeSubmission = () => {
    if (userCode === requiredCode) {
      setMessage(resources[userInput].successMessage);
    } else {
      setMessage("This seems not correct...");
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
    setRequiredCode("");
    setInteractionType("");
    setUserCode("");
  };

  if (!beginGame) {
    return (
      <View style={styles.contentView}>
        <Text style={styles.title}>Descent</Text>

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
                playSound("StartupSound");
                handleSubmission();

                setFoundItems([
                  {
                    id: "level1",
                    title: resources["level1"].title,
                  },
                ]);
              }
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <PaperProvider>
        <View style={styles.standardView}>
          <ItemModal
            visible={modalVisible}
            onDismiss={() => {
              setModalVisible(false);
            }}
            resourceId={modalResource}
          />
          <View style={styles.textBoxButton}>
            <TextInput
              multiline
              style={styles.textBox}
              placeholder="Enter Observations..."
              value={userInput}
              onChangeText={(text) => {
                if (text === "") {
                  setSubmitted(false);
                  handleReset();
                }
                setUserInput(text);
              }}
            />
            <TouchableOpacity onPress={handleSubmission} style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          {userInput === "" && (
            <View style={styles.contentView}>
              <Text>
                {
                  "Hint: Input observations as numbers (1-1, 1-2, etc.). \nInput combinations as lower number + higher numbers (1-1 + 1-2)"
                }
              </Text>
            </View>
          )}

          {foundItems.length > 0 && (
            <View style={styles.flatlistView}>
              <Text style={styles.messageText}>Current Observations</Text>
              <FlatList
                style={styles.flatlist}
                data={foundItems}
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
        </View>
      </PaperProvider>
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
});
