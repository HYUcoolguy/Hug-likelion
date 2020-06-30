import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
