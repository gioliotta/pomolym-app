import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import OptionConfig from "../components/OptionConfig.jsx";
import ChangeValue from "../components/ChangeValue.jsx";
import { HOME_PAGE } from "../utils/consts.js";
// import DonationsBtn from "../components/DonationsBtn.jsx";
// import NotificationTest from "../utils/notifications.js";
import {
  AntDesign as BackIcon,
  Octicons as VlmIcon,
  MaterialIcons as CleanIcon,
} from "@expo/vector-icons";

 function Configuration(props) {
  const {
    setThisPage,
    sounds,
    setSounds,
    valuePomodoro,
    setValuePomodoro,
    valueShortBreak,
    setValueShortBreak,
    valueLongBreak,
    setValueLongBreak,
  } = props;

  // async function clearCache() {
  //   Alert.alert("Cache deleted");
  //   global.localStorage.clear();
  // }

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={titleCont}>
        <TouchableOpacity onPress={() => setThisPage(HOME_PAGE)}>
          <BackIcon name="arrowleft" size={50} color="#9492a1" />
        </TouchableOpacity>
        <Text style={title}>Configuration</Text>
      </View>

      <View style={contOptions}>
        <OptionConfig
          textContent={sounds ? "Sounds On" : "Sounds Off"}
          onPressAction={() => setSounds(!sounds)}
          icon={
            <VlmIcon
              name={sounds ? "unmute" : "mute"}
              size={24}
              color="#9492a1"
            />
          }
        />

        <OptionConfig
          textContent="Clear cache"
          onPressAction={() => Alert.alert("Cache deleted")}
          icon={
            <CleanIcon name="cleaning-services" size={24} color="#9492a1" />
          }
        />

        <ChangeValue
          textContent="Pomodoro"
          // currentTime={valuePomodoro / 60}
          setChangeValue={setValuePomodoro}
        />

        <ChangeValue
          textContent="Short Break"
          // currentTime={valueShortBreak / 60}
          setChangeValue={setValueShortBreak}
        />

        <ChangeValue
          textContent="Long Break"
          // currentTime={valueLongBreak / 60}
          setChangeValue={setValueLongBreak}
        />
      </View>

      {/*
       <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
            <DonationsBtn />
            <NotificationTest />
  
      </View> 
      */}
    </SafeAreaView>
  );
}

export default Configuration;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
      width: "100%",
      minHeight: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    titleCont: {
      width: "80%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 20,
      marginBottom: 50,
    },
    title: {
      color: "#9492a1",
      fontSize: 28,
      letterSpacing: 1,
    },
    contOptions: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 25,
    },
  }),
  { container, titleCont, title, contOptions } = styles;
