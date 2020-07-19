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
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Container } from "native-base";

export default class PostDetailScreen extends React.Component {
  render() {
    const { route, navigation } = this.props;
    const { post } = route.params;

    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {post ? (
          <ViewPager style={styles.viewPager} initialPage={0}>
            {/* <FlatList
              data={post.imagesURI}
              renderItem={({ item }) => (
                <View style={styles.page}>
                  <Text>{item}</Text>
                  <Image 
                    source= {{
                      uri: item,
                    }}
                    style={styles.page}/>
                </View>
              )}
              keyExtractor={( index ) => index}/> */}
            <View style={styles.page} key="1">
              <Image 
                source= {{
                  uri: post.imagesURI[0],
                }}
                style={styles.image}/>
            </View>
            <View style={styles.page} key="2">
            <Image 
                source= {{
                  uri: post.imagesURI[1],
                }}
                style={styles.image}/>
            </View>
          </ViewPager>
          // <View>
          //   <Text style={styles.subtitle}>
          //     {post.subtitle}
          //   </Text>
          //   <Text>{post.numOfLike} {post.numOfPlay}</Text>  
          // </View>       
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
  viewPager: {
    flex: 1,
    marginTop: 10,
    maxHeight: width,
    maxWidth: width,
  },
  page: {
    alignItems: 'center',
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
