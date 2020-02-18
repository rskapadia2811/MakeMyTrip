import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ThemeReducer from '../Reducers/ThemeReducer';
const rootReducer = combineReducers({ThemeReducer});
const configStore = createStore(rootReducer, applyMiddleware(thunk));

export default configStore;
