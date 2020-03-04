import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp} from '../Helpers/screenHelper';
import {fonts} from '../Helpers/variableHelper';
import {useSelector} from 'react-redux';
import {myColors} from '../Helpers/ColorHelper';
const CustomTextInput = ({
  style = null,
  showLabel = true,
  showBottomBorder = true,
  placeHolderText = 'Enter',
  textInputFontFamily = fonts.latoRegular,
  labelText = placeHolderText,
  placeholderTextColor = 'grey',
  data = null,
  onFocusBottomBorderColor = myColors.lightBlue,
  maxLength = null,
  onBlurBottomBorderColor = 'black',
  onChangeText = () => {},
  returnKeyType = 'default',
  activeLabelColor = myColors.lightBlue,
  deActiveLabelColor = 'grey',
  autoCapitalize = 'none',
  showPlaceHolderOnFocus = false,
  labelFontFamily = fonts.latoBold,
  labelFontSize = wp(3),
  autoFocus = false,
  secureTextEntry = false,
  keyboardType = 'default',
  ...props
}) => {
  const theme = useSelector(state => state.ThemeReducer.theme);
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState('none');
  const [txtLength, setTxtLength] = useState(0);
  return (
    <View
      style={{
        ...Styles.txtInputContainer,
        ...style,
        borderBottomColor:
          showBottomBorder && focus
            ? theme === 'light'
              ? myColors.lightBlue
              : myColors.darkPink
            : theme === 'dark'
            ? myColors.white
            : myColors.black,
        borderBottomWidth: showBottomBorder ? (focus ? 3 : 1) : 0,
      }}>
      {showLabel ? (
        <Text
          style={{
            ...Styles.enterMobileEmailText,
            display: show,
            fontSize: labelFontSize,
            fontFamily: labelFontFamily,
            color: focus
              ? myColors.primaryActiveTextBoxLabelColor[theme]
              : deActiveLabelColor,
          }}>
          {labelText}
        </Text>
      ) : (
        <></>
      )}
      <TextInput
        style={{
          ...Styles.txtInput,
          fontFamily: textInputFontFamily,
          color: theme === 'dark' ? myColors.white : myColors.black,
        }}
        selectionColor={
          theme === 'light' ? myColors.lightBlue : myColors.darkPink
        }
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        placeholder={
          showPlaceHolderOnFocus
            ? placeHolderText
            : show == 'flex'
            ? null
            : placeHolderText
        }
        returnKeyType={returnKeyType}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        keyboardType={keyboardType}
        onChangeText={text => {
          setTxtLength(text.length);
          onChangeText(text);
        }}
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          setShow('flex');
          setFocus(true);
        }}
        onBlur={() => {
          if (txtLength === 0) {
            setShow('none');
            setFocus(false);
          } else {
            setShow('flex');
            setFocus(false);
          }
        }}>
        {data}
      </TextInput>
    </View>
  );
};
const Styles = StyleSheet.create({
  txtInputContainer: {
    width: wp(90),
    paddingBottom: wp(0.8),
    fontSize: wp(4.5),
    borderBottomWidth: 2.5,
    color: 'black',
  },
  txtInput: {
    marginTop: wp(5.5),
    fontSize: wp(4.5),
  },
  enterMobileEmailText: {
    position: 'absolute',
  },
});

export default CustomTextInput;
