import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { POMO_MODE, SHORT_MODE, LONG_MODE } from "../utils/consts.js";

function Options(props) {
  const {
      modeTime,
      setModeTime,
      setPomodoro,
      setShortBreak,
      setLongBreak,
      valueLongBreak,
      valueShortBreak,
      valuePomodoro,
      setIsActive,
    } = props,
    MODES = [
      {
        mode: POMO_MODE,
        name: POMO_MODE,
        id: 1,
      },
      {
        mode: SHORT_MODE,
        name: SHORT_MODE,
        id: 2,
      },
      {
        mode: LONG_MODE,
        name: LONG_MODE,
        id: 3,
      },
    ];

  function updateMode(mode) {
    setIsActive(false);
    switch (mode) {
      case POMO_MODE:
        setModeTime(mode);
        setPomodoro(valuePomodoro);
        break;
      case SHORT_MODE:
        setModeTime(mode);
        setShortBreak(valueShortBreak);
        break;
      case LONG_MODE:
        setModeTime(mode);
        setLongBreak(valueLongBreak);
        break;
    }
  }

  return (
    <View style={container}>
      {MODES.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => updateMode(item.mode)}
          style={[btn, item.mode === modeTime && btnSelected]}
        >
          <Text style={[text, item.mode === modeTime && textSelected]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Options;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-start",
      height: 150,
      flexDirection: "column-reverse",
    },
    btn: {
      width: 200,
      height: 50,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      shadowOpacity: 0.8,
      shadowColor: "#fff",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    btnSelected: {
      backgroundColor: "#100f13",
    },
    text: {
      color: "#9492a1",
      fontSize: 17,
      textTransform: "capitalize",
      width: "max-content",
      fontFamily: "monospace",
      letterSpacing: 1,
      paddingHorizontal: 10,
    },
    textSelected: {
      color: "#664EFF",
      fontSize: 19,
      fontWeight: "bold",
    },
  }),
  { container, btn, text, btnSelected, textSelected } = styles;
