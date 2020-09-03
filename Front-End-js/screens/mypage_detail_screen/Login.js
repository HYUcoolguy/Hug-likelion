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
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Password: "",
      check_textInputChange: false,
      secureTextEntry: true
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold" }}>Welcome to Hug</Text>
        </View>
        <View style={styles.footer}>
          <Text>ID</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your ID"
              style={styles.textInput}
              onChangeText={(text) => this._textInputChange(text)}
            />
            {this.state.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : null}
          </View>
          <Text style={(styles.footerText, { marginTop: 35 })}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              autoCapitalize="none"
              placeholder="Your Password"
              secureTextEntry={this.state.secureTextEntry}
              style={styles.textInput}
              onChangeText={(val) => this._handlePass(val)}
            />
            <TouchableOpacity onPress={this._securePass}>
              {this.state.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="red" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ fontWeight: "bold" }}> Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialButtonContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={20} color="white" />
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Google 계정 로그인
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={20} color="white" />
              <Text style={{ fontWeight: "bold", color: "white" }}>
                facebook 계정 로그인
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  _textInputChange = (val) => {
    const { ID, check_textInputChange } = this.state;
    if (val.length !== 0) {
      this.setState({
        ID: val,
        check_textInputChange: true
      });
    } else {
      this.setState({
        ID: val,
        check_textInputChange: false
      });
    }
  };

  _handlePass = (val) => {
    const { Password } = this.state;
    this.setState({
      Password: val
    });
  };

  _securePass = (val) => {
    const { secureTextEntry } = this.state;

    this.setState({
      secureTextEntry: !secureTextEntry
    });
  };
}
//ID textInput onchangeText용 함수, Password eye, eye-off 다루는 함수, Login, 회원가입 버튼 만들기
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA"
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
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#E6E6FA",
    marginVertical: 10,
    width: "100%",
    height: 50
  },
  socialButtonContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  socialButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
    width: "50%",
    height: 50,
    marginHorizontal: 2,
    backgroundColor: "grey"
  }
});
