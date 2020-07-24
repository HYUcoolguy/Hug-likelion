import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Tags from "react-native-tags";
//react-native-tags-input로 파일 만들어서
export default class HashTagMaker1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }

  render() {
    return (
      <Tags
        initialTags={["오늘의 기분"]}
        style={styles.diaryHashContainer}
        inputStyle={{ backgroundColor: "white" }}
        maxNumberOfTags={8}
        onChangeTags={(tagUpdate) => {
          console.log(tagUpdate);
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  diaryHashContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 20,
    marginRight: 20
  }
});
