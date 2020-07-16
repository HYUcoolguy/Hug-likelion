import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function PostItem({post}) {
  return (
    <View style={styles.itemcontainer}>
      <View
      style={{
        height: 200,
        width: 150,
        backgroundColor: "gold",
      }}/>
      <Text style>{post.subtitle}</Text>  
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
    }
});