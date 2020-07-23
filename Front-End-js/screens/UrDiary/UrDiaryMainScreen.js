import * as React from "react";
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View,
  ScrollView,
  ActivityIndicator,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  Platform,
  FlatList, } from "react-native";
import { Tab, Tabs } from "native-base";

export default class UrDiaryMainScreen extends React.Component{
  constructor() {
    super()
    this.state = { userRule: CONTENT };
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.tabContainer}>
      <Tabs style={styles.tab} tabBarUnderlineStyle={{backgroundColor:'black'}} >
        <Tab heading='인기' 
          tabStyle={styles.tabText} 
          activeTabStyle={styles.tabText} 
          activeTextStyle={styles.tabText} 
          textStyle={styles.tabText}>
          <View style={styles.userRule}>

            <View>
              {this.state.userRule.map((item, key) => (
                <ExpandableItemComponent
                  key={item.category_name}
                  onClickFunction={this._updateLayout.bind(this, key)}
                  item={item}
                />
              ))}
            </View>  
          
          </View>
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

class ExpandableItemComponent extends React.Component {
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
          style={styles.header}>
          <Text style={styles.headerText}>피드 이용규칙</Text>
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
              style={styles.content}
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

const CONTENT = [
  {
    isExpanded: false,
    category_name: '피드 이용규칙',
    subcategory: [{ id: 1 },],
  },
];

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
  userRule: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#cccccc',
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#cccccc',
  },
});
