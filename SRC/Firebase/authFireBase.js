import {auth} from 'react-native-firebase';

export const checkEmailExist = (email, password = 'Rishi@22811') => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user._user.uid) {
          return resolve({isExist: true, uid: res.user._user.uid});
        } else {
          return resolve({isExist: false});
        }
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found')  reject({isExist: false});{
            return
        }
        return reject({isExist: true});
      });
  });
};

export const checkPhoneExist = phone => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithPhoneNumber('+91' + phone)
      .then(data => {
        return resolve({data});
      })
      .catch(error => {
        return reject(error);
      });
  });
};
