import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ThemeReducer from '../Reducers/ThemeReducer';
import SearchFlightROReducer from '../Reducers/SearchFlightROReducer';
const rootReducer = combineReducers({ThemeReducer, SearchFlightROReducer});
const configStore = createStore(rootReducer, applyMiddleware(thunk));

export default configStore;
