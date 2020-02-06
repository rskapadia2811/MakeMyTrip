import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({});
const configStore = createStore(() => {}, applyMiddleware(thunk));

export default configStore;
