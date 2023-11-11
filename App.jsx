import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./source/pages/Home.jsx";
import Configuration from "./source/pages/Configuration.jsx";
import Load from "./source/components/Load.jsx";
import {
  HOME_PAGE,
  CONFIG_PAGE,
  POMO_MODE,
  SHORT_MODE,
  LONG_MODE,
} from "./source/utils/consts.js";

function App() {
  const initialPomodoroValue = 25 * 60,
    initialShortBreakValue = 5 * 60,
    initialLongBreakValue = 30 * 60,
    [thisPage, setThisPage] = useState(HOME_PAGE),
    [sounds, setSounds] = useState(false),
    [valuesLoaded, setValuesLoaded] = useState(false),
    [valuePomodoro, setValuePomodoro] = useState(initialPomodoroValue),
    [valueShortBreak, setValueShortBreak] = useState(initialShortBreakValue),
    [valueLongBreak, setValueLongBreak] = useState(initialLongBreakValue);

  useEffect(() => {
    async function getData() {
      try {
        const pomodoroValue =
            (await AsyncStorage.getItem(POMO_MODE)) ?? initialPomodoroValue,
          shortBreakValue =
            (await AsyncStorage.getItem(SHORT_MODE)) ?? initialShortBreakValue,
          longBreakValue =
            (await AsyncStorage.getItem(LONG_MODE)) ?? initialLongBreakValue;

        setValuePomodoro(Number(pomodoroValue));
        setValueShortBreak(Number(shortBreakValue));
        setValueLongBreak(Number(longBreakValue));
        setValuesLoaded(true);
      } catch (err) {
        console.error(`Error in AsyncStorage: ${err.message}`);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const zero = "0000",
      verifyValues =
        valuePomodoro == zero ||
        valueShortBreak == zero ||
        valueLongBreak == zero;

    if (verifyValues) {
      setValuePomodoro(initialPomodoroValue);
      setValueShortBreak(initialShortBreakValue);
      setValueLongBreak(initialLongBreakValue);
    }
  }, [valuesLoaded]);

  if (thisPage === HOME_PAGE) {
    if (valuesLoaded) {
      return (
        <Home
          sounds={sounds}
          setThisPage={setThisPage}
          valuePomodoro={valuePomodoro}
          valueShortBreak={valueShortBreak}
          valueLongBreak={valueLongBreak}
        />
      );
    } else {
      return <Load />;
    }
  }

  if (thisPage === CONFIG_PAGE) {
    return (
      <Configuration
        thisPage={thisPage}
        setThisPage={setThisPage}
        sounds={sounds}
        setSounds={setSounds}
        valuePomodoro={valuePomodoro}
        setValuePomodoro={setValuePomodoro}
        valueShortBreak={valueShortBreak}
        setValueShortBreak={setValueShortBreak}
        valueLongBreak={valueLongBreak}
        setValueLongBreak={setValueLongBreak}
      />
    );
  }
}

export default App;

// eas build -p android --profile preview
