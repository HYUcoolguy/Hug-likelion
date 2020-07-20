import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TagInput from "react-native-tag-input";

export default class HashTagMaker extends React.Component {
  state = {
    emails: [],
    text: ""
  };
  render() {
    return (
      <TagInput
        value={this.state.emails}
        onChange={(emails) => this.setState({ emails })}
        labelExtractor={(email) => email}
        text={this.state.text}
        onChangeText={(text) => this.setState({ text })}
      />
    );
  }
}
