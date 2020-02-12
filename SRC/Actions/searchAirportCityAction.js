import API from '../Services/API';
import {search_airports} from '../Services/allAPI';
export const searchAirportCity = search => {
  return () => {
    let url = search_airports(search);
    return API('GET', url)
      .then(response => {
        return response.data.data.r;
      })
      .catch(error => {
        console.log(error);
      });
  };
};
