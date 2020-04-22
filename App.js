import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import reducer from "./reducers";
import middleware from "./middleware";

import DeckScreen from "./screens/Deck";
import AddCardScreen from "./screens/AddCard";
import AddDeckScreen from "./screens/AddDeck";
import DecksScreen from "./screens/Decks";
import QuizScreen from "./screens/Quiz";

import { createStore } from "redux";
import { Provider } from "react-redux";

import theme from "./utils/theme";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const store = createStore(reducer, middleware);

const { PRIMARY, GREY } = theme.COLORS;

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Decks") {
            return (
              <MaterialCommunityIcons
                size={size}
                color={color}
                name="cards-outline"
              />
            );
          }

          return <MaterialIcons name="add" size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY,
        inactiveTintColor: GREY,
      }}
    >
      <Tab.Screen name="Decks" component={DecksScreen} />
      <Tab.Screen
        name="AddDeck"
        component={AddDeckScreen}
        options={{ title: "Add Deck" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Deck"
            component={DeckScreen}
            options={{ title: "Deck Detail" }}
          />
          <Stack.Screen
            name="AddDeck"
            component={AddDeckScreen}
            options={{ title: "Add Deck" }}
          />
          <Stack.Screen
            name="AddCard"
            component={AddCardScreen}
            options={{ title: "Add Card" }}
          />
          <Stack.Screen name="Quiz" component={QuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
