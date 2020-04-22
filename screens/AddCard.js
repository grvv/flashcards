import React, { useState } from "react";
import theme from "../utils/theme";
import { StyleSheet, View } from "react-native";

import { Input, Button, Text } from "galio-framework";
import { useDispatch } from "react-redux";

import { addCard } from "../actions";

export default function AddCardScreen({ route, navigation }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState({});
  const { deckId } = route.params;

  const dispatch = useDispatch();

  const handleAnswerChange = (value) => setAnswer(value);
  const handleQuestionChange = (value) => setQuestion(value);

  const handleSubmit = () => {
    const trimmedQuestion = question.trim();
    const trimmedAnswer = answer.trim();

    const errorObj = {};

    if (trimmedAnswer.length === 0) {
      errorObj.answer = true;
    }
    if (trimmedQuestion.length === 0) {
      errorObj.question = true;
    }

    setError({ ...errorObj });

    if (!Object.keys(errorObj).length) {
      dispatch(
        addCard({ deckId, question: trimmedQuestion, answer: trimmedAnswer })
      );
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Question"
        placeholder="Question"
        onChangeText={handleQuestionChange}
        style={{
          borderColor: theme.COLORS.GREY,
        }}
        placeholderTextColor={theme.COLORS.GREY}
        color={theme.COLORS.GREY}
      />
      {error["question"] && (
        <Text color={theme.COLORS.ERROR}>Question is required.</Text>
      )}

      <Input
        label="Answer"
        placeholder="Answer"
        style={{
          borderColor: theme.COLORS.GREY,
        }}
        onChangeText={handleAnswerChange}
        style={{ borderColor: theme.COLORS.GREY }}
        placeholderTextColor={theme.COLORS.GREY}
        color={theme.COLORS.GREY}
      />
      {error["answer"] && (
        <Text color={theme.COLORS.ERROR}>Answer is required.</Text>
      )}

      <Button
        round
        uppercase
        color="error"
        style={{ marginTop: 20, alignSelf: "center" }}
        onPress={handleSubmit}
      >
        Add Card
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#fff",
  },
});
