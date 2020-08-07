import * as React from "react";

import {
  View,
  Dimensions,
} from "react-native";

export default function UrDiaryComments({comments}) {
    const { width, height } = Dimensions.get('window')
    return (
        <View style={{
            backgroundColor:'#d3d3d3',
            width: width,
            height: 1,
        }}/>
    );
}
