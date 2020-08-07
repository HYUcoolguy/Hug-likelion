import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import NullScreen from "../NullScreen";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import UrDiaryItem from "./UrDiaryItem"
import UrDiaryItemFooter from "./UrDiaryItemFooter"
import UrDiaryComment from "./UrDiaryComment"
import GrayDivider from "../GrayDivider"
import { Fontisto, EvilIcons, SimpleLineIcons } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler";

export default class UrDiaryDeatilScreen extends React.Component {

  render() {
    const { route, navigation } = this.props;
    const { post } = route.params;
    // postId로 request
    const { width, height } = Dimensions.get('window')
    const value = "asdf"
    // const [value, onChangeText] = useState("asdf");
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {post ? (
            <View>
              {/* 도대체 아래는 왜 안돼 */}
              {/* <UrDiaryItem post={post}/>  */}
              <View style={styles.postContainer}>
                <View>
                  {post.sex == "male" ? (
                    <SimpleLineIcons name="user" size={30} />
                  ) : (
                    <SimpleLineIcons name="user-female" size={30}/>
                  )}
                </View>
                <View>
                  <Text style={styles.nickname}>{post.nickname}</Text>
                  <Text style={styles.uploadTime}>{post.uploadTime}</Text>  
                </View>
              </View>
              <Text style={styles.postBody}>{post.contents}</Text>
              {/*  */}
              <UrDiaryItemFooter numOfLike={post.numOfLike} numOfComments={post.numOfComments}/>
              <GrayDivider/>
              <UrDiaryComment comments={post.comments}/>
              {/* 왜 안나오지?? */}
              <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => onChangeText(text)}
                  value={value} />
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
        }}>
        <Ionicons name="ios-arrow-back" size={30} />
        <Text style={styles.backButtonText}>너의 일기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
  }, 
  headerContainer: {
    paddingLeft: 10,
    paddingTop: 5,
    flexDirection: 'row',
  },
  backButtonText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 4,
  },
  postContainer: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 3,
    flexDirection:"row",
  },
  postBody:{
    paddingTop: 10,
    fontSize: 15,
    paddingLeft: 15,
  },
  nickname: {
    marginLeft:7,
    fontWeight:"bold"
  },
  uploadTime:{
    paddingLeft: 7,
    color: "gray"
  },
  commentsContainer: {
    marginBottom: 100,
  }
});
