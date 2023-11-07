import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function OptionConfig(props) {
  const { textContent, onPressAction, icon } = props;

  return (
    <TouchableOpacity style={container} onPress={onPressAction}>
      <Text style={text}>{textContent}</Text>
      {icon}
    </TouchableOpacity>
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
      borderBottomWidth: 0.8,
      borderColor: "#8d8d8d",
    },

    text: {
      color: "#fff",
      fontSize: 20,
    },
  }),
  { container, text } = styles;
