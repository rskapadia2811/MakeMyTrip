import {flightSearchState} from '../States/initialStates';
import {SEARCH_FLIGHT_RO} from '../Constants';
const SearchFlightReducer = (state = flightSearchState, action) => {
  switch (action.type) {
    case SEARCH_FLIGHT_RO: {
      flightSearchState: action.payload.flightData;
    }
  }
};
export default SearchFlightReducer;
