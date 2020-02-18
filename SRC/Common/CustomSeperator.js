import React from 'react';
import {View} from 'react-native';
import {myColors} from '../Helpers/ColorHelper';
const CustomSeperator = ({borderWidth = 0.5, borderColor = myColors.grey}) => {
  return (
    <View
      style={{
        borderBottomWidth: borderWidth,
        borderBottomColor: borderColor,
      }}
    />
  );
};

export default CustomSeperator;
