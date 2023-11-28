import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LONG_MODE, POMO_MODE, SHORT_MODE } from "../utils/consts.js";
import {
  FontAwesome5 as PlayIcon,
  AntDesign as ReloadIcon,
} from "@expo/vector-icons";

function Play(props) {
  const {
    timeIsActive,
    setTimeIsActive,
    modeTime,
    setPomodoro,
    setShortBreak,
    setLongBreak,
    valuePomodoro,
    valueShortBreak,
    valueLongBreak,
  } = props;

  function handlePlay() {
    timeIsActive ? setTimeIsActive(false) : setTimeIsActive(true);
  }

  function handleReload() {
    switch (modeTime) {
      case POMO_MODE:
        setPomodoro(valuePomodoro);
        break;
      case SHORT_MODE:
        setShortBreak(valueShortBreak);
        break;
      case LONG_MODE:
        setLongBreak(valueLongBreak);
        break;
    }
    setTimeIsActive(false);
  }

  return (
    <View style={container}>
      <TouchableOpacity onPress={handlePlay} style={btn}>
        <PlayIcon
          name={timeIsActive ? "pause" : "play"}
          size={50}
          color="#664EFF"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleReload} style={btn}>
        <ReloadIcon name="reload1" size={50} color="#9492a1" />
      </TouchableOpacity>
    </View>
  );
}

export default Play;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "center",
      rowGap: 13,
    },
    btn: {
      width: 130,
      height: 80,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
      backgroundColor: "#100f13",
      borderRadius: 10,
    },
  }),
  { container, btn } = styles;
