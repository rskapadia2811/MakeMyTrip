import {THEME_CHANGE} from '../Constants';
export const changeTheme = (mode = null) => {
  return dispatch => {
    dispatch({
      type: THEME_CHANGE,
      payload: {theme: mode},
    });
  };
};
