import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";

import {
  TabOneNavigator,
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
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="video" color={color} size={23} />
          )
        }}
      />
      <BottomTab.Screen
        name="나의 일기"
        component={TabTwoNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibleSecond(route),
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" color={color} size={23} />
          )
        })}
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
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibleFourth(route),
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person" color={color} size={23} />
          )
        })}
      />
    </BottomTab.Navigator>
  );
}

function getTabBarVisibleSecond(route) {
  console.log(route.state);
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "TabTwoScreen";

  if (routeName === "WriteScreen") {
    return false;
  }
  return true;
}

function getTabBarVisibleFourth(route) {
  console.log(route.state);
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "TabFourScreen";

  if (routeName !== "TabFourScreen") {
    return false;
  }
  return true;
}
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
