import API from '../Services/API';
import {setAsyncData} from '../Helpers/AsyncStorage';
import {baseURL} from '../Helpers/variableHelper';
export const checkEmailMobile = (type, data, loginSignUpCallback) => {
  return () => {
    let url = '',
      successComponent = '',
      conflictComponent = '';

    if (type === 'phone') {
      url = '/users/checkPhone';
      successComponent = 'RegisterPasswordComponent';
      conflictComponent = 'LoginOTPComponent';
    } else if (type === 'email') {
      url = '/users/checkEmail';
      successComponent = 'RegisterPasswordComponent';
      conflictComponent = 'LoginPasswordComponent';
    }
    return API('POST', baseURL + url, data)
      .then(response => {
        if (response.data.status === 409) {
          loginSignUpCallback(conflictComponent, data);
        } else if (response.data.status === 200) {
          loginSignUpCallback(successComponent, data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const registerUser = (data, registerCallback) => {
  return () => {
    return API('POST', baseURL + '/users/registerUser', data)
      .then(response => {
        console.log(data);
        console.log(response.data.status);
        if (response.data.status === 200) {
          setAsyncData('email', data.email);
          registerCallback('HomeComponent');
        } else {
          alert('Somthing Went Wrong');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const loginWithEmail = (data, loginPasswordCallback) => {
  return () => {
    return API('POST', baseURL + '/users/loginUserWithEmail', data)
      .then(response => {
        if (
          response.data.status === 204 ||
          response.data.status === 400 ||
          response.data.status === 401
        ) {
          alert(response.data.message);
        } else if (response.data.status === 200) {
          setAsyncData('email', data.email);
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
