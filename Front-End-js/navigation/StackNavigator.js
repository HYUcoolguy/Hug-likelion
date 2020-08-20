import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import VideoScreen from "../screens/VideoScreen";
import MyDiaryScreen from "../screens/MyDiaryTab/MyDiaryScreen";
import UrDiaryScreen from "../screens/UrDiaryScreen";
import MyPageScreen from "../screens/MyPageScreen";
import DetailScreen from "../screens/MyDiaryTab/DetailScreen";
import WriteScreen from "../screens/MyDiaryTab/WriteScreeen";
import Scrap from "../screens/mypage_detail_screen/Scrap";
import Account from "../screens/mypage_detail_screen/Account";
import Subscribe from "../screens/mypage_detail_screen/Subscribe";
import NickName from "../screens/account_manage_detail/NickName";

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
      <TabFourStack.Screen
        name="Scrap"
        component={Scrap}
        options={navOptionHandler}
      />
      <TabFourStack.Screen
        name="Account"
        component={Account}
        options={navOptionHandler}
      />
      <TabFourStack.Screen
        name="Subscribe"
        component={Subscribe}
        options={navOptionHandler}
      />
      <TabFourStack.Screen
        name="NickName"
        component={NickName}
        options={navOptionHandler}
      />
    </TabFourStack.Navigator>
  );
}

const navOptionHandler = () => ({
  headerShown: false
});
