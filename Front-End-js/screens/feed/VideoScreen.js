import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Container, Tab, Tabs } from "native-base";

export default function VideoScreen() {
  return (
    <Container>
      <Tabs style={styles.tabContainer} 
          tabBarUnderlineStyle={{backgroundColor:'black'}}>
        <Tab heading='추천' activeTextStyle={styles.tabActive} textStyle={styles.tabActive}>
          <ScrollView style={styles.scrollView} horizontal={true}>
            <Text style={styles.text}>
              Title1 
            </Text>
          </ScrollView>
          <ScrollView style={styles.scrollView} horizontal={true}>
            <Text style={styles.text}>
              Title2
            </Text>
          </ScrollView>
        </Tab>
        <Tab heading='구독' activeTextStyle={styles.tabActive} textStyle={styles.tabActive}/>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
    tabContainer: {
      flex: 1,
      marginTop: 40,
    },
    scrollView: {
      backgroundColor: 'pink',
    },
    tabActive: {
      color: '#000', 
      fontSize: 20,
      fontWeight: 'normal',
    }
  });