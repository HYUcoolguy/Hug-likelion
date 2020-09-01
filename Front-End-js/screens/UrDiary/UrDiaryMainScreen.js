import * as React from "react";
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View,
  LayoutAnimation,
  TouchableOpacity,
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
          nickname:"나는야코딩왕",
          sex:"male",
          uploadTime:"3시간 전", // YY-MM-DD/HH-MM-SS
          contents:"what do you do for fun?",
          numOfLike:100,
          numOfComments: 100,
          comments:[
            { 
              userId: "1",
              sex: "male",
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
              comment: "안녕하세요 안녕하세요 안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
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
              uploadTime: "yesterday",
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
              uploadTime: "yesterday",
              comment: "안녕하세요 반갑습니다 안녕히가세요 감사합니다 오랜만이네요",
              nickname: "세상은아름답다",
            },
            { 
              userId: "2",
              sex: "female",
              uploadTime: "today",
              comment: "hi2",
              nickname: "오늘뭐먹지",
            },
          ],
        },
        {
          userId:2,
          postId:2,
          nickname:"멋쟁이사자처럼",
          sex:"female",
          uploadTime:"2020-07-29/12-10-10", // YY-MM-DD/HH-MM-SS
          contents:"how's it going?",
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

  // shouldComponentUpdate() {
  //   this.props.navigation.dangerouslyGetParent().setOptions({
  //     tabBarVisible: true
  //   });
  // }

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
              onPress={() => alert('Id: ' + item.id)}>
              <Text style={styles.text}>
                {key}. {item.val}
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
    backgroundColor: '#dddddd',
    padding: 16,
  },
  ruleHeaderText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  ruleDetail: {
    paddingLeft: 10,
    backgroundColor: '#dddddd',
  },
});
