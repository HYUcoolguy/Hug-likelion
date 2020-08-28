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
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export default class Birth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      chosenDate: ""
    };
  }

  render() {
    const { navigation } = this.props;
    const { date } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.contentsContainer}></View>

        <View style={styles.buttonContainer}>
          <Button
            title="취소"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Button
            title="저장"
            onPress={() => {
              this.setState(
                {
                  chosenDate: moment(this.state.date).format("YYYY.MM.DD")
                },
                () => {
                  return;
                }
              );
              navigation.navigate("Account", { birth: this.state.chosenDate });
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  _onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //setState에 callback함수 추가하여 async 문제 해결
    this.setState({ date: currentDate }, () => {
      return;
    });
  };
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
