import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView
} from "react-native";
import NullScreen from "../NullScreen";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class DetailScreen extends React.Component {
  render() {
    const { route, navigation } = this.props;
    const { posts } = route.params;

    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} posts={posts} />
        {posts ? (
          <View style={styles.contentsContainer}>
            <View style={styles.todayMind}>
              <View style={styles.MindTitle}>
                <Text>오늘의 감정</Text>
              </View>
              <View style={styles.MindDetail}>
                <Text>
                  {posts.emotions1.map((emotion) => {
                    return `${emotion} `;
                  })}
                  {posts.emotions2.map((emotion) => {
                    return `${emotion} `;
                  })}
                </Text>
              </View>
            </View>
            <ScrollView style={styles.diaryContainer}>
              <Text>{posts.title}</Text>
              <Text>{posts.date}</Text>
              <Text>
                {posts.hashes.map((hash) => {
                  return `#${hash} `;
                })}
              </Text>
              <Text>{posts.content}</Text>
            </ScrollView>
          </View>
        ) : (
          <NullScreen />
        )}
      </SafeAreaView>
    );
  }
}

const Header = ({ navigation, posts }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerBack}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-arrow-back" size={25} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>나의 일기</Text>
      </View>
      <TouchableOpacity
        style={styles.headerWrite}
        onPress={() => {
          navigation.navigate("WriteScreen", { data: posts });
        }}
      >
        <Ionicons name="ios-create" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  contentsContainer: {
    margin: 15,
    padding: 20,
    height: height,
    backgroundColor: "#F0F8FF"
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  headerBack: {
    flex: 1,
    marginLeft: 10
  },
  headerWrite: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25
  },
  calendarNav: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "yellow"
  },
  todayMind: {
    backgroundColor: "#FAEBD7",
    margin: 5,
    padding: 5
  },
  MindTitle: {
    margin: 5
  },
  MindDetail: {
    margin: 5
  },
  diaryContainer: {
    backgroundColor: "#8FBC8F",
    margin: 5,
    padding: 5,
    height: height
  }
});
