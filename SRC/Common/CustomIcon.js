import React from 'react';
import {myColors} from '../Helpers/ColorHelper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CustomIcon = ({
  name = 'eye',
  IconType = AntDesign,
  color = myColors.black,
  size = 40,
  style = null,
}) => {
  return <IconType color={color} size={size} name={name} style={style} />;
};

export default CustomIcon;
