// Set Color
const setColor = (lightModeColor, darkModeColor) => {
  return {
    light: lightModeColor,
    dark: darkModeColor,
  };
};

// Get Colors
const myColors = {
  red: '#FF0000',
  lightRed: '#FCE5E6',

  green: '#00FF00',

  ukkerYellow: '#BE9731',

  blue: '#0000FF',
  royalBlue: '#1E1058',
  shadeBlue: '#3874FE',

  grey: '#808080',
  lightGrey: '#B4B4B4',
  darkGrey: '#626161',

  black: '#000000',
  metBlack: '#1F1E1E',
  shadeBlack: '#3a3535',

  white: '#FFFFFF',
  silver: '#C0C0C0',

  darkPink: '#f95775',
  lightBlue: '#2A5FBA',
  lightSky: '#E5F1FF',
  sky: '#00adf5',
  skyBlue: '#59A0F2',
  seaBlue: '#3873FE',
  shadeWhite: '#EFEDEF',
  backWhite: '#FEFEFE',
  primaryBGColor: setColor('#FFFFFF', '#202020'),
  primaryContrastColor: setColor('#000000', '#FFFFFF'),
  primaryTextColor: setColor('#000000', '#FFFFFF'),
  primaryActiveTextBoxLabelColor: setColor('#2A5FBA', '#f95775'),
  primaryGradiantColor: setColor(
    ['#53b2fe', '#065af3'],
    ['#f95775', '#f0772c'],
  ),
  gradiantColor2: setColor(['#B4B4B4', '#B4B4B4'], ['#3c4245', '#3c4245']),
  gradiantColor3: setColor(['#7b4397', '#dc2430'], ['#141E30', '#243B55']),
};
export {myColors};
