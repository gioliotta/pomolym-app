import AsyncStorage from "@react-native-async-storage/async-storage";
// import { LONG_MODE, POMO_MODE, SHORT_MODE } from "./consts";

//* Save data in local storage.
async function setStoreData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    console.log("Key: " + key + " Value: " + jsonValue / 60);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.error("Error: " + err.message);
  }
}

//* Get data from local storage.
async function getStoreData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.error("Error: " + err.message);
  }
}

export { setStoreData, getStoreData };
