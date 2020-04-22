import React, { useEffect, useState } from "react";
import { Text } from "galio-framework";
import CustomStatusBar from "../components/CustomStatusBar";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import DeckCard from "../components/DeckCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDecks } from "../utils/api";
import { receiveDecks } from "../actions";

import theme from "../utils/theme";

const { PRIMARY } = theme.COLORS;

export default function DecksScreen({ navigation }) {
  const dispatch = useDispatch();
  const decksArray = useSelector((decks) =>
    Object.keys(decks)
      .map((key) => decks[key])
      .sort((a, b) => b.timestamp - a.timestamp)
  );
  const [loading, setLoading] = useState(true);

  const goToDeck = (params) => navigation.navigate("Deck", { ...params });

  const renderCards = () =>
    decksArray.map((deck, index) => (
      <DeckCard
        key={index.toString()}
        deck={deck}
        index={index}
        goToDeck={goToDeck}
      />
    ));

  useEffect(() => {
    fetchAllDecks().then((decks) => {
      dispatch(receiveDecks(decks));
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Text h4 color={PRIMARY}>
        Mobile Flashcards
      </Text>
      <Text h5 muted>
        Fun way to preparing for tests!
      </Text>

      <View style={styles.deckCount}>
        <Text h5>No of Decks</Text>
        <Text h5>2</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {loading ? <ActivityIndicator size="large" /> : renderCards()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  deckCount: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginVertical: 30,
  },
});
