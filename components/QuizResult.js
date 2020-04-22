import React from "react";
import { View } from "react-native";
import { Text, Button } from "galio-framework";

export default function QuizResult(props) {
  const {
    totalQuestions,
    questionsAnsweredCorrectly,
    startQuizAgain,
    goBackToDeck,
  } = props;
  const percentage = Math.round(
    (100 / totalQuestions) * questionsAnsweredCorrectly
  );

  return (
    <View>
      <Text h5>Quiz Completed!!</Text>
      <Text muted>
        You got {questionsAnsweredCorrectly} out of {totalQuestions} correct (
        {percentage}%)
      </Text>

      <Button round uppercase color="info" onPress={startQuizAgain}>
        Start Quiz Again
      </Button>
      <Button round uppercase color="warning" onPress={goBackToDeck}>
        Return to Deck
      </Button>
    </View>
  );
}
