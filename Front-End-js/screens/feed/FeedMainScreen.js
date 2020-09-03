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
      isLoading: false,
      randomMessage: [{
        msg:"당신은 세상에서 가장 소중한 사람입니다."}
      ],
      userId:"none",
      allPosts:[
      {
        title: "마음을 녹이는 사진",
        horizontalPosts:[
          {
            "type": "photo",
            "thumnailURI": "https://img.youtube.com/vi/EDsPY0d9s4E/mqdefault.jpg",
            "subtitle": "오늘따라 울적한 하루",
            "numOfLike": "numOfLike",
            "numOfPlay": "numOfPlay",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
          {
            "type": "photo",
            "thumnailURI": "https://img.youtube.com/vi/oQpQVNm8fs0/mqdefault.jpg",
            "subtitle": "작명센스 부족",
            "numOfLike": "none",
            "numOfPlay": "none",
            "imagesURI": [
              "https://img.youtube.com/vi/oQpQVNm8fs0/mqdefault.jpg",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
          {
            "type": "photo",
            "thumnailURI": "https://img.youtube.com/vi/uQm4KKe0SGE/mqdefault.jpg",
            "subtitle": "여름날 창문을 봤더니",
            "numOfLike": "none",
            "numOfPlay": "none",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
          {
            "type": "photo",
            "thumnailURI": "https://img.youtube.com/vi/EDsPY0d9s4E/mqdefault.jpg",
            "subtitle": "subtitle1",
            "numOfLike": "Li",
            "numOfPlay": "View",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
        ]
      },
      {
        title: "연예인들의 이야기",
        horizontalPosts:[
          {
            "type": "video",
            "thumnailURI": "https://img.youtube.com/vi/bZBTdmAVmT4/sddefault.jpg",
            "videoURI": "https://www.youtube.com/watch?v=bZBTdmAVmT4",
            "subtitle": "아이유가 후회했던 일들",
            "numOfLike": "none",
            "numOfPlay": "none",
            "videoId": "bZBTdmAVmT4",
          },
          {
            "type": "video",
            "thumnailURI": "https://img.youtube.com/vi/Rx18dyAOjeg/sddefault.jpg",
            "videoURI": "https://www.youtube.com/watch?v=Rx18dyAOjeg",
            "subtitle": "故 종현이 말하는 위로법",
            "numOfLike": "none",
            "numOfPlay": "none",
            "videoId": "bZBTdmAVmT4",
          },
          {
            "type": "video",
            "thumnailURI": "https://img.youtube.com/vi/ERul9QhSArs/sddefault.jpg",
            "videoURI": "https://www.youtube.com/watch?v=ERul9QhSArs",
            "subtitle": "2020년 백상예술대상 \n감동 소감",
            "numOfLike": "none",
            "numOfPlay": "none",
            "videoId": "bZBTdmAVmT4",
          } ,
          {
            "type": "video",
            "thumnailURI": "https://img.youtube.com/vi/bZBTdmAVmT4/sddefault.jpg",
            "videoURI": "https://www.youtube.com/watch?v=bZBTdmAVmT4",
            "subtitle": "subtitle1",
            "numOfLike": "none",
            "numOfPlay": "none",
            "videoId": "bZBTdmAVmT4",
          },
        ]
      },
      {
        title: "일반인들의 극복 영상",
        horizontalPosts:[
          {
            "type": "photo",
            "thumnailURI": "https://img.youtube.com/vi/EDsPY0d9s4E/mqdefault.jpg",
            "subtitle": "아이유가 후회했던 일들",
            "numOfLike": "1K",
            "numOfPlay": "1K",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
          {
            "type": "photo",
            "thumnailURI": "https://img.youtube.com/vi/oQpQVNm8fs0/mqdefault.jpg",
            "subtitle": "",
            "numOfLike": "none",
            "numOfPlay": "none",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          },
          {
            "type": "photo",
            "thumnailURI": "https://img.youtube.com/vi/uQm4KKe0SGE/mqdefault.jpg",
            "subtitle": "subtitle3",
            "numOfLike": "none",
            "numOfPlay": "none",
            "imagesURI": [
              "https://i.ibb.co/m5KVYjf/image.png",
              "https://i.ibb.co/m5KVYjf/image.png"
            ],
          }
        ]
      },
      ]
    }
  }
  // componentWillMount() {
  //   fetch('https://reactnative.dev/movies.json')
  //       .then((response) => response.json())
  //       .then((json) => {
  //         this.setState({ randomMessage: json.movies });
  //       })
  //       .catch((error) => console.error(error))
  //       .finally(() => {
  //         this.setState({ isLoading: false });
  //       });
  // }
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
          <View style={{backgroundColor:'#e0e0f0', height:70,alignItems:'center', justifyContent:'center' }}>
            {/* {this.state.isLoading ? 
              <ActivityIndicator/> : (
              <FlatList
                data={this.state.randomMessage}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                  <Text style={{fontSize:20,color:'black'}}>{item.msg}</Text>
                )}
              />
            )} */}
            <Text style={{fontSize:20,color:'white',fontWeight:'bold', }}>당신은 가장 소중한 사람입니다.</Text>
          </View>
          
          {/* 영상 썸네일, url, 제목, 부제목을 하나의 js로 뽑아서 Flatlist로 출력 */}
          <FlatList
            data={this.state.allPosts}
            // renderItem={this._makeFeedItem}
            renderItem = {
              ({ item }) => {
                return (
                  <View style={{marginTop:10}}>
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
      fontSize:17,
      fontWeight:'bold',
      color:'gray',
      marginLeft:10,
      marginTop:10,
      paddingLeft:3,
    },
  });
