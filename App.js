import React, { useState } from "react";
import Home from "./source/pages/Home";
import Configuration from "./source/pages/Configuration";
import { HOME_PAGE, CONFIG_PAGE } from "./source/utils/consts.js";

function App() {
  const [thisPage, setThisPage] = useState(HOME_PAGE),
    [sounds, setSounds] = useState(false),
    [valuePomodoro, setValuePomodoro] = useState(25 * 60),
    [valueShortBreak, setValueShortBreak] = useState(5 * 60),
    [valueLongBreak, setValueLongBreak] = useState(30 * 60);

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
