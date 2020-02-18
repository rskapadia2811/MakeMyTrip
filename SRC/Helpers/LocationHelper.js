import Geolocation from '@react-native-community/geolocation';
import API from '../Services/API';
export const _getLocation = () => {
  return new Promise(resolve => {
    Geolocation.getCurrentPosition(position => {
      return resolve(position.coords);
    });
  });
};

export const _getCurrentCity = (lat, lon) => {
  let url1 =
    'https://api.opencagedata.com/geocode/v1/json?&key=1740161e894049df8f3b9a8a10917ed0&q=' +
    lat +
    '+' +
    lon +
    '&pretty=1';
  return API('GET', url1)
    .then(res => {
      let cityName = res.data.results[0].components.city;
      return Promise.resolve(cityName);
    })
    .catch(error => console.log(error));
};
