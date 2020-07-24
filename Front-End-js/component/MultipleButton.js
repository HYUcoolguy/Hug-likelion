import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";

export default class MultipleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex1: [],
      selectedIndex2: []
    };
    this.updateIndex1 = this.updateIndex1.bind(this);
    this.updateIndex2 = this.updateIndex2.bind(this);
  }

  updateIndex1(selectedIndex) {
    this.setState({ selectedIndex1: selectedIndex });
  }
  updateIndex2(selectedIndex) {
    this.setState({ selectedIndex2: selectedIndex });
  }
  render() {
    const buttons1 = ["불편", "상처", "실망", "죄책감", "중압감"];
    const buttons2 = ["두려움", "분노", "좌절", "무기력", "외로움"];
    const { selectedIndex1, selectedIndex2 } = this.state;
    // console.log(selectedIndex1.map((index) => buttons1[index]));
    // console.log(selectedIndex2.amp((index) => buttons2[index]))
    return (
      <View>
        <ButtonGroup
          onPress={this.updateIndex1}
          selectedIndexes={selectedIndex1}
          buttons={buttons1}
          containerStyle={{ height: 30 }}
          selectMultiple={true}
        />
        <ButtonGroup
          onPress={this.updateIndex2}
          selectedIndexes={selectedIndex2}
          buttons={buttons2}
          containerStyle={{ height: 30 }}
          selectMultiple={true}
        />
      </View>
    );
  }
}
