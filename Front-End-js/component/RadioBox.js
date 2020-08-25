import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default class ColorSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cheked: "여성",
      setChecked: "여성"
    };
  }

  render() {
    const { checked, setChecked } = this.state;
    return (
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.setState({ setChecked: "여성" })}
        >
          {setChecked === "여성" ? (
            <MaterialIcons name="check-box" size={20} />
          ) : (
            <MaterialIcons name="check-box-outline-blank" size={20} />
          )}
          <Text style={{ fontSize: 20, marginLeft: 15 }}>여성</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.setState({ setChecked: "남성" })}
        >
          {setChecked === "남성" ? (
            <MaterialIcons name="check-box" size={20} />
          ) : (
            <MaterialIcons name="check-box-outline-blank" size={20} />
          )}
          <Text style={{ fontSize: 20, marginLeft: 15 }}>남성</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.setState({ setChecked: "공개하지 않음" })}
        >
          {setChecked === "공개하지 않음" ? (
            <MaterialIcons name="check-box" size={20} />
          ) : (
            <MaterialIcons name="check-box-outline-blank" size={20} />
          )}
          <Text style={{ fontSize: 20, marginLeft: 15 }}>공개하지 않음</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  radioContainer: {
    marginBottom: 20
  }
});
