import React, { useState } from "react";
import { Text, Button } from "galio-framework";
import { StyleSheet, View } from "react-native";

import theme from "../utils/theme";
const { PRIMARY } = theme.COLORS;

export default function Question(props) {
  const [showAnswer, setShowAnswer] = useState(false);

  const { questionObject, handleAnsweredQuestion } = props;

  const handleButtonClick = (value) => {
    setShowAnswer(false);
    handleAnsweredQuestion(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.verticalMargin}>
        <Text h4 color={PRIMARY}>
          Question :
        </Text>
        <Text h5 style={{ marginTop: 16 }}>
          {questionObject.question}
        </Text>
      </View>

      {!showAnswer && (
        <Button
          round
          uppercase
          color={PRIMARY}
          style={styles.marginTop}
          onPress={() => setShowAnswer(true)}
        >
          Show Answer
        </Button>
      )}

      {showAnswer && (
        <>
          <Text h4 color={PRIMARY}>
            Answer :
          </Text>
          <Text h5 style={{ marginTop: 16 }}>
            {questionObject.answer}
          </Text>

          <Text h4 color={PRIMARY} style={styles.marginTop}>
            How did you do?
          </Text>
          <Text>You got the answer...</Text>

          <Button
            round
            uppercase
            color="success"
            style={[styles.marginTop, styles.alignCenter]}
            onPress={() => handleButtonClick(true)}
          >
            Correct
          </Button>
          <Button
            round
            uppercase
            color="error"
            style={[styles.marginTop, styles.alignCenter]}
            onPress={() => handleButtonClick(false)}
          >
            InCorrect
          </Button>
        </>
      )}
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
