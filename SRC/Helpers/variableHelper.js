import React from 'react';
import {Platform} from 'react-native';

module.exports = {
  // API URL
  baseURL: 'http://localhost:3001',

  // Home CustomIcon Style
  homeHeaderIcon: {
    size: 30,
    color: '#59A0F2',
  },

  // Color Properties
  color: {
    bottomBarActiveTabColor: '#2858B1',
    bottomIconColor: '#626161',
    bottomBarActiveIconBackgroundColor: '#1F1E1E',
    bottomBarInActiveIconBackgroundColor: '#1F1E1E',
    topHomeHeaderTextColor: '#000000',
  },

  // Fonts Properties
  fonts: {
    latoBlack: 'Lato-Black',
    latoBlackItalic: 'Lato-BlackItalic',
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
