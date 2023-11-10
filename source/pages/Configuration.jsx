import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import OptionConfig from "../components/OptionConfig.jsx";
import ChangeValue from "../components/ChangeValue.jsx";
import {
  HOME_PAGE,
  POMO_MODE,
  SHORT_MODE,
  LONG_MODE,
} from "../utils/consts.js";
import { confirmationAlert } from "../utils/commonFunctions.js";
import {
  AntDesign as BackIcon,
  Octicons as VlmIcon,
  MaterialIcons as CleanIcon,
  Feather as CoffeeIcon,
} from "@expo/vector-icons";

function Configuration(props) {
  const {
      setThisPage,
      sounds,
      setSounds,
      setValuePomodoro,
      setValueShortBreak,
      setValueLongBreak,
    } = props,
    [isSaving, setIsSaving] = useState(false);

  function saveChanges() {
    setIsSaving(true);
    confirmationAlert("Updated values");
  }

  function backToHome() {
    setThisPage(HOME_PAGE);
  }

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={titleCont}>
        <TouchableOpacity onPress={backToHome}>
          <BackIcon name="arrowleft" size={50} color="#fff" />
        </TouchableOpacity>
        <Text style={title}>Configuration</Text>
      </View>

      <View style={contOptions}>
        <ChangeValue
          textContent={POMO_MODE}
          isSaving={isSaving}
          setChangeValue={setValuePomodoro}
        />

        <ChangeValue
          textContent={SHORT_MODE}
          isSaving={isSaving}
          setChangeValue={setValueShortBreak}
        />

        <ChangeValue
          textContent={LONG_MODE}
          isSaving={isSaving}
          setChangeValue={setValueLongBreak}
        />

        <OptionConfig
          textContent={sounds ? "Sounds On" : "Sounds Off"}
          onPressAction={() => setSounds(!sounds)}
          icon={
            <VlmIcon name={sounds ? "unmute" : "mute"} size={24} color="#fff" />
          }
        />

        <OptionConfig
          textContent="Clear cache"
          onPressAction={() => confirmationAlert("Coming soon...")}
          icon={<CleanIcon name="cleaning-services" size={24} color="#fff" />}
        />

        <OptionConfig
          textContent="Buy me a coffee"
          onPressAction={() => confirmationAlert("Coming soon...")}
          icon={<CoffeeIcon name="coffee" size={24} color="#fff" />}
        />

        <TouchableOpacity style={saveBtn} onPress={saveChanges}>
          <Text style={textSave}>Save Changes</Text>
        </TouchableOpacity>
      </View>
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
      color: "#fff",
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
      marginTop: 50,
      backgroundColor: "#664EFF",
      paddingHorizontal: 25,
      paddingVertical: 15,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#8c7aff",
    },
    textSave: {
      color: "#fff",
      fontSize: 18,
    },
  }),
  { container, titleCont, title, contOptions, saveBtn, textSave } = styles;
