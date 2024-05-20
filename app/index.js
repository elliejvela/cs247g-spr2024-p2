import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import { resources } from "../assets/resources.js"; // TODO: Add actual images and messages

export default function Index() {
  let [userInput, setUserInput] = useState("");
  let [imageSource, setImageSource] = useState(
    require("@/assets/images/react-logo.png")
  );
  let [message, setMessage] = useState("");
  let [cardTitle, setCardTitle] = useState("");
  let [submitted, setSubmitted] = useState(false);
  const handleSubmission = () => {
    if (submitted) {
      setUserInput("");
      setImageSource(resources["default"].imageSource);
      setMessage(resources["default"].message);
      setCardTitle(resources["default"].title);
    } else {
      if (resources[userInput] !== undefined) {
        setImageSource(resources[userInput].imageSource);
        setMessage(resources[userInput].message);
        setCardTitle(resources[userInput].title);
      } else {
        setMessage("Invalid card number");
      }
    }
    setSubmitted(!submitted);
  };

  return (
    <View style={styles.standardView}>
      {/* <Image style={styles.reactLogo} source={imageSource} /> */}

      <View style={styles.textBoxButton}>
        <TextInput
          multiline
          style={styles.textBox}
          placeholder="Enter Observations..."
          value={userInput}
          onChangeText={(text) => {
            let lowerCaseText = text.toLowerCase();
            setUserInput(lowerCaseText);
          }}
        />
        <TouchableOpacity onPress={handleSubmission} style={styles.button}>
          <Text style={styles.buttonText}>
            {submitted ? "Reset" : "Submit"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.title}>{cardTitle}</Text>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
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
    marginBottom: 10,
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
  },
  messageText: {
    fontSize: 22,
  },
  title: {
    fontSize: 25,
  },
});
