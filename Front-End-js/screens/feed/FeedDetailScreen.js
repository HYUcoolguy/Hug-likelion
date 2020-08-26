import * as React from "react";
import { Ionicons, AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import NullScreen from "../NullScreen";
import YouTube from 'react-native-youtube';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
  ActivityIndicator
} from "react-native";
import { WebView } from 'react-native-webview';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default class FeedDetailScreen extends React.Component {
  constructor(probs) {
    super(probs)
    this.state = {
      isLoading: false,
    }
  }
  
  render() {
    const { route, navigation } = this.props;
    const { post } = route.params;
    let content = null;
    const YOUTUBE_API_KEY = "AIzaSyDrjIpM7RHx1vkul1KRb3iPKWGRdlJWIcc"
    
    if (post.type === "photo") {
      content = 
        <FlatList
          data={post.imagesURI}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
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
    } else if (post.type === "video") {
      content = 
        <WebView
          style={styles.webView}
          javaScriptEnabled={true}
          source={{uri: post.videoURI}}
        />
    } else {
      content = <Text>error</Text>
    }
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {post ? (
          <View>
            <ScrollView>
              {content}
            </ScrollView>
            <View flexDirection="row">
              <Text style={styles.subtitle}>
                {post.subtitle}
              </Text>
           {/* heart, bookmark(FontAwesome5) : fulled  */}
              <View style={{alignItems:"flex-end", paddingTop:10}}>
                <View flexDirection="row" style={{paddingLeft:220}}>
                <TouchableOpacity>
                  <AntDesign name="hearto" size={25} style={{paddingRight:10}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="bookmark-o" size={25}/>
                </TouchableOpacity>
                </View>              
                <Text style={{color:'gray'}}>{post.numOfLike} {post.numOfPlay}</Text>  
              </View>
            </View> 
            <DotIndicator color='white' />
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
    fontSize: 30,
    margin: 10,
  },
  image: {
    height: width,
    width: width,
    marginTop:10,
  },
  webView: {
    flex:1,
    height: width,
    width: width,
    marginTop:10,
  }
});
