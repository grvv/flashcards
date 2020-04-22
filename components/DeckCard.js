import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Button, Block, Icon, Text } from "galio-framework";
import { LinearGradient as Gradient } from "expo-linear-gradient";

import theme from "../utils/theme";

const GRADIENT_BLUE = ["#6B84CA", "#8F44CE"];
const GRADIENT_PINK = ["#D442F8", "#B645F5", "#9B40F8"];
const COLOR_GREY = theme.COLORS.MUTED;

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;

export default function DeckCard({ deck, index, goToDeck }) {
  const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;

  const [scaleValue] = useState(new Animated.Value(1));
  const handleCardPress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, { duration: 125, toValue: 0.96 }),
      Animated.timing(scaleValue, { duration: 125, toValue: 1 }),
    ]).start(() => {
      goToDeck({ deckId: deck.id });
    });
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity onPress={handleCardPress}>
        <Block row center card shadow space="between" style={styles.card}>
          <Gradient
            start={[0.45, 0.45]}
            end={[0.9, 0.9]}
            colors={gradientColors}
            style={[styles.gradient, styles.left]}
          >
            <Icon
              size={BASE_SIZE}
              name="card-text"
              color={COLOR_WHITE}
              family="material-community"
            />
          </Gradient>

          <Block flex>
            <Text size={BASE_SIZE * 1.125}>{deck.title}</Text>
            <Text size={BASE_SIZE * 0.875} muted>
              {deck.questions.length} Cards
            </Text>
          </Block>

          <Icon
            style={styles.right}
            size={BASE_SIZE}
            name="chevron-thin-right"
            family="entypo"
            color={COLOR_GREY}
          />
        </Block>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "transparent",
    // marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
  menu: {
    width: BASE_SIZE * 2,
    borderColor: "transparent",
  },
  settings: {
    width: BASE_SIZE * 2,
    borderColor: "transparent",
  },
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: "transparent",
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: "center",
    justifyContent: "center",
  },
});
