import {exp} from 'react-native-reanimated';

String.prototype.isEmpty = function() {
  return this.length === 0 || !this.trim();
};

export const emailValidation = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const requiredValidation = value => {
  if (typeof value == 'string') return value && !value.isEmpty();
  if (value instanceof Array) return value && value.length > 0;
  return value;
};

export const lengthValidation = (value, min = 0, max) => {
  if (max) {
    return value.length >= min && value.length <= max;
  }
  return value.length >= min;
};

export const matchValidation = (value1, value2) => {
  return value1 == value2;
};

export const isNumber = value => {
  return !isNaN(value);
};

export const passwordValidation = value => {
  var passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return value.match(passwordReg);
};
