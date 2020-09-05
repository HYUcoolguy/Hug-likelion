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
  ActivityIndicator,
} from "react-native";
import Listitem from "./Listitem"
import UrDiaryItemFooter from "./UrDiaryItemFooter"
import GrayDivider from "../GrayDivider"
import { Fontisto, EvilIcons, SimpleLineIcons } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler";

export default class UrDiaryDeatilScreen extends React.Component {
  constructor(props) {
    super(props)
    const { route, navigation } = this.props;
    const { post } = route.params;

    this.state = {
      inputValue: "",
      comments: post.comments,
      isLoading: true,
    }
  }

  _changeText = (value) => {
    this.setState({inputValue: value});
  }

  _addTodoItem = () => {
    if(this.state.inputValue != '') {
      const preData = this.state.comments;
      const newData = { title: this.state.inputValue, isComplete: false };
      this.setState({
        inputValue: '',
        comments: preData.concat(newData),
      });
    }
  }

  _makeTodoItem = ({ item, index }) => {
    return (
      <View style={styles.commentContainer}>
        <View>
          {item.sex == "male" ? (
            <View>        
              <SimpleLineIcons name="user" size={30} />
            </View>
            ) : (
              <SimpleLineIcons name="user-female" size={30}/>
          )}
        </View>
        <View style={{marginLeft:10}}>
          {/* <Text>{JSON.stringify({item})}</Text> */}
          <Text style={styles.nickname}>{item.nickname}</Text>
          <Text style={styles.commentText}>{item.comment}</Text>
          <View flexDirection='row'>
              <Text style={{fontSize:11,paddingTop:6,color:'gray'}}>{item.uploadTime}</Text>
              <TouchableOpacity style={{paddingTop:6, paddingLeft:10}}>
                <Text style={{fontSize:11, color:'gray'}}>댓글 달기</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  componentWillMount(){
    this.props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false
    });
  }

  render() {  
    const { route, navigation } = this.props;
    const { post } = route.params;
    
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        {post ? (
          <View style={{marginBottom:240}}>
            <View style={styles.postContainer}>
              <View>
                {post.sex == "male" ? (
                  <SimpleLineIcons name="user" size={30} />
                ) : (
                  <SimpleLineIcons name="user-female" size={30}/>
                )}
              </View>
              <View style={{paddingLeft:7}}>
                <Text style={styles.nickname}>{post.nickname}</Text>
                <Text style={styles.uploadTime}>{post.uploadTime}</Text>  
              </View>
            </View>
            <Text style={styles.postBody}>{post.contents}</Text>
            <UrDiaryItemFooter numOfLike={post.numOfLike} numOfComments={post.numOfComments}/>
            <GrayDivider/>

            {/* <Text>{JSON.stringify(this.state.data)}</Text>  */}
            <FlatList
              style={styles.commentsContainer}
              data={this.state.comments}
              renderItem={
                this._makeTodoItem
              }
              keyExtractor={({ uid }) => uid}/>
            <View style={{}}>
            <GrayDivider/>
            <View flexDirection="row">
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.commentInput}
                value={this.state.inputValue}
                style={styles.inputtext}
                placeholder={"댓글 작성하기"}
                maxLength={30}
                onChangeText={this._changeText}
                onEndEditing={this._addTodoItem}
                returnKeyType="done"/> 
            </View>
            <TouchableOpacity style={styles.inputButton}>
              <Text style={{color:"#a0a0a0"}}>작성</Text>
            </TouchableOpacity>
            </View>
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
          navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: true
          });
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

  },
  commentText:{
    fontSize:13,
    paddingTop: 3,
    paddingRight: 50,
  },
  uploadTime:{
    color: "gray"
  },
  commentsContainer: {
    paddingTop: 5,
  },
  commentContainer:{
    paddingLeft:15,
    paddingTop:15,
    flexDirection:"row",
  },
  commentInput:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3f4e6b',   
  },
  inputButton:{
    justifyContent: 'center', 
    alignItems:'flex-end', 
    fontWeight: "bold"
  },
  inputContainer:{
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#f0f0e0',   // 배경색으로 딱
    margin:10,
    paddingLeft:20,
    borderRadius: 18,
    width: width-70,
  },
});
