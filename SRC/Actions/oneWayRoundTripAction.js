import API from '../Services/API';
import {SEARCH_FLIGHT_RO} from '../Constants';
export const searchFlight = (data, callback) => {
  return dispatch => {
    return API('POST', 'https://www.air.irctc.co.in/air/air/search', data)
      .then(res => {
        dispatch({
          type: SEARCH_FLIGHT_RO,
          payload: {flightData: res.data.data.flights},
        });
      })
      .catch(error => console.log(error));
  };
};
