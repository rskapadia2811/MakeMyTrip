import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomIcon = ({
  name = 'eye',
  IconType = AntDesign,
  color = '#000000',
  size = 40,
  style = null,
}) => {
  return <IconType color={color} size={size} name={name} style={style} />;
};

export default CustomIcon;
