import AsyncStorage from "@react-native-async-storage/async-storage";

//* Save data in local storage.
async function setStoreData(value) {
  try {
    await AsyncStorage.setItem("pomolym-data", value);
  } catch (err) {
    console.error("Error: " + err.message);
  }
}

//* Get data from local storage.
async function getStoreData() {
  try {
    const value = await AsyncStorage.getItem("pomolym-data");
    if (value !== null) {
      return value;
    }
  } catch (err) {
    console.error("Error: " + err.message);
  }
}

export { setStoreData, getStoreData };
