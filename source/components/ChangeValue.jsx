import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";

function ChangeValue(props) {
  const { textContent, setChangeValue, isSaving } = props,
    [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue === Number(inputValue)) {
      if (isSaving) {
        setChangeValue(inputValue * 60);
      }
    }

    if (inputValue !== Number(inputValue) && inputValue !== "") {
      setInputValue("");
      Alert.alert("Only numbers are allowed.");
    }
  }, [inputValue, isSaving]);

  return (
    <View style={container}>
      <Text style={text}>{textContent}</Text>

      <TextInput
        style={input}
        value={inputValue.toString()}
        placeholder="enter the time"
        placeholderTextColor="#000"
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
      backgroundColor: "#9492a1",
      borderRadius: 10,
      textAlign: "center",
      fontSize: 16,
    },
    text: {
      color: "#9492a1",
      fontSize: 19,
    },
  }),
  { container, input, text } = styles;
