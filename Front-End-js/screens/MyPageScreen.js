import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class MyPageScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <MyPageNav navigation={navigation} />
      </SafeAreaView>
    );
  }
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>마이페이지</Text>
      </View>
    </View>
  );
};

const MyPageNav = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Log");
        }}
      >
        <Text>최근 본 게시물</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Scrap");
        }}
      >
        <Text>스크랩 게시물</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Nowadays_emotion");
        }}
      >
        <Text>최근 나의 온도</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Nickname");
        }}
      >
        <Text>닉네임 설정</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        <Text>프리미엄 버전</Text>
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
  navContainer: {
    margin: 10,
    alignItems: "center"
  }
});
