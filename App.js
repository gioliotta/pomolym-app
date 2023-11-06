import React, { useState, useEffect } from "react";
import Home from "./source/pages/Home.jsx";
import Configuration from "./source/pages/Configuration.jsx";
import {
  HOME_PAGE,
  CONFIG_PAGE,
  POMO_MODE,
  SHORT_MODE,
  LONG_MODE,
} from "./source/utils/consts.js";
import { getStoreData } from "./source/utils/localData.js";

const initialPomodoroValue = 25 * 60,
  initialShortBreakValue = 5 * 60,
  initialLongBreakValue = 30 * 60;

function App() {
  const [thisPage, setThisPage] = useState(HOME_PAGE),
    [sounds, setSounds] = useState(false),
    [valuePomodoro, setValuePomodoro] = useState(initialPomodoroValue),
    [valueShortBreak, setValueShortBreak] = useState(initialShortBreakValue),
    [valueLongBreak, setValueLongBreak] = useState(initialLongBreakValue);

  useEffect(async () => {
    const storedPomodoroValue = await getStoreData(POMO_MODE),
      storedShortBreakValue = await getStoreData(SHORT_MODE),
      storedLongBreakValue = await getStoreData(LONG_MODE);

    if (storedPomodoroValue) {
      return setValuePomodoro(storedPomodoroValue);
    }
    if (storedShortBreakValue) {
      return setValueShortBreak(storedShortBreakValue);
    }
    if (storedLongBreakValue) {
      return setValueLongBreak(storedLongBreakValue);
    }
  }, []);

  if (thisPage === HOME_PAGE) {
    return (
      <Home
        setThisPage={setThisPage}
        sounds={sounds}
        valuePomodoro={valuePomodoro}
        setValuePomodoro={setValuePomodoro}
        valueShortBreak={valueShortBreak}
        setValueShortBreak={setValueShortBreak}
        valueLongBreak={valueLongBreak}
        setValueLongBreak={setValueLongBreak}
      />
    );
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
