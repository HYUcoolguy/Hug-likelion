import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  Image
} from 'react-native';

export default function PostItem({post}) { 
  return (
    <View style={styles.itemcontainer}>
      <Image 
        source= {{
          uri: post.thumnailURI,
        }}
        style={styles.thumnail}
      />
      <Text>{post.subtitle}</Text> 
      <Text>{post.numOfLike} {post.numOfPlay}</Text>
      
    </View>
  );
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    subtitleText: {
      fontSize:15,
      fontWeight :"bold",
      color:'#000',
      paddingBottom:10,
    },
    itemcontainer: {
      flex:1,
      marginLeft:10,
      marginTop:5,
    },
    thumnail: {
      height: 200,
      width: 150,
    }
});