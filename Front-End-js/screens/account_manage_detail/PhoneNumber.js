import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  Button
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNum: "010-XXXX-XXXX"
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.contentsContainer}>
          <View style={styles.description}>
            <Text style={{ fontSize: 23, marginBottom: 10 }}>전화번호</Text>
            <Text>
              {`계정 복구용 전화번호를 사용하면 비밀번호를 잊어버렸을 때
              비밀번호를 재설정할 수 있습니다`}
            </Text>
          </View>
          <View style={styles.connectedEmail}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Hug에 등록된 전화번호
            </Text>

            {this.state.phoneNum ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ fontSize: 16, marginBottom: 10 }}>
                  {this.state.phoneNum}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(
                      "삭제하시겠습니까",
                      "",
                      [
                        {
                          text: "취소",
                          onPress: () => console.log("Cancel Pressed")
                        },
                        {
                          text: "삭제",
                          onPress: () => {
                            this._deleteNumber();
                          }
                        }
                      ],
                      { cancelable: false }
                    );
                  }}
                >
                  <MaterialIcons name="delete-forever" size={16} />
                </TouchableOpacity>
              </View>
            ) : (
              <Text></Text>
            )}
          </View>
          <View style={styles.restore}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
              복구 전화번호
            </Text>
            <TouchableOpacity>
              <Text style={styles.addEmailButton}>복구 전화번호 추가</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  _deleteNumber = () => {
    this.setState({ phoneNum: "" });
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
    marginTop: 30
  },
  description: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
    marginBottom: 20,
    padding: 20,
    alignItems: "center"
  },
  connectedEmail: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    marginBottom: 20,
    padding: 20
  },
  restore: {
    padding: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5
  },
  addEmailButton: {
    color: "#007AFF"
  }
});
