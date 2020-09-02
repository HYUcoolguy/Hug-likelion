import * as React from "react";
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View,
  LayoutAnimation,
  TouchableOpacity,
  ActivityIndicator,
  FlatList, } from "react-native";
import { Tab, Tabs } from "native-base";
import UrDiaryItem from "./UrDiaryItem"
import UrDiaryItemFooter from "./UrDiaryItemFooter"
import GrayDivider from "../GrayDivider"
import NullScreen from "../NullScreen";

export default class UrDiaryMainScreen extends React.Component{
  constructor() {
    super()
    
    this.state = { 
      data: [],
      isLoading: true,
      userRule: [
        {
          isExpanded:false,
          category_name:'피드 이용규칙',
          subcategory:[{ id: 1 },],
        },
      ],
      // 인기 게시물 : 좋아요&댓글 특정 이상인 게시물
      // 최근 게시물 : 최근 시간으로 정렬한 게시물
      posts: [  
        {
          userId:1,
          postId:1,
          nickname:"창고에서 날아가는 당나귀",
          sex:"male",
          uploadTime:"3시간 전", // YY-MM-DD/HH-MM-SS
          contents:"요즘 코로나가 다시 극성이네요 모두 다 같이 힘을 모아 이겨냅시다 아자아자!!",
          numOfLike:100,
          numOfComments: 100,
          comments:[
            { 
              userId: "1",
              sex: "male",
              uploadTime: "2주일 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "2주일 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "2주일 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "2주일 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "2주일 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "1주일 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "1주일 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "1주일 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "1주일 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "5일 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "5일 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "2일 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "1일 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "today",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "8시간 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "8시간 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "7시간 전",
              comment: "안녕하세요 안녕하세요 안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "7시간 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "5시간 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "3시간 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },{ 
              userId: "1",
              sex: "male",
              uploadTime: "2시간 전",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "1시간 전",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },
          ],
        },
        {
          userId:2,
          postId:2,
          nickname:"24시에 엄청난 고라니",
          sex:"female",
          uploadTime:"1일 전", // YY-MM-DD/HH-MM-SS
          contents:"술한잔 했다 보고싶다 잘지내냐",
          numOfLike:20,
          numOfComments: 200,
          isValid:true,
          comments:[
            { 
              userId: "3",
              sex: "male",
              uploadTime: "yesterday",
              comment: "hi3",
              nickname: "댓글1",
            },
            { 
              userId: "4",
              sex: "female",
              uploadTime: "today",
              comment: "hi4",
              nickname: "댓글2"
            },
          ],
        },
        {
          userId:2,
          postId:2,
          nickname:"태연하게 맥빠지는 호랑이",
          sex:"male",
          uploadTime:"2일 전", // YY-MM-DD/HH-MM-SS
          contents:"되게 쓸쓸하고 외로운 밤이네요 ㅜㅜ 오늘도 불면증에 시달리겠지...",
          numOfLike:20,
          numOfComments: 200,
          isValid:true,
          comments:[
            { 
              userId: "3",
              sex: "male",
              uploadTime: "yesterday",
              comment: "hi3",
              nickname: "댓글1",
            },
            { 
              userId: "4",
              sex: "female",
              uploadTime: "today",
              comment: "hi4",
              nickname: "댓글2"
            },
          ],
        },
        {
          userId:2,
          postId:2,
          nickname:"이유도 없이 창피한 고슴도치",
          sex:"female",
          uploadTime:"3일 전", // YY-MM-DD/HH-MM-SS
          contents:"목소리 좋고 노래 잘 부르고 말 이쁘게 하는 사람보면 반할거 같던데 다들 그렇지 않아요? 진짜 멋있어요",
          numOfLike:20,
          numOfComments: 200,
          isValid:true,
          comments:[
            { 
              userId: "3",
              sex: "male",
              uploadTime: "yesterday",
              comment: "hi3",
              nickname: "댓글1",
            },
            { 
              userId: "4",
              sex: "female",
              uploadTime: "today",
              comment: "hi4",
              nickname: "댓글2"
            },
          ],
        },
        {
          userId:2,
          postId:2,
          nickname:"미국에서 긴장하는 개똥벌레",
          sex:"male",
          uploadTime:"10일 전", // YY-MM-DD/HH-MM-SS
          contents:"오랜만에 들어왔는데 신기한거 많이 생겼네요 ",
          numOfLike:20,
          numOfComments: 200,
          isValid:true,
          comments:[
            { 
              userId: "3",
              sex: "male",
              uploadTime: "yesterday",
              comment: "hi3",
              nickname: "댓글1",
            },
            { 
              userId: "4",
              sex: "female",
              uploadTime: "today",
              comment: "hi4",
              nickname: "댓글2"
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    fetch('http://back-end.eba-4czmenr9.us-west-2.elasticbeanstalk.com/feed/')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: JSON.stringify(json) });
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
      <Tabs style={styles.tab} tabBarUnderlineStyle={{backgroundColor:'black'}}>
        <Tab heading='인기' 
          tabStyle={styles.tabText} 
          activeTabStyle={styles.tabText} 
          activeTextStyle={styles.tabText} 
          textStyle={styles.tabText}>
          <View>
            {this.state.userRule.map((item, key) => (
              <UserRule
                key={item.category_name}
                onClickFunction={this._updateLayout.bind(this, key)}
                item={item}
              />
            ))}
          </View>
          <FlatList
            data={this.state.posts}
            keyExtractor={({ uid }) => uid}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("UrDiaryDeatilScreen", {
                      post: item
                    });
                  }}>
                  <UrDiaryItem post={item}/>
                </TouchableOpacity> 
                <UrDiaryItemFooter numOfLike={item.numOfLike} numOfComments={item.numOfComments}/>
                <GrayDivider/>
              </View>
            )}
          />
          {/* <Text>{this.state.data}</Text> */}

        </Tab>
        <Tab heading='최신' 
          tabStyle={styles.tabText} 
          activeTabStyle={styles.tabText} 
          activeTextStyle={styles.tabText} 
          textStyle={styles.tabText}/>
      </Tabs>
      </SafeAreaView>
    );
  }

  _updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.userRule];
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false)
    );
    this.setState(() => {
      return {
        userRule: array,
      };
    });
  };
}

class UserRule extends React.Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
    this.state = {
      layoutHeight: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0,
        };
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }
 
  render() {
    return (
      <View>
        {/*Header of the Expandable List Item*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.ruleHeaderContainer}>
          <Text style={styles.ruleHeaderText}>피드 이용규칙</Text>
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: 'hidden',
          }}>
          {/*Content under the header of the Expandable List Item*/}
          {this.props.item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.ruleDetail}
              onPress={() => alert('배려하면서 살아요 :)')}>
              <Text style={styles.text}>
                배려하면서 살아요 :)
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flex:1,
    backgroundColor:'white', // 시간, 배터리 배경
  },
  tabText: {
    fontSize:15,
    fontWeight:'normal',
    backgroundColor:'white', // tab 배경
  },
  ruleHeaderContainer: {
    backgroundColor: '#f0f0e0',
    padding: 16,
  },
  ruleHeaderText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 10,
    paddingBottom: 10,
    color:'#a0a0a0',
  },
  ruleDetail: {
    paddingLeft: 10,
    backgroundColor: '#f0f0e0',
  },
});
