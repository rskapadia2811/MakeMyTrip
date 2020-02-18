import React from 'react';
import {Platform} from 'react-native';
import {myColors} from './ColorHelper';
import {setColor} from './ThemeHelper';
module.exports = {
  // API URL
  baseURL: 'http://localhost:3001',
  // Home CustomIcon Style
  homeHeaderIcon: {
    size: 30,
    color: myColors.skyBlue,
  },

  // Color Properties
  color: {
    bottomBarActiveTabColor: myColors.skyBlue,
    bottomIconColor: myColors.darkGrey,
    bottomBarActiveIconBackgroundColor: myColors.metBlack,
    bottomBarInActiveIconBackgroundColor: myColors.metBlack,
    topHomeHeaderTextColor: myColors.black,
  },

  // Fonts Properties
  fonts: {
    latoBlackItalic: 'Lato-BlackItalic',
    latoBlack: 'Lato-Black',
    latoBold: 'Lato-Bold',
    latoBoldItalic: 'Lato-BoldItalic',
    latoItalic: 'Lato-Italic',
    latoLight: 'Lato-Light',
    latoLightItalic: 'Lato-LightItalic',
    latoRegular: 'Lato-Regular',
    latoThin: Platform.OS === 'android' ? 'Lato-Thin' : 'Lato-Hairline',
    latoThinItalic:
      Platform.os === 'Android' ? 'Lato-ThinItalic' : 'Lato-HairlineItalic',
  },

  // Dynamic Text

  texts: {
    homeHeaderTopText: 'Book Your Travel Now',
  },
};
