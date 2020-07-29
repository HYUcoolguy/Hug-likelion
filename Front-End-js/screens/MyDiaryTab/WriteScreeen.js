import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ColorSelector from "../../component/ColorSelector";
import HashTagMaker2 from "../../component/HashTag";
import MultipleButton from "../../component/MultipleButton";

const { width, height } = Dimensions.get("window");

export default class WriteScreen extends React.Component {
  render() {
    const { navigation, route } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />

        <View style={styles.writeContainer}>
          <View style={styles.todayColor}>
            <Text>오늘 나의 색은?</Text>
          </View>
          {route.params ? (
            <ColorSelector color={route.params.data.dotColor} />
          ) : (
            <ColorSelector />
          )}
          {route.params ? (
            <MultipleButton
              button1={route.params.data.emotions1}
              button2={route.params.data.emotions2}
            />
          ) : (
            <MultipleButton />
          )}

          <View style={styles.writePart}>
            {route.params ? (
              <>
                <HashTagMaker2 hashes={route.params.data.hashes} />
                <TextInput
                  style={styles.diaryContentsContainer}
                  placeholder="오늘의 마음은 어떤가요?"
                  placeholderTextColor="gray"
                  multiline={true}
                  defaultValue={
                    route.params.data.content ? route.params.data.content : ""
                  }
                />
              </>
            ) : (
              <>
                <HashTagMaker2 />
                <TextInput
                  style={styles.diaryContentsContainer}
                  placeholder="오늘의 마음은 어떤가요?"
                  placeholderTextColor="gray"
                  multiline={true}
                />
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerBack}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="ios-arrow-back" size={25} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>나의 일기</Text>
      </View>
      <View style={styles.header_right}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 90
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    justifyContent: "space-between",
    paddingBottom: 10
  },
  headerBack: {
    flex: 1,
    marginLeft: 10
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25
  },
  header_right: {
    flex: 1,
    marginRight: 10
  },
  writeContainer: {
    margin: 15,
    padding: 20,
    height: height,
    backgroundColor: "#F0F8FF"
  },
  todayColor: {
    margin: 5,
    padding: 5
  },
  colorBox: {
    padding: 5,
    backgroundColor: "skyblue"
  },
  EmotionTable: {
    flexDirection: "row",
    backgroundColor: "#FAEBD7",
    padding: 5,
    margin: 5
  },
  detailEmotionTable: {
    backgroundColor: "#8FBC8F",
    padding: 5,
    margin: 5
  },
  writePart: {
    backgroundColor: "#C0C0C0",
    margin: 5,
    padding: 5,
    height: height
  },
  diaryContentsContainer: {
    padding: 20,
    paddingTop: 20
  }
});
