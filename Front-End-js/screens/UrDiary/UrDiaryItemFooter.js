import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button, 
} from 'react-native';
import { EvilIcons, SimpleLineIcons, AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function UrDiaryItemFooter({numOfLike, numOfComments}) { 
  let [likeClicked, setLikeClicked] = useState(false);
  const [likeNums, setLikeNums] = useState(numOfLike);

  return ( 
    <View style={styles.postFooter}>
      <TouchableOpacity
        style = {{flexDirection:"row"}}
        onPress = {() => {
          likeClicked ? 
            setLikeNums(likeNums-1) :
            setLikeNums(likeNums+1) 
          likeClicked ? 
            setLikeClicked(likeClicked=false) :
            setLikeClicked(likeClicked=true) 
        }}>
        <AntDesign name={likeClicked?"like1":"like2"} size={20} style={{color:'gray'}}/>
        <Text style={{marginRight:30, color:'gray'}}>{likeNums}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {{flexDirection:"row"}}
        onPress={() => {
          // navigation.navigate("UrDiaryDeatilScreen", {
       
          // });
        }}>
        <EvilIcons name="comment" size={25} style={{color:'black'}}/>
        <Text style={{marginRight:30, color:'gray'}}>{numOfComments}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    postFooter:{
        flexDirection:"row",
        padding: 15,
        marginBottom: 3,
    },
});