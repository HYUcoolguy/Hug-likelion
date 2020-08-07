import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import GrayDivider from "../GrayDivider"
import UrDiaryItem from "./UrDiaryItem"
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons"
import NullScreen from "../NullScreen"
import { ScrollView } from "react-native-gesture-handler";

export default function UrDiaryComment({comments}) {
  return (
      <ScrollView style={styles.commentsContainer}>
        <FlatList 
            data={comments}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                <View style={styles.commentContainer}>
                    <View>
                        {item.sex == "male" ? (
                            <View>        
                                <SimpleLineIcons name="user" size={30} />
                            </View>
                            ) : (
                            <   SimpleLineIcons name="user-female" size={30}/>
                            )}
                    </View>
                    <View>
                        <Text style={styles.nickname}>{item.nickname}</Text>
                        <Text style={styles.commentText}>{item.comment}</Text>
                    </View>
                </View>
            )}
        />
      </ScrollView>        
  );
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    commentsContainer:{
        marginBottom:250,
    },
    commentContainer:{
        paddingLeft:15,
        paddingTop:20,
        flexDirection:"row"
    },
    nickname: {
        marginLeft:7,
    },
    commentText:{
        marginLeft:7,
        fontSize:15,
        paddingRight: 50,
    }
})