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
      // 나의 게시물 : 나의 userId와 일치한 게시물
      posts: [  
        {
          userId:1,
          nickname:"나는야코딩왕",
          sex:"male",
          uploadTime:"2020-07-30/12-10-10", // YY-MM-DD/HH-MM-SS
          contents:"what do you do for fun?",
          numOfLike:100,
          comments:["hi1","hi2","hello1","hello2"],
          isValid:true,
        },
        {
          userId:2,
          nickname:"멋쟁이사자처럼",
          sex:"female",
          uploadTime:"2020-07-29/12-10-10", // YY-MM-DD/HH-MM-SS
          contents:"how's it going?",
          numOfLike:20,
          comments:["hi3","hi4"],
          isValid:true,
        },
      ],
    };
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
            <View>
              {this.state.userRule.map((item, key) => (
                <UserRule
                  key={item.category_name}
                  onClickFunction={this._updateLayout.bind(this, key)}
                  item={item}
                />
              ))}
            </View>
          </View>
          <FlatList
              data={this.state.posts}
              keyExtractor={({ uid }) => uid}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("UrDiaryDeatilScreen", {
                      post: item
                    });
                  }}>
                  <UrDiaryItem post={item}/>
                </TouchableOpacity> 
              )}
            />
        </Tab>
        <Tab heading='최신' 
              tabStyle={styles.tabText} 
              activeTabStyle={styles.tabText} 
              activeTextStyle={styles.tabText} 
              textStyle={styles.tabText}/>
        <Tab heading='내 글' 
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
