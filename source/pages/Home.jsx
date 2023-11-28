import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import { Audio } from "expo-av";
import Options from "../components/Options.jsx";
import Time from "../components/Time.jsx";
import Play from "../components/Play.jsx";
import BetaMsg from "../components/BetaMsg.jsx";
import SettingsIcon from "../components/SettingsIcon.jsx";
import { POMO_MODE, SHORT_MODE, LONG_MODE } from "../utils/consts.js";

function Home(props) {
  const {
      sounds,
      setThisPage,
      timeIsActive,
      setTimeIsActive,
      valuePomodoro,
      valueShortBreak,
      valueLongBreak,
    } = props,
    [pomodoro, setPomodoro] = useState(valuePomodoro),
    [shortBreak, setShortBreak] = useState(valueShortBreak),
    [longBreak, setLongBreak] = useState(valueLongBreak),
    [modeTime, setModeTime] = useState(POMO_MODE);

  useEffect(() => {
    let intervalTimer = null,
      intervalDuration = 0;
    switch (modeTime) {
      case POMO_MODE:
        intervalDuration = pomodoro;
        break;
      case SHORT_MODE:
        intervalDuration = shortBreak;
        break;
      case LONG_MODE:
        intervalDuration = longBreak;
        break;
    }

    if (timeIsActive && intervalDuration > 0) {
      intervalTimer = setInterval(() => {
        switch (modeTime) {
          case POMO_MODE:
            setPomodoro(pomodoro - 1);
            break;
          case SHORT_MODE:
            setShortBreak(shortBreak - 1);
            break;
          case LONG_MODE:
            setLongBreak(longBreak - 1);
            break;
        }
      }, 1000);
    } else {
      clearInterval(intervalTimer);
    }

    if (intervalDuration === 0) {
      async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/finish.mp3")
        );
        await sound.playAsync();
      }

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

      setIsActive(false);
      sounds && playSound();
    }

    return () => clearInterval(intervalTimer);
  }, [pomodoro, shortBreak, longBreak, timeIsActive, modeTime]);

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SettingsIcon setThisPage={setThisPage} />
      <View style={contTimer}>
        <Options
          modeTime={modeTime}
          setModeTime={setModeTime}
          setPomodoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
          valuePomodoro={valuePomodoro}
          valueShortBreak={valueShortBreak}
          valueLongBreak={valueLongBreak}
          setTimeIsActive={setTimeIsActive}
        />
        <Time
          pomodoro={pomodoro}
          shortBreak={shortBreak}
          longBreak={longBreak}
          modeTime={modeTime}
        />
        <Play
          timeIsActive={timeIsActive}
          setTimeIsActive={setTimeIsActive}
          setPomodoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
          sounds={sounds}
          modeTime={modeTime}
          valuePomodoro={valuePomodoro}
          valueShortBreak={valueShortBreak}
          valueLongBreak={valueLongBreak}
        />
      </View>
      <BetaMsg />
    </SafeAreaView>
  );
}

export default Home;

const style = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#000",
      paddingVertical: 40,
    },
    contTimer: {
      width: "100%",
      height: 550,
      alignItems: "center",
      justifyContent: "space-between",
    },
  }),
  { container, contTimer } = style;
