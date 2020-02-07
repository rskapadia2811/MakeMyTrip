import React from 'react';
import {View} from 'react-native';
const CustomSeperator = ({borderWidth = 1.5, borderColor = 'lightgrey'}) => {
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
