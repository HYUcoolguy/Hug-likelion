import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/";
import { createStackNavigator } from "@react-navigation/stack";
import VideoScreen from "./Screen/videoScreen";
import MyDiaryScreen from "./Screen/myDiaryScreen";
import UrDiaryScreen from "./Screen/uDiaryScreen";
import MyPageScreen from "./Screen/myPageScreen";
import writeScreen from "./Screen/writeScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName="myDiary">
      <Stack.Screen
        name="나의 일기"
        component={MyDiaryScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="detailScreen"
        component={videoScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="writeScreen"
        component={writeScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

const navOptionHandler = () => ({
  headerShown: false
});

const MyNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="피드"
        component={VideoScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={30} />
        }}
      />
      <Tab.Screen
        name="나의 일기"
        component={DiaryStack}
        options={{
          tabBarIcon: () => <FontAwesome name="pencil" size={30} />
        }}
      />
      <Tab.Screen
        name="너의 일기"
        component={UrDiaryScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="pencil" size={30} />
        }}
      />
      <Tab.Screen
        name="마이 페이지"
        component={MyPageScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="pencil" size={30} />
        }}
      />
    </Tab.Navigator>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyNav />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
