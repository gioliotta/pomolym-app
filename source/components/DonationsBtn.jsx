import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { confirmationAlert } from "../utils/commonFunctions.js";
import { MaterialIcons } from "@expo/vector-icons";

function DonationsBtn() {
  return (
    <View style={container}>
      <TouchableOpacity
        style={btn}
        onPress={() =>
          confirmationAlert(
            "$87.43 USD was transferred from your account to Staff Lym"
          )
        }
      >
        <Text style={text}>Donations</Text>
        <MaterialIcons name="attach-money" size={22} color="#9492a1" />
      </TouchableOpacity>
    </View>
  );
}

export default DonationsBtn;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    btn: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      width: 140,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      columnGap: 4,
    },
    text: {
      color: "#9492a1",
      fontFamily: "monospace",
      fontSize: 15,
      fontStyle: "italic",
    },
  }),
  { container, btn, text } = styles;
