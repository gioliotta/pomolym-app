import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Load() {
  return (
    <View style={container}>
      <Text style={text}>Loading...</Text>
    </View>
  );
}

export default Load;

const styles = StyleSheet.create({
    container: {
      minHeight: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
    },
    text: {
      color: "#fff",
      fontSize: 30,
    },
  }),
  { container, text } = styles;
