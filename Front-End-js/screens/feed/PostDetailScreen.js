import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import NullScreen from "../NullScreen";
// import ViewPager from '@react-native-community/viewpager';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";

export default class PostDetailScreen extends React.Component {
  render() {
    const { route, navigation } = this.props;
    const { post } = route.params;

    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {post ? (
          <View style>
            <Image 
              source= {{
                uri: post.thumnailURI,
              }}
              style={styles.thumnail}
            />
            <Text style={styles.subtitle}>
              {post.subtitle}
            </Text>
            <Text>{post.numOfLike} {post.numOfPlay}</Text>
          </View>
          
        ) : (
          <NullScreen />
        )}
      </SafeAreaView>
    );
  }
}

const Header = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-arrow-back" size={30} />
        <Text style={styles.backButtonText}>피드</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  headerContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 4,
  },
  subtitle: {
    fontSize: 50,
    margin: 10,
  },
  thumnail: {
    height: width,
    width: width,
  }
});
