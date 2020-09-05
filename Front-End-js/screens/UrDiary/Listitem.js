import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons"

export default function Header({name, isComplete, changeComplete, deleteItem}) {
  return (
    <View style={styles.itemcontainer}>
      <Text style={styles.itemtext}>{name}</Text>
      <TouchableOpacity
        onPress={deleteItem}>
        <AntDesign name="close" size={20}/>
      </TouchableOpacity>
    </View>
  );
}

// <View style={styles.commentContainer}>
//   <View>
//     {item.sex == "male" ? (
//       <View>        
//         <SimpleLineIcons name="user" size={30} />
//       </View>
//       ) : (
//         <SimpleLineIcons name="user-female" size={30}/>
//     )}
//   </View>
//   <View>
//     <Text style={styles.nickname}>{item.nickname}</Text>
//     <Text style={styles.commentText}>{item.comment}</Text>
//   </View>
// </View>

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    itemtext: {
        fontSize : 15,
        fontWeight : "bold",
        color : '#3f4e6b',
        paddingBottom:10,
    },
    itemcontainer:{
      marginLeft:30,
      marginTop:10,
      width:width-60,
      flexDirection:"row",
      justifyContent:"space-between", 
      borderBottomWidth:1,
    },
    torow:{
      flexDirection:"row",
    },
    checkiconposition:{
      marginRight:10,
    }
});