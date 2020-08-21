import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import NullScreen from "../NullScreen";
import ViewPager from '@react-native-community/viewpager';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { Container } from "native-base";

export default class FeedDetailScreen extends React.Component {
  render() {
    const { route, navigation } = this.props;
    const { post } = route.params;
    let content = null;
    if (post.type == "photo") {
      content = 
        <FlatList
          data={post.imagesURI}
          horizontal={true}
          pagingEnable={true}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View>
              <Image 
                source= {{
                  uri: item,
                }}
                style={styles.image}/>
            </View>
          )}
        />      
    } else if (post.type == "video") {
      content = <Text>video</Text>
    } else {
      content = <Text>error</Text>
    }
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {post ? (
          <View>
            {content}
            
            <View>
              <Text style={styles.subtitle}>
                {post.subtitle}
              </Text>
              <Text>{post.numOfLike} {post.numOfPlay}</Text>  
            </View>  
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
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
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
  image: {
    height: width,
    width: width,
  }
});
