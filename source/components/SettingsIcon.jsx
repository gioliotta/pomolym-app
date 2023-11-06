import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { CONFIG_PAGE } from "../utils/consts.js";
import { AntDesign as Icon } from "@expo/vector-icons";

function SettingsIcon({ setThisPage }) {
  return (
    <View style={container}>
      <TouchableOpacity style={btn} onPress={() => setThisPage(CONFIG_PAGE)}>
        <Icon name="setting" size={28} color="#9492a1" />
      </TouchableOpacity>
    </View>
  );
}

export default SettingsIcon;

const styles = StyleSheet.create({
    container: {
      width: "100%",
    },
    btn: {
      alignSelf: "flex-end",
      paddingRight: 10,
    },
  }),
  { container, btn } = styles;
