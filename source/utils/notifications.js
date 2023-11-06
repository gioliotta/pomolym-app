import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

function NotificationActive() {
  const notificationListener = useRef(),
    responseListener = useRef();

  useEffect(() => {
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Pomodoro",
        body: "Test Notification",
      },
      trigger: { seconds: 1 },
    });
  }

  async function sendNotification() {
    await schedulePushNotification();
  }

  return (
    <View style={container}>
      <TouchableOpacity style={btn} onPress={sendNotification}>
        <Text style={text}>Try Notification</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NotificationActive;

const styles = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    btn: {
      paddingHorizontal: 20,
      paddingVertical: 8,
      width: 170,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      columnGap: 4,
    },
    text: {
      color: "#9492a1",
      fontFamily: "monospace",
      fontSize: 11,
      fontStyle: "italic",
    },
  }),
  { container, btn, text } = styles;
