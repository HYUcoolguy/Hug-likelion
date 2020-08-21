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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class MyPageScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.accountContainer}>
          <Text>Cyrano</Text>
        </View>
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
          navigation.navigate("Scrap");
        }}
        style={styles.tabContainer}
      >
        <MaterialIcons name="bookmark" size="21" />
        <Text style={styles.tabText}>스크랩 게시물</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Account");
        }}
        style={styles.tabContainer}
      >
        <MaterialIcons name="account-box" size="21" />
        <Text style={styles.tabText}>계정 관리</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
        style={styles.tabContainer}
      >
        <MaterialIcons name="favorite" size="21" />
        <Text style={styles.tabText}>프리미엄 버전</Text>
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
  accountContainer: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
    height: height / 4
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 40,
    padding: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  tabText: {
    marginLeft: 10,
    fontSize: 20
  }
});
