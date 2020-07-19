import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";

import {
  FeedTabNavigator,
  TabTwoNavigator,
  TabThreeNavigator,
  TabFourNavigator
} from "./StackNavigator";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="피드">
      <BottomTab.Screen
        name="피드"
        component={FeedTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="video" color={color} size={23} />
          )
        }}
      />
      <BottomTab.Screen
        name="나의 일기"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" color={color} size={23} />
          )
        }}
      />
      <BottomTab.Screen
        name="너의 일기"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="globe" color={color} size={23} />
          )
        }}
      />
      <BottomTab.Screen
        name="마이페이지"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" color={color} size={23} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
