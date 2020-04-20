import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddDeckScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Deck View Works!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
