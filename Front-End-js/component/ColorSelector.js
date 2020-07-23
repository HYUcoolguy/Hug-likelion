import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import { ColorPicker } from "react-native-status-color-picker";

export default class ColorSelector extends React.Component {
  state = {
    colors: [
      "#F44336",
      "#9C27B0",
      "#3F51B5",
      "#2196F3",
      "#009688",
      "#4CAF50",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#795548",
      "#9E9E9E",
      "#607D8B"
    ],
    selectedColor: "#F44336"
  };

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
