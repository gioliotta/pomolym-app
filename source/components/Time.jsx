import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { POMO_MODE, LONG_MODE, SHORT_MODE } from "../utils/consts.js";

function Time(props) {
  const { pomodoro, shortBreak, longBreak, modeTime } = props;

  const verifymodeTime = () =>
    modeTime === POMO_MODE
      ? pomodoro
      : modeTime === SHORT_MODE
      ? shortBreak
      : modeTime === LONG_MODE
      ? longBreak
      : pomodoro;

  const FormattedTime = () => (
    <>
      <Text style={text}>
        {Math.floor(verifymodeTime() / 60)
          .toString()
          .padStart(2, 0)}
      </Text>
      <Text style={points}>:</Text>
      <Text style={text}>
        {(verifymodeTime() % 60).toString().padStart(2, 0)}
      </Text>
    </>
  );

  return (
    <View style={container}>
      <FormattedTime />
    </View>
  );
}

export default Time;

const styles = StyleSheet.create({
    container: {
      width: "max-content",
      height: "auto",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#9492a1",
      shadowOpacity: 0.8,
    },
    text: {
      color: "#664EFF",
      fontSize: 90,
      fontWeight: "semibold",
      fontFamily: "monospace",
    },
    points: {
      color: "#9492a1",
      fontSize: 90,
      fontWeight: "semibold",
      fontFamily: "monospace",
    },
  }),
  { container, text, points } = styles;
