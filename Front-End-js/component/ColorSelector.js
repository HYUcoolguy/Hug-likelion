import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { ColorPicker } from "react-native-status-color-picker";
import { color } from "react-native-reanimated";

export default class ColorSelector extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.color !== undefined) {
      this.state = {
        colors: ["#F44336", "#9C27B0", "#3F51B5", "#FFEB3B", "#9E9E9E"],
        selectedColor: this.props.color
      };
    } else {
      this.state = {
        colors: ["#F44336", "#9C27B0", "#3F51B5", "#FFEB3B", "#9E9E9E"],
        selectedColor: "#F44336"
      };
    }
  }

  onSelect = (color) => this.setState({ selectedColor: color });

  render() {
    return (
      <View style={styles.container}>
        <ColorPicker
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          onSelect={this.onSelect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});
