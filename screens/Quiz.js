import React, { useState } from "react";
import { Text } from "galio-framework";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import {
  clearLocalNotification,
  setLocalNotification,
} from "../utils/notificationHelper";
import Question from "../components/Question";
import QuizResult from "../components/QuizResult";

export default function QuizScreen({ route, navigation }) {
  const { deckId } = route.params;
  const { questions } = useSelector((decks) => ({
    questions: decks[deckId].questions,
  }));

  const [quizComplete, setQuizComplete] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnsweredQuestion = async (isCorrectAnswer) => {
    if (isCorrectAnswer) {
      setAnsweredCorrectly(answeredCorrectly + 1);
    }
    const quizCompleted = currentQuestionIndex === questions.length - 1;

    if (quizCompleted) {
      setQuizComplete(true);

      await clearLocalNotification();
      await setLocalNotification();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const startQuizAgain = () => {
    setQuizComplete(false);
    setAnsweredCorrectly(0);
    setCurrentQuestionIndex(0);
  };

  const goBackToDeck = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Text h4>Quiz Time!!</Text>
      <Text h5 muted>
        {`${currentQuestionIndex + 1}/${questions.length}`}
      </Text>

      {quizComplete ? (
        <QuizResult
          goBackToDeck={goBackToDeck}
          startQuizAgain={startQuizAgain}
          totalQuestions={questions.length}
          questionsAnsweredCorrectly={answeredCorrectly}
        />
      ) : (
        <Question
          questionObject={currentQuestion}
          handleAnsweredQuestion={handleAnsweredQuestion}
        />
      )}
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
