import * as React from "react";
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View,
  Image, 
  ActivityIndicator,
  FlatList, } from "react-native";
import { Tab, Tabs } from "native-base";
import FeedItem from './FeedItem';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class FeedMainScreen extends React.Component {
  constructor(props) {
    super(props);
    // https://i.ibb.co/m5KVYjf/image.png  
    this.state = {
      data: [],
      imageURL: "",
      isLoading: true,
      userId:"none",
      allPosts:[
      {
        title: "title1",
        horizontalPosts:[
          {
            "type": "photo",
            "thumnailURI": "https://i.ibb.co/m5KVYjf/image.png",
            "subtitle": "subtitle1",
            "numOfLike": "none",
            "numOfPlay": "none",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
          {
            "type": "photo",
            "thumnailURI": "https://i.ibb.co/m5KVYjf/image.png",
            "subtitle": "subtitle1",
            "numOfLike": "none",
            "numOfPlay": "none",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
          {
            "type": "photo",
            "thumnailURI": "https://i.ibb.co/m5KVYjf/image.png",
            "subtitle": "subtitle1",
            "numOfLike": "none",
            "numOfPlay": "none",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          }
        ]
      },
      {
        title: "title2",
        horizontalPosts:[
          {
            "type": "video",
            "thumnailURL": "",
            "videoURL": "",
            "subtitle": "subtitle1",
            "numOfLike": "none",
            "numOfPlay": "none",
            
          },
          {
            "type": "video",
            "thumnailURL": "",
            "videoURL": "",
            "subtitle": "subtitle2",
            "numOfLike": "none",
            "numOfPlay": "none",
          },
          {
            "type": "video",
            "thumnailURL": "",
            "videoURL": "",
            "subtitle": "subtitle3",
            "numOfLike": "none",
            "numOfPlay": "none",
          } 
        ]
      }
      ]
    }
  }
  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json.movies });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.tabContainer}>
      <Tabs style={styles.tab} tabBarUnderlineStyle={{backgroundColor:'black'}} >
        <Tab heading='추천' 
          tabStyle={styles.tabText} 
          activeTabStyle={styles.tabText} 
          activeTextStyle={styles.tabText} 
          textStyle={styles.tabText}>
          {/* fetch api 사용법 */}
          <View style={{ flex: 1, padding: 24 }}>
            {this.state.isLoading ? 
              <ActivityIndicator/> : (
              <FlatList
                data={this.state.data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                  <Text>{item.title}, {item.releaseYear}</Text>
                )}
              />
            )}
          </View>
          
          {/* 영상 썸네일, url, 제목, 부제목을 하나의 js로 뽑아서 Flatlist로 출력 */}
          <FlatList
            data={this.state.allPosts}
            // renderItem={this._makeFeedItem}
            renderItem = {
              ({ item }) => {
                return (
                  <View>
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <FlatList
                    data={item.horizontalPosts}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("FeedDetailScreen", {
                            post: item
                          });
                        }}>
                        <FeedItem post={item}/>
                      </TouchableOpacity>
                    )}
                    keyExtractor={( index ) => index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                )
              }
            }
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

  // renderItem에 함수 넣는법, key: navigation
  _makeFeedItem= ({ item }) => {
    return (
      <View>
      <Text style={styles.postTitle}>{item.title}</Text>
      <FlatList
        data={item.horizontalPosts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostDetailScreen", {
                posts: item
              });
            }}>
            <FeedItem post={item}/>
          </TouchableOpacity>
          
        )}
        keyExtractor={( index ) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    )
  }
};


const styles = StyleSheet.create({
    tabContainer: {
      flex:1,
      backgroundColor:'white', // 시간, 배터리 배경
    },
    tab: {
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

{/* <SectionList
  sections={this.state.posts}
  renderItem={this._makeFeedItem}
  renderSectionHeader={({ section }) => (
    <Text>{section.title}</Text>
  )}
  keyExtractor={(item, index) => index}
/> */}