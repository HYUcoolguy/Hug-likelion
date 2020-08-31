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
import { FontAwesome, Feather } from "@expo/vector-icons";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ID: "",
        Password: "",
        check_textInputChange: false,
        secureTextEntry: true
      }
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Welcome to Hug</Text>
        </View>
        <View style={styles.footer}>
          <Text>ID</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your ID"
              style={styles.textInput}
            />
            {this.state.data.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
          <Text style={(styles.footerText, { marginTop: 35 })}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your Password"
              secureTextEntry={true}
              style={styles.textInput}
            />

            <Feather name="eye-off" color="grey" size={20} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
//ID textInput onchangeText용 함수, Password eye, eye-off 다루는 함수, Login, 회원가입 버튼 만들기
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF"
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: "flex-end"
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  footerText: {},
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a"
  }
});
