import React from "react";
import { StyleSheet, Text, View } from "react-native";

function BetaMsg() {
  return (
    <View style={container}>
      <View style={betaCont}>
        <Text style={betaText}>Beta</Text>
      </View>
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
    betaCont: {
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
  { container, betaCont, betaText } = styles;
