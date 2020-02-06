import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp} from '../Helpers/screenHelper';
import {fonts} from '../Helpers/variableHelper';

const CustomTextInput = ({
  style = null,
  showLabel = true,
  placeHolderText = 'Enter',
  labelText = placeHolderText,
  placeholderTextColor = 'grey',
  data = null,
  onFocusBottomBorderColor = '#2A5FBA',
  maxLength = null,
  onBlurBottomBorderColor = 'black',
  onChangeText = () => {},
  returnKeyType = 'default',
  activeLabelColor = '#2A5FBA',
  deActiveLabelColor = 'grey',
  autoCapitalize = false,
  labelFontSize = wp(3),
  autoFocus = false,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState('none');
  const [txtLength, setTxtLength] = useState(0);
  return (
    <View
      style={{
        ...Styles.txtInputContainer,
        ...style,
        borderBottomColor: focus
          ? onFocusBottomBorderColor
          : onBlurBottomBorderColor,
        borderBottomWidth: focus ? 3 : 1,
      }}>
      {showLabel ? (
        <Text
          style={{
            ...Styles.enterMobileEmailText,
            display: show,
            fontSize: labelFontSize,
            color: focus ? activeLabelColor : deActiveLabelColor,
          }}>
          {labelText}
        </Text>
      ) : (
        <></>
      )}
      <TextInput
        style={{
          ...Styles.txtInput,
        }}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        placeholder={show == 'flex' ? null : placeHolderText}
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
    // <View
    //   style={{
    //     ...Styles.txtInputContainer,
    //     ...style,
    //     borderBottomColor: focus
    //       ? onFocusBottomBorderColor
    //       : onBlurBottomBorderColor,
    //     borderBottomWidth: focus ? 3 : 1,
    //   }}>
    //   <TextInput
    //     style={{...Styles.txtInput}}
    //     placeholder={placeHolderText}
    //     placeholderTextColor={placeholderTextColor}
    //     onFocus={() => setFocus(true)}
    //     onBlur={() => setFocus(false)}>
    //     {data}
    //   </TextInput>
    // </View>
  );
};
const Styles = StyleSheet.create({
  txtInputContainer: {
    width: wp(90),
    paddingBottom: wp(0.8),
    fontSize: wp(4.5),
    borderBottomWidth: 2.5,
    // borderBottomColor: '#2A5FBA',
    fontFamily: fonts.latoRegular,
    color: 'black',
  },
  txtInput: {
    marginTop: wp(5.5),
    fontSize: wp(4.5),
    fontFamily: fonts.latoRegular,
    color: 'black',
  },
  enterMobileEmailText: {
    position: 'absolute',
    fontFamily: fonts.latoBold,
  },
});
export default CustomTextInput;
