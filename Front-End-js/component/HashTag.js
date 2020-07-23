import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import TagInput from "react-native-tags-input";
import { Icon } from "react-native-elements";

const mainColor = "#FFF8DC";

export default class HashTagMaker2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: "",
        tagsArray: []
      },
      tagsColor: mainColor,
      tagsText: "black"
    };
  }

  updateTagState = (state) => {
    this.setState({
      tags: state
    });
  };

  render() {
    return (
      <TagInput
        updateState={this.updateTagState}
        tags={this.state.tags}
        placeholder="Tags..."
        label="Press comma & space to add a tag"
        labelStyle={{ color: "black" }}
        leftElement={
          <Icon
            name={"tag-multiple"}
            type={"material-community"}
            color={this.state.tagsText}
          />
        }
        leftElementContainerStyle={{ marginLeft: 3 }}
        containerStyle={{ width: Dimensions.get("window").width - 90 }}
        inputContainerStyle={[
          styles.textInput,
          { backgroundColor: this.state.tagsColor }
        ]}
        inputStyle={{ color: this.state.tagsText }}
        onBlur={() =>
          this.setState({ tagsColor: mainColor, tagsText: "black" })
        }
        autoCorrect={false}
        tagStyle={styles.tag}
        tagTextStyle={styles.tagText}
        keysForTag={", "}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColor
  },
  textInput: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3
  },
  tag: {
    backgroundColor: "#fff"
  },
  tagText: {
    color: "black"
  }
});
