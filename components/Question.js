import React, { useState } from "react";
import { Text, Button } from "galio-framework";
import { StyleSheet, View } from "react-native";

export default function Question(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const { questionObject, handleAnsweredQuestion } = props;

  return (
    <View>
      <Text h5>Question</Text>
      <Text muted>{questionObject.question}</Text>

      {!showAnswer && (
        <Button
          round
          uppercase
          color="info"
          onPress={() => setShowAnswer(true)}
        >
          Show Answer
        </Button>
      )}

      {showAnswer && (
        <>
          <Text>Answer</Text>
          <Text>{questionObject.answer}</Text>
          <Text>How did you do?</Text>
          <Text>You got the answer...</Text>

          <Button
            round
            uppercase
            color="success"
            onPress={() => handleAnsweredQuestion(true)}
          >
            Correct
          </Button>
          <Button
            round
            uppercase
            color="error"
            onPress={() => handleAnsweredQuestion(false)}
          >
            InCorrect
          </Button>
        </>
      )}
    </View>
  );
}
