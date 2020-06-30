import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NullScreen from "./NullScreen";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

export default class DetailScreen extends React.Component {
  render() {
    const { route, navigation } = this.props;
    const { posts } = route.params;

    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        {posts ? (
          <View style={styles.contentsContainer}>
            <Text>{posts.title}</Text>
            <Text>{posts.date}</Text>
            <Text>
              {posts.hashes.map((hash) => {
                return `#${hash} `;
              })}
            </Text>
            <Text>{posts.content}</Text>
          </View>
        ) : (
          <NullScreen />
        )}
      </View>
    );
  }
}

const Header = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-arrow-back" size={30} />
        <Text style={styles.Text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB6C1"
  },
  header: {
    paddingTop: 20,
    flexDirection: "row"
  },
  Text: {
    fontSize: 20,
    marginLeft: 10
  },
  contentsContainer: {
    paddingTop: 20
  }
});
