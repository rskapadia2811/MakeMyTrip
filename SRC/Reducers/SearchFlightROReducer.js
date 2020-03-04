import {flightSearchState} from '../States/initialStates';
import {SEARCH_FLIGHT_RO} from '../Constants';
const SearchFlightROReducer = (state = flightSearchState, action) => {
  debugger;
  if (action.type === SEARCH_FLIGHT_RO) {
    return {
      flightData: action.payload.flightData,
    };
  }
  return state;
};
export default SearchFlightROReducer;
