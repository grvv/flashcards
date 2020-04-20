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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const store = createStore(reducer, middleware);

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={DecksScreen} />
      <Tab.Screen name="AddDeck" component={AddDeckScreen} />
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
          <Stack.Screen name="Deck" component={DeckScreen} />
          <Stack.Screen name="AddDeck" component={AddDeckScreen} />
          <Stack.Screen name="AddCard" component={AddCardScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
