import AsyncStorage from "@react-native-async-storage/async-storage";

//* Save data in local storage.
async function setStoreData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.error("Error: " + err.message);
  }
}

//* Get data from local storage.
async function getStoreData() {
  try {
    const jsonValue = await AsyncStorage.getItem("my-key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.error("Error: " + err.message);
  }
}

export { setStoreData, getStoreData };
