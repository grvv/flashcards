import React, { useState } from "react";
import theme from "../utils/theme";
import { StyleSheet, View } from "react-native";

import { addDeck } from "../actions";

import { Input, Button, Text } from "galio-framework";
import { useDispatch, useSelector } from "react-redux";

export default function AddDeckScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const decks = useSelector((decks) => decks);

  const handleValueChange = (value) => setTitle(value);

  const handleSubmit = () => {
    const trimmedTitle = title.trim();
    const titleAlreadyExists = Object.keys(decks).some(
      (key) => decks[key].title.toLowerCase() === trimmedTitle.toLowerCase()
    );

    const errorObj = {};

    if (trimmedTitle.length === 0 || titleAlreadyExists) {
      titleAlreadyExists
        ? (errorObj.unique = true)
        : (errorObj.required = true);
    } else {
      const deckId = trimmedTitle.replace(/\s/g, "");
      const timestamp = Math.round(new Date() / 1000);
      const dateString = new Date().toISOString().split("T")[0];
      dispatch(
        addDeck({
          id: deckId,
          title: trimmedTitle,
          timestamp: timestamp,
          created: dateString,
          questions: [],
        })
      );

      setTitle("");
      setError({});

      navigation.navigate("Decks");
    }

    setError(errorObj);
  };

  return (
    <View style={styles.container}>
      <Input
        value={title}
        label="Title"
        placeholder="Tile"
        onChangeText={handleValueChange}
        style={{
          borderColor: theme.COLORS.GREY,
        }}
        placeholderTextColor={theme.COLORS.GREY}
        color={theme.COLORS.GREY}
      />
      {error["required"] && (
        <Text color={theme.COLORS.ERROR}>Title is required.</Text>
      )}
      {error["unique"] && (
        <Text color={theme.COLORS.ERROR}>Title must be unique.</Text>
      )}

      <Button
        round
        uppercase
        color="error"
        style={{ marginTop: 20, alignSelf: "center" }}
        onPress={handleSubmit}
      >
        Create Deck
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
