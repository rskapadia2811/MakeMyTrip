import {auth} from 'react-native-firebase';

export const checkEmailExist = email => {
  auth()
    .signInWithEmailAndPassword(email, 'Rishi@2811')
    .then(() => {
      return true;
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found') {
        return false;
      }
      return false;
    });
};
