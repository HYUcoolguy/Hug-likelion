import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView
} from "react-native";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import DetailScreen from "./DetailScreen";

export default class MyDiaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: "",
      posts: [
        {
          id: 1,
          title: "6월 24일의 감정상태",
          hashes: ["기쁘다", "왜냐면", "치킨먹어서"],
          content: "본문",
          date: "2020-06-24"
        },
        {
          id: 2,
          title: "6월 23일의 감정상태",
          hashes: ["행복하다", "왜냐면", "풀업성공해서"],
          content: "본문",
          date: "2020-06-23"
        }
      ]
    };
  }

  render() {
    const { posts, selectedDate } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.calendar_diary}>
          <Calendar
            onDayPress={(day) => {
              this.setState({ selectedDate: day });
            }}
            current={new Date()}
          />
          <ScrollView>
            <FlatList
              data={posts.filter((data) => {
                return data.date === selectedDate.dateString;
              })}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("DetailScreen", {
                        posts: item
                      });
                      this.setState({ selectedDate: "" });
                    }}
                  >
                    <View style={styles.postContainer}>
                      <View style={styles.postHeader}>
                        <Text>쓴 글</Text>
                        <View />
                      </View>
                      <Text style={styles.textContainer}>
                        제목 : {item.title}
                      </Text>
                      <Text style={styles.textContainer}>
                        날짜 : {item.date}
                      </Text>
                      <Text style={styles.textContainer}>
                        {item.hashes.map((hash) => {
                          return "#" + hash + ` `;
                        })}
                      </Text>
                      <Text style={styles.textContainer}>{item.content}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={({ item, index }) => {
                return `${index}`;
              }}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>나의 일기</Text>
      </View>
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
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25
  },
  calendar_diary: {
    marginTop: 20
  },
  postContainer: {
    paddingTop: 10
  },
  textContainer: {
    paddingTop: 5
  },
  postHeader: {
    flexDirection: "row"
  }
});
