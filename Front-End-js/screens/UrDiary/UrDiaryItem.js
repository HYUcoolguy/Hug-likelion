import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions,
} from 'react-native';
import { SimpleLineIcons } from "@expo/vector-icons"
import NullScreen from "../NullScreen"

export default function UrDiaryItem({post}) { 
  // const { width, height } = Dimensions.get('window')
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
    </View>
  );
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    postContainer: {
      flex:1,
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      marginBottom: 3,
    },
    postHeader:{
      flexDirection:"row",
    },
    postBody:{
      paddingTop: 10,
      fontSize: 15,
    },
    nickname: {
      marginLeft:7,
      // fontWeight:"bold"
    },
    uploadTime:{
      fontSize:11,
      paddingLeft: 7,
      color: "gray"
    },
});