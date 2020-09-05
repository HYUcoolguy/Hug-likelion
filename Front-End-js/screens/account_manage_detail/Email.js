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

export default class Email extends React.Component {
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
            <Text style={{ fontSize: 23, marginBottom: 10 }}>이메일</Text>
            <Text>Hug에 연결된 이메일 주소를 관리합니다.</Text>
          </View>
          <View style={styles.connectedEmail}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Hug 연결 이메일
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              hyulikelion@likelion.org
            </Text>
          </View>
          <View style={styles.restore}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>복구 이메일</Text>
            <TouchableOpacity>
              <Text style={styles.addEmailButton}>복구 이메일 추가</Text>
            </TouchableOpacity>
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
