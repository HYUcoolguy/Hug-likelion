import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import FeedMainScreen from "../screens/feed/FeedMainScreen";
import FeedDetailScreen from "../screens/feed/FeedDetailScreen";
import MyDiaryScreen from "../screens/MyDiaryScreen";
import UrDiaryMainScreen from "../screens/UrDiary/UrDiaryMainScreen";
import UrDiaryDeatilScreen from "../screens/UrDiary/UrDiaryDeatilScreen"

import MyPageScreen from "../screens/MyPageScreen";
import DetailScreen from "../screens/DetailScreen";
import WriteScreen from "../screens/WriteScreeen";
import Log from "../screens/mypage_detail_screen/Log";
import Scrap from "../screens/mypage_detail_screen/Scrap";
import Nowadays_emotion from "../screens/mypage_detail_screen/Nowadays_emotion";
import Nickname from "../screens/mypage_detail_screen/Nickname";
import Subscribe from "../screens/mypage_detail_screen/Subscribe";

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
      <TabFourStack.Screen
        name="Log"
        component={Log}
        options={navOptionHandler}
      />
      <TabFourStack.Screen
        name="Scrap"
        component={Scrap}
        options={navOptionHandler}
      />
      <TabFourStack.Screen
        name="Nowadays_emotion"
        component={Nowadays_emotion}
        options={navOptionHandler}
      />
      <TabFourStack.Screen
        name="Nickname"
        component={Nickname}
        options={navOptionHandler}
      />
      <TabFourStack.Screen
        name="Subscribe"
        component={Subscribe}
        options={navOptionHandler}
      />
    </TabFourStack.Navigator>
  );
}

const navOptionHandler = () => ({
  headerShown: false
});
