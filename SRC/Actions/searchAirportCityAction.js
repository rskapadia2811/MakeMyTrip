import API from '../Services/API';
import {search_airports} from '../Services/allAPI';
export const searchAirportCity = search => {
  return () => {
    let url = search_airports(search);
    return API('GET', url)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
