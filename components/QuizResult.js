import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "galio-framework";

import theme from "../utils/theme";
const { PRIMARY } = theme.COLORS;

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
      <Text h4 color={PRIMARY} style={styles.marginTop}>
        Quiz Completed!
      </Text>
      <Text h5 muted style={{ marginTop: 16 }}>
        You got {questionsAnsweredCorrectly} out of {totalQuestions} correct (
        {percentage}%)
      </Text>

      <Button
        round
        uppercase
        color={PRIMARY}
        onPress={startQuizAgain}
        style={[styles.marginTop, styles.alignCenter]}
      >
        Start Quiz Again
      </Button>
      <Button
        round
        uppercase
        color="warning"
        onPress={goBackToDeck}
        style={[styles.marginTop, styles.alignCenter]}
      >
        Return to Deck
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  marginTop: {
    marginTop: 32,
  },
  verticalMargin: {
    marginTop: 32,
    marginBottom: 32,
  },

  alignCenter: {
    alignSelf: "center",
  },
});
