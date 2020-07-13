import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import VideoScreen from "../screens/VideoScreen";
import MyDiaryScreen from "../screens/MyDiaryScreen";
import UrDiaryScreen from "../screens/UrDiaryScreen";
import MyPageScreen from "../screens/MyPageScreen";
import DetailScreen from "../screens/DetailScreen";
import WriteScreen from "../screens/WriteScreeen";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

export function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={VideoScreen}
        options={navOptionHandler}
      />
    </TabOneStack.Navigator>
  );
}

const DetailStack = createStackNavigator();

export function DetailNavigator() {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={navOptionHandler}
      />
      <DetailStack.Screen
        name="WriteScreen"
        component={WriteScreen}
        options={navOptionHandler}
      />
    </DetailStack.Navigator>
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
      <TabTwoStack.Screen
        name="WriteScreen"
        component={WriteScreen}
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
        name="TabThreeScreen"
        component={UrDiaryScreen}
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
