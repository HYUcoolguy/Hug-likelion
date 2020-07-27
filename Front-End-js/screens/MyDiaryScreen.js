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
import { Ionicons } from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import DetailScreen from "./DetailScreen";

export default class MyDiaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: "",
      /*posts:[
        {
          id : uuid
          title : string
          hashes : array
          content : string
          date : string
          emotions : array
          marked : boolean
          dotColor : string
        }
      ]
*/
      posts: [
        {
          id: 1,
          title: "7월 16일의 감정상태",
          hashes: ["슬프다", "왜냐면", "치킨 못 먹어서"],
          content: "본문",
          date: "2020-07-16",
          emotions: ["실망", "좌절", "무기력"],
          marked: true,
          dotColor: "red"
        },
        {
          id: 2,
          title: "7월 17일의 감정상태",
          hashes: ["우울하다", "왜냐면", "이별해서"],
          content: "본문",
          date: "2020-07-17",
          emotions: ["상처", "외로움", "무기력"],
          marked: true,
          dotColor: "blue"
        }
      ]
    };
  }
  //scrollView 자리에 일기 유/무에 따라 toggle 작업 해야함
  render() {
    const { posts, selectedDate } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <View style={styles.calendar_diary}>
          <Calendar
            onDayPress={(day) => {
              this.setState({ selectedDate: day });
            }}
            current={new Date()}
            markedDates={this.dateMarking}
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

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header_left}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>나의 일기</Text>
      </View>
      <TouchableOpacity
        style={styles.icon_container}
        onPress={() => {
          navigation.navigate("WriteScreen");
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
    backgroundColor: "white",
    paddingTop: 90
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10
  },
  header_left: {
    flex: 1,
    marginLeft: 10
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25
  },
  icon_container: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10
  },
  calendar_diary: {},
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
