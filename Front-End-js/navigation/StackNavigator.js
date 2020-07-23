import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import FeedMainScreen from "../screens/feed/FeedMainScreen";
import FeedDetailScreen from "../screens/feed/FeedDetailScreen";
import MyDiaryScreen from "../screens/MyDiaryScreen";
import UrDiaryMainScreen from "../screens/UrDiary/UrDiaryMainScreen";
import UrDiaryDeatilScreen from "../screens/UrDiary/UrDiaryDeatilScreen"

import MyPageScreen from "../screens/MyPageScreen";
import DetailScreen from "../screens/DetailScreen";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

export function FeedTabNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="FeedTabScreen"
        component={FeedMainScreen}
        options={navOptionHandler}
      />
      <TabTwoStack.Screen
        name="FeedDetailScreen"
        component={FeedDetailScreen}
        options={navOptionHandler}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

export function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={MyDiaryScreen}
        options={navOptionHandler}
      />
      <TabTwoStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={navOptionHandler}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

export function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="UrDiaryMainScreen"
        component={UrDiaryMainScreen}
        options={navOptionHandler}
      />
      <TabThreeStack.Screen
        name="UrDiaryDeatilScreen"
        component={UrDiaryDeatilScreen}
        options={navOptionHandler}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();

export function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={MyPageScreen}
        options={navOptionHandler}
      />
    </TabFourStack.Navigator>
  );
}

const navOptionHandler = () => ({
  headerShown: false
});
