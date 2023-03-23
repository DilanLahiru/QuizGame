import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAccessToken = key => {
  return new Promise(async (res, reject) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        const parsedValue = JSON.parse(value);
        res(parsedValue);
      }
      res(null);
    } catch (error) {
      reject(error);
    }
  });
};

export const storeAccessToken = value => {
  return new Promise(async (res, reject) => {
    try {
      const stringifiedValue = JSON.stringify(value);
      await AsyncStorage.setItem('userToken', stringifiedValue);
      res(value);
    } catch (error) {
      reject(error);
    }
  });
};

export const storeLoginUserData = value => {
  return new Promise(async (res, reject) => {
    try {
      const stringifiedValue = JSON.stringify(value);
      await AsyncStorage.setItem('userData', stringifiedValue);
      res(value);
    } catch (error) {
      reject(error);
    }
  });
};
