import { Text, View, Image, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

import { resources } from "../assets/resources.js"; // TODO: Add actual images and messages

export default function Index() {
    let [userInput, setUserInput] = useState("");
    let [imageSource, setImageSource] = useState(
        require("@/assets/images/react-logo.png")
    );
    let [message, setMessage] = useState("");
    let [submitted, setSubmitted] = useState(false);

    return (
        <View style={styles.standardView}>
            <Image style={styles.reactLogo} source={imageSource} />

            <View style={styles.textBoxButton}>
                <TextInput
                    multiline
                    style={styles.textBox}
                    placeholder="Type Observations..."
                    value={userInput}
                    onChangeText={(text) => {
                        let lowerCaseText = text.toLowerCase();
                        setUserInput(lowerCaseText);
                    }}
                />

                <Button
                    title={submitted ? "reset" : "submit"}
                    onPress={() => {
                        if (submitted) {
                            setUserInput("");
                            setImageSource(resources["default"].imageSource);
                            setMessage(resources["default"].message);
                        } else {
                            if (resources[userInput] !== undefined) {
                                setImageSource(
                                    resources[userInput].imageSource
                                );
                                setMessage(resources[userInput].message);
                            } else {
                                setMessage("Error");
                            }
                        }
                        setSubmitted(!submitted);
                    }}
                />
            </View>

            <Text>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    standardView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    textBoxButton: {
        flexDirection: "row",
        justifyContent: "space-evenly",
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
        marginHorizontal: "5%",
    },
});
