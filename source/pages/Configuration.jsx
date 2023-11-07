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
      setValuePomodoro,
      setValueShortBreak,
      setValueLongBreak,
    } = props,
    [isSaving, setIsSaving] = useState(false);

  function saveChanges() {
    setIsSaving(true);
  }

  return (
    <SafeAreaView style={container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={titleCont}>
        <TouchableOpacity onPress={() => setThisPage(HOME_PAGE)}>
          <BackIcon name="arrowleft" size={50} color="#fff" />
        </TouchableOpacity>
        <Text style={title}>Configuration</Text>
      </View>

      <View style={contOptions}>
        <OptionConfig
          textContent={sounds ? "Sounds On" : "Sounds Off"}
          onPressAction={() => setSounds(!sounds)}
          icon={
            <VlmIcon name={sounds ? "unmute" : "mute"} size={24} color="#fff" />
          }
        />

        <OptionConfig
          textContent="Clear cache"
          onPressAction={() => Alert.alert("Cache deleted")}
          icon={<CleanIcon name="cleaning-services" size={24} color="#fff" />}
        />

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

        <TouchableOpacity style={saveBtn} onPress={saveChanges}>
          <Text style={textSave}>Save Changes</Text>
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
