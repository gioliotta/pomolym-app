import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function OptionConfig(props) {
  const { textContent, onPressAction, icon } = props;

  return (
    <View style={container}>
      <Text style={text}>{textContent}</Text>
      <TouchableOpacity style={btn} onPress={onPressAction}>
        {icon}
      </TouchableOpacity>
    </View>
  );
}

export default OptionConfig;

const styles = StyleSheet.create({
    container: {
      width: "80%",
      height: 70,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    btn: {
      // alignSelf: "flex-end",
    },
    text: {
      color: "#9492a1",
      fontSize: 19,
    },
  }),
  { container, btn, text } = styles;
