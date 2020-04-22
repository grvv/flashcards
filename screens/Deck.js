import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button, Text, Block } from "galio-framework";
import theme from "../utils/theme";
import { useSelector } from "react-redux";

// import { useNavigation } from "@react-navigation/native";

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;

export default function DeckScreen({ route, navigation }) {
  const { deckId } = route.params;
  const [showNoQuestionsError, setShowNoQuestionsError] = useState(false);

  const { deck, questionsCount } = useSelector((decks) => ({
    deck: decks[deckId],
    questionsCount: decks[deckId].questions.length,
  }));

  const handleStartQuiz = () => {
    if (questionsCount === 0) {
      setShowNoQuestionsError(true);
    } else {
      navigation.navigate("Quiz", {
        deckId,
      });
    }
  };

  const handleAddCard = () => {
    navigation.navigate("AddCard", {
      deckId,
    });
  };

  return (
    <View style={styles.container}>
      <Block card shadow style={styles.card}>
        <Text h4>{deck.title}</Text>
        <Text h5 muted>
          {questionsCount} Cards
        </Text>
      </Block>

      {showNoQuestionsError && (
        <Text p style={[styles.errorText, styles.marginVertical]}>
          Add one or more cards before taking the quiz!!
        </Text>
      )}

      <Button
        round
        uppercase
        color="success"
        style={styles.marginVertical}
        onPress={handleStartQuiz}
      >
        Start Quiz
      </Button>

      <Button
        round
        uppercase
        color="error"
        style={styles.marginVertical}
        onPress={handleAddCard}
      >
        Add Card
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 32,
    // justifyContent: "center",
  },

  card: {
    borderColor: "transparent",
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,

    alignSelf: 'stretch'
  },

  marginVertical: {
    marginTop: 32,
  },

  errorText: {
    color: "#FE2472",
    fontSize: 16,
    textAlign: "center",
  },
});
