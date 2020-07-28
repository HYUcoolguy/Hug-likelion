import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";

export default class MultipleButton extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    if (this.props.button1 !== undefined || this.props.button2 !== undefined) {
      const { button1, button2 } = this.props;
      const emotion1_2_number = {
        불편: 0,
        상처: 1,
        실망: 2,
        죄책감: 3,
        중압감: 4
      };
      const emotion2_2_number = {
        두려움: 0,
        분노: 1,
        좌절: 2,
        무기력: 3,
        외로움: 4
      };
      console.log(button1);
      console.log(
        button1.map((emotion) => {
          emotion1_2_number["상처"];
        })
      );
    }
  }
  render() {
    const { selectedIndex1, selectedIndex2 } = this.state;

    const buttons1 = ["불편", "상처", "실망", "죄책감", "중압감"];
    const buttons2 = ["두려움", "분노", "좌절", "무기력", "외로움"];

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
