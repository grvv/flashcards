import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DecksScreen() {
  return (
    <View style={styles.container}>
      <Text>Decks View Works!</Text>
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
