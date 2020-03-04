import API from '../Services/API';
import {setAsyncData} from '../Helpers/AsyncStorage';
import {baseURL} from '../Helpers/variableHelper';
import {checkEmailExist, checkPhoneExist} from '../Firebase/authFireBase';
import {add, get} from '../Firebase/all';
export const checkEmailMobile = (type, data, loginSignUpCallback) => {
  return () => {
    if (type === 'phone') {
      // url = '/users/checkPhone';
      // successComponent = 'RegisterPasswordComponent';
      // conflictComponent = 'LoginOTPComponent';
      checkPhoneExist(data.phone)
        .then(res => {
          loginSignUpCallback('RegisterOTPComponent', {
            phone: data.phone,
            confirmResult: res,
          });
        })
        .catch(error => {
          return Promise.reject({error: error});
          //console.log('ERR : ', error);
        });
    } else if (type === 'email') {
      checkEmailExist(data.email).catch(error => {
        if (error.isExist) {
          loginSignUpCallback('LoginPasswordComponent', data);
        } else {
          loginSignUpCallback('RegisterPasswordComponent', data);
        }
      });
    }
  };
};
export const checkEmailExistInDB = (email = '') => {
  get('users', '').then(res => {
  });
};
export const registerUser = (uid, data, registerCallback) => {
  return () => {
    add('users', uid, data);
    setAsyncData('email', data.email);
    setAsyncData('uid', uid);
    registerCallback('HomeComponent');
  };
};

export const loginWithEmail = (data, loginPasswordCallback) => {
  return () => {
    checkEmailExist(data.email, data.password)
      .then(res => {
        setAsyncData('uid', res.uid);
        setAsyncData('email', data.email);
        loginPasswordCallback('HomeComponent');
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const verifyPhoneNumberWithOTP = (data, method) => {
  const {confirmResult, OTP} = data;
  confirmResult &&
    confirmResult.data
      .confirm(OTP)
      .then(user => {
        get('users', user.uid).then(res => {
          if (res._value === null) {
            method(user.uid, 'RegisterFnameLnameDetailComponent');
          } else {
            setAsyncData('uid', user.uid);
            method(user.uid, 'HomeComponent');
          }
        });
      })
      .catch(error => alert('InValid OTP'));
};
export const registerWithPhone = (data, loginPasswordCallback) => {
  return () => {
    return API('POST', baseURL + '/users/loginUserWithPhone', data)
      .then(response => {
        if (
          response.data.status === 204 ||
          response.data.status === 400 ||
          response.data.status === 401
        ) {
          alert(response.data.message);
        } else if (response.data.status === 200) {
          setAsyncData('email', response.data.data.email);
          loginPasswordCallback('HomeComponent');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const loginWithPhone = (data, loginPasswordCallback) => {
  return () => {
    return API('POST', baseURL + '/users/loginUserWithPhone', data)
      .then(response => {
        if (
          response.data.status === 204 ||
          response.data.status === 400 ||
          response.data.status === 401
        ) {
          alert(response.data.message);
        } else if (response.data.status === 200) {
          setAsyncData('email', response.data.data.email);
          loginPasswordCallback('HomeComponent');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
