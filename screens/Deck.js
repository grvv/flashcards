import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DeckScreen({ navigation }) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Deck View Works!</Text>

      <Button
        title="Add Card"
        onPress={() => {
          navigation.navigate("AddCard");
        }}
      />
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
