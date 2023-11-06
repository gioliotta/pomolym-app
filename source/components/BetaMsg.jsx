import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function BetaMsg() {
  function onPressBetaBtn() {
    Alert.alert(
      "PomoLym",
      "The application is in beta. It may contain errors or functions that do not execute correctly. If you encounter any problems, please report to: gioliotta.io@gmail.com"
    );
  }

  return (
    <View style={container}>
      <TouchableOpacity style={btn} onPress={onPressBetaBtn}>
        <Text style={betaText}>Beta</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BetaMsg;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    btn: {
      width: 100,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderColor: "#9492a1",
      borderWidth: 0.5,
      borderRightWidth: 0,
      backgroundColor: "#100f13",
    },
    betaText: {
      color: "#9492a1",
      textTransform: "uppercase",
      fontSize: 14,
      textAlign: "center",
      fontWeight: "bold",
      width: "100%",
      letterSpacing: 1,
      paddingVertical: 8,
      alignSelf: "flex-end",
      borderColor: "#9492a1",
    },
  }),
  { container, btn, betaText } = styles;
