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

export default class NickName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: "Cyrano"
    };
  }

  render() {
    const { navigation } = this.props;
    const { orgName } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.nickNameContainer}>
          <Text>닉네임 변경</Text>
          <Text style={styles.nickNameBox}>{orgName}</Text>
          <TextInput style={styles.nickNameBox} placeholder="새 닉네임" />
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
  nickNameContainer: {
    margin: 10,
    marginTop: 30,
    padding: 20
  },
  nickNameBox: {
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    padding: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
