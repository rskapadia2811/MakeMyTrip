import {database} from 'react-native-firebase';

export const add = (collectionName, uniqueKey, data) => {
  database()
    .ref(collectionName + '/' + uniqueKey)
    .set(data);
};

export const update = (collectionName, uniqueKey, data) => {
  database()
    .ref(collectionName + '/' + uniqueKey)
    .update(data);
};
export const get = (collectionName, uniqueKey = '') => {
  return new Promise((resolve, reject) => {
    database()
      .ref(collectionName + '/' + uniqueKey)
      .once('value')
      .then(result => {
        return resolve(result);
      });
  });
};
