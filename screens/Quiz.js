import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <Text>Quiz screen View Works!</Text>
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
