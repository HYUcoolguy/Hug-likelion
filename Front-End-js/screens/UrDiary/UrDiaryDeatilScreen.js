import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import NullScreen from "../NullScreen";
import DiaryItem from "./UrDiaryItem"

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";


export default class UrDiaryDeatilScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {post ? (
          <View>
            <Text>asdf</Text>
          </View>
        ) : (
          <NullScreen />
        )}
      </SafeAreaView>
    );
  }
}

const Header = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-arrow-back" size={30} />
        <Text style={styles.backButtonText}>너의 일기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  headerContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
  },
  backButtonText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 4,
  },
});
