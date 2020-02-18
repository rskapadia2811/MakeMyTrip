import AsyncStorage from '@react-native-community/async-storage';
const setAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const getAsyncData = key => {
  try {
    let value = AsyncStorage.getItem(key);
    if (value != null) {
      return Promise.resolve(value);
    } else {
      return '';
    }
  } catch (error) {0.
    console.log(error);
  }
};


module.exports = {
  setAsyncData,
  getAsyncData,
};
