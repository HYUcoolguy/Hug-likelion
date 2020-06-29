import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import VideoScreen from "../screens/VideoScreen";
import MyDiaryScreen from "../screens/MyDiaryScreen";
import UrDiaryScreen from "../screens/UrDiaryScreen";
import MyPageScreen from "../screens/MyPageScreen";

import {
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList
} from "../types";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

export function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={VideoScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

export function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={MyDiaryScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

export function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={UrDiaryScreen}
        options={{ headerTitle: "Tab Three Title" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

export function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={MyPageScreen}
        options={{ headerTitle: "Tab Four Title" }}
      />
    </TabFourStack.Navigator>
  );
}
