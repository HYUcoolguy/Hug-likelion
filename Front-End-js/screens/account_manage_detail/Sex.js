import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import RadioBox from "../../component/RadioBox";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class Sex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.contentsContainer}>
          <View style={styles.description}>
            <Text style={{ fontSize: 23, marginBottom: 10 }}>성별</Text>
            <Text>
              성별을 지정하면 나를 어떤 성별로 나타내고 싶은지 나타낼 수
              있습니다.
            </Text>
          </View>
          <RadioBox />
          <View style={styles.buttonContainer}>
            <Button
              title="취소"
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Button title="저장" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>계정관리</Text>
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
  contentsContainer: {
    margin: 10,
    marginTop: 30,
    padding: 20
  },
  description: {
    marginBottom: 40
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
