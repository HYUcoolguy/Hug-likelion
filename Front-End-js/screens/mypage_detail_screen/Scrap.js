import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Grid from "../../component/Grid";

export default function Scrap() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Grid />
    </SafeAreaView>
  );
}

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header_left}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>스크랩 게시물</Text>
      </View>
      <TouchableOpacity style={styles.icon_container}>
        <Ionicons name="ios-add" size={23} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 90
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  header_left: {
    flex: 1,
    marginLeft: 15
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 23
  },
  icon_container: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 15
  }
});
