import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
        console.log("this.state.data");
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <View style={styles.Container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.DiaryThumbnail}>
                  <Text>{item.title}</Text>
                  <Text>{item.releaseYear}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 2
  },
  gridContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 2
  },
  DiaryThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    backgroundColor: "#F0F8FF"
  }
});
