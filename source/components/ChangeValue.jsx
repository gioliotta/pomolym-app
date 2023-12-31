import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LONG_MODE, POMO_MODE, SHORT_MODE } from "../utils/consts.js";
import { confirmationAlert } from "../utils/commonFunctions.js";

function ChangeValue(props) {
  const { textContent, setChangeValue, isSaving } = props,
    [inputValue, setInputValue] = useState(""),
    checkTextContent =
      textContent === POMO_MODE ||
      textContent === SHORT_MODE ||
      textContent === LONG_MODE;

  useEffect(() => {
    if (inputValue === Number(inputValue) && isSaving) {
      setChangeValue(inputValue * 60);
      saveStoreData();
    }

    if (inputValue !== Number(inputValue) && inputValue !== "") {
      setInputValue("");
      confirmationAlert("Only numbers are allowed");
    }
  }, [inputValue, isSaving]);

  async function saveStoreData() {
    if (checkTextContent) {
      await AsyncStorage.setItem(textContent, JSON.stringify(inputValue * 60));
    }
  }

  return (
    <View style={container}>
      <Text style={text}>{textContent}</Text>

      <TextInput
        style={input}
        value={inputValue.toString()}
        placeholder="time in minutes"
        placeholderTextColor="#d1d1d1"
        keyboardType="numeric"
        onChangeText={num => setInputValue(Number(num))}
        width={130}
        height={40}
      />
    </View>
  );
}

export default ChangeValue;

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
    input: {
      textAlign: "center",
      color: "#fff",
      borderWidth: 1,
      borderColor: "#664EFF",
      borderRadius: 10,
      fontSize: 14,
    },
    text: {
      color: "#fff",
      fontSize: 20,
    },
  }),
  { container, input, text } = styles;
