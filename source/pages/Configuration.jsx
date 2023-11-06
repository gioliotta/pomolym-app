import React, { useState } from "react";
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
import {
  HOME_PAGE,
  POMO_MODE,
  SHORT_MODE,
  LONG_MODE,
} from "../utils/consts.js";
import { setStoreData } from "../utils/localData.js";
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
    } = props,
    [isSaving, setIsSaving] = useState(false);

  function saveChanges() {
    setIsSaving(true);
    setStoreData(POMO_MODE, valuePomodoro);
    setStoreData(SHORT_MODE, valueShortBreak);
    setStoreData(LONG_MODE, valueLongBreak);
  }

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
          isSaving={isSaving}
          setChangeValue={setValuePomodoro}
        />

        <ChangeValue
          textContent="Short Break"
          isSaving={isSaving}
          setChangeValue={setValueShortBreak}
        />

        <ChangeValue
          textContent="Long Break"
          isSaving={isSaving}
          setChangeValue={setValueLongBreak}
        />

        <TouchableOpacity style={saveBtn} onPress={saveChanges}>
          <Text>Save Changes</Text>
        </TouchableOpacity>
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
    saveBtn: {
      backgroundColor: "red",
      padding: 20,
    },
  }),
  { container, titleCont, title, contOptions, saveBtn } = styles;
