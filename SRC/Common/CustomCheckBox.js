import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import CustomIcon from './CustomIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Checkbox from 'react-native-modest-checkbox';
import {myColors} from '../Helpers/ColorHelper';
const CustomCheckBox = ({
  initialData, // REQUIRED
  checkBoxData, // REQUIRED
  onPress, // REQUIRED
  horizontal = true,
  showLabel = true,
  labelStyle = {},
  openCheckBoxStyle = {},
  selectedCheckBoxStyle = {},
  style = {},
  iconType = MaterialCommunityIcons,
  openCheckBoxIconName = 'checkbox-blank-outline',
  selectedCheckBoxIconName = 'checkbox-marked',
  ...props
}) => {
  let initArray = initialData ? initialData : [];
  let direction = horizontal === true ? 'row' : 'column';
  return (
    <View style={{flexDirection: direction}}>
      {checkBoxData.map((item, index) => {
        let selected = initArray.includes(item) ? true : false;
        return (
          <Checkbox
            checkedComponent={
              <CustomIcon
                IconType={iconType}
                name={selectedCheckBoxIconName}
                size={selectedCheckBoxStyle.size}
                color={selectedCheckBoxStyle.color}
                style={style}
              />
            }
            uncheckedComponent={
              <CustomIcon
                IconType={iconType}
                name={openCheckBoxIconName}
                size={openCheckBoxStyle.size}
                color={openCheckBoxStyle.color}
                style={style}
              />
            }
            checked={selected}
            labelStyle={{
              ...labelStyle,
              color: myColors.primaryTextColor[props.theme],
            }}
            label={showLabel === true ? item : null}
            onChange={value => {
              if (value.checked) {
                initArray.push(value.label);
              } else {
                initArray.splice(initArray.indexOf(value.label), 1);
              }
              onPress(initArray);
            }}
          />
        );
      })}
    </View>
  );
};
const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
export default connect(
  mapStateToProps,
  null,
)(CustomCheckBox);
