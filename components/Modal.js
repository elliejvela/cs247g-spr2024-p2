import { Portal, Modal, Button, Text } from "react-native-paper";
import { View, StyleSheet, Platform } from "react-native";

import { resources } from "../assets/resources";

export default function ItemModal({ visible, onDismiss, resourceId }) {
  if (resourceId !== "") {
    return (
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onDismiss}
          contentContainerStyle={
            Platform.OS === "ios" ? styles.modalIOS : styles.modalAndroid
          }
        >
          <Text style={{ color: "black" }}>
            {resourceId + " - " + resources[resourceId].title}
          </Text>
          <Text style={{ color: "black" }}>
            {resources[resourceId].message}
          </Text>
          <View style={[styles.buttonGroup, { marginTop: "5%" }]}></View>
        </Modal>
      </Portal>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    zIndex: -1,
  },
  button: {
    marginLeft: "5%",
  },
  modalIOS: {
    // height: 0.15 * Dimensions.get("window").height,
    backgroundColor: "white",
    padding: "5%",
    margin: "5%",
    borderRadius: "10%",
  },
  modalAndroid: {
    backgroundColor: "white",
    padding: "5%",
    margin: "5%",
    borderRadius: 10,
  },
});
