import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions,
} from 'react-native';
import NullScreen from "../NullScreen"
import { Fontisto, EvilIcons, SimpleLineIcons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FeedItem({post}) { 
  const { width, height } = Dimensions.get('window')

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        {post.sex == "male" ? (
          <View>        
            <SimpleLineIcons name="user" size={30} />
          </View>
        ) : (
          <SimpleLineIcons name="user-female" size={30}/>
        )}
        <View>
          <Text style={styles.nickname}>{post.nickname}</Text>
          <Text style={styles.uploadTime}>{post.uploadTime}</Text>  
        </View>
        {/* <TouchableOpacity>
          <SimpleLineIcons name="options" style={{marginLeft:width-200}}/>
        </TouchableOpacity> */}
      </View> 
      <Text style={styles.postBody}>{post.contents}</Text>
      <View style={styles.postFooter}>
        <EvilIcons name="like" size={20} style={{color:'gray'}}/>
        <Text style={{marginRight:30, color:'gray'}}>{post.numOfLike}</Text>
        <EvilIcons name="comment" size={20} style={{color:'gray'}}/>
        <Text style={{color:'gray'}}>{post.comments.length}</Text>
      </View>
      </View>
  );
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    postContainer: {
      flex:1,
      padding:15,
      marginBottom: 3,
    },
    postHeader:{
      flexDirection:"row",
    },
    postFooter:{
      flexDirection:"row",
      paddingTop: 15,
    },
    postBody:{
      paddingTop: 10,
      fontSize: 15,
    },
    nickname: {
      marginLeft:7,
      fontWeight:"bold"
    },
    uploadTime:{
      paddingLeft: 7,
      color: "gray"
    },
});