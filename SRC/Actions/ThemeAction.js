import {THEME_CHANGE} from '../Constants';
export const changeTheme = (data = null) => {
  return dispatch => {
    dispatch({
      type: THEME_CHANGE,
      payload: {theme: data},
    });
  };
};
