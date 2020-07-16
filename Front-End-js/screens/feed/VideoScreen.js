import * as React from "react";
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View,
  ScrollView,
  SectionList, 
  FlatList,
  unstable_enableLogBox } from "react-native";
import { Container, Tab, Tabs } from "native-base";
import PostItem from './post_item';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // data loading
    // 여러 속성들을 가지고 있는 객체들의 배열에 저장
    this.state = {
      userId:"none",
      posts:[
      {
        title: "title1",
        horizontalPosts:[
          {
            "imageURL": "none",
            "subtitle": "subtitle1",
            "numOfLike": "none",
            "numOfPlay": "none",
          },
          {
            "imageURL": "none",
            "subtitle": "subtitle2",
            "numOfLike": "none",
            "numOfPlay": "none",
          },
          {
            "imageURL": "none",
            "subtitle": "subtitle3",
            "numOfLike": "none",
            "numOfPlay": "none",  
          }
        ]
      },
      {
        title: "title2",
        horizontalPosts:[
          {
            "imageURL": "none",
            "subtitle": "subtitle1",
            "numOfLike": "none",
            "numOfPlay": "none",
          },
          {
            "imageURL": "none",
            "subtitle": "subtitle2",
            "numOfLike": "none",
            "numOfPlay": "none",
          },
          {
            "imageURL": "none",
            "subtitle": "subtitle3",
            "numOfLike": "none",
            "numOfPlay": "none",
          } 
        ]
      }
      ]
    }
    
  }
  render() {
    return (
        <SafeAreaView style={styles.tabContainer}>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'black'}} >
          <Tab heading='추천' 
                tabStyle={styles.tabText} 
                activeTabStyle={styles.tabText} 
                activeTextStyle={styles.tabText} 
                textStyle={styles.tabText}>
            {/* 영상 썸네일, url, 제목, 부제목을 하나의 js로 뽑아서 Flatlist로 출력 */}
            {/* <SectionList
              sections={this.state.posts}
              renderItem={this._makePostItem}
              renderSectionHeader={({ section }) => (
                <Text>{section.title}</Text>
              )}
              keyExtractor={(item, index) => index}
            /> */}
            <FlatList
                data={this.state.posts}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    <FlatList
                        data={item.horizontalPosts}
                        renderItem={this._makePostItem}
                        keyExtractor={(item, index) => index}
                        horizontal={true}
                    />
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
          </Tab>
          <Tab heading='구독' 
                tabStyle={styles.tabText} 
                activeTabStyle={styles.tabText} 
                activeTextStyle={styles.tabText} 
                textStyle={styles.tabText}/>
        </Tabs>
        </SafeAreaView>
    );
  }

  _makePostItem= ({ item, index }) => {
    return (
      <PostItem post={item}/>
    )
  }
};


const styles = StyleSheet.create({
    tabContainer: {
      flex:1,
      backgroundColor:'white', // 시간, 배터리 배경
    },
    tabText: {
      fontSize:20,
      fontWeight:'normal',
      backgroundColor:'white', // tab 배경
    },
    postTitle: {
      fontSize:15,
      color:'#000',
      marginLeft:10,
      marginTop:10,
    },
  });