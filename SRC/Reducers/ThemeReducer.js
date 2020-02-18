import {themeState} from '../States/initialStates';
import {THEME_CHANGE} from '../Constants';
import {setAsyncData} from '../Helpers/AsyncStorage';
const ThemeReducer = (state = themeState, action) => {
  let theme;
  if (action.type === THEME_CHANGE) {
    if (action.payload.theme) {
      theme = action.payload.theme;
    } else {
      theme = state.theme === 'dark' ? 'light' : 'dark';
    }
    setAsyncData('theme', theme);
    return {
      theme: theme,
    };
  }
  return state;
};

export default ThemeReducer;
