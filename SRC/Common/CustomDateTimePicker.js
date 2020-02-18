import React, {useRef, useState, useEffect} from 'react';
import DatePicker from 'react-native-datepicker';
import {myColors} from '../Helpers/ColorHelper';
let dropPicker;

const CustomDateTimePicker = ({
  mode = 'date',
  format = 'YYYY-MM-DD',
  confirmBtnText = 'Confirm',
  cancelBtnText = 'Cancel',
  minDate = '1901-01-01',
  maxDate = '2100-12-311',
  onChangeDateTime = () => {},
  openDateTimePicker = () => {},
  datefunction = false,
}) => {
  dropPicker = useRef(null);
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    if (datefunction) {
      openDateTimePicker(() => dropPicker.current.onPressDate());
    }
  }, [datefunction, openDateTimePicker]);
  return (
    <DatePicker
      ref={dropPicker}
      style={{width: 200, position: 'absolute'}}
      date={dateTime}
      mode={mode}
      minDate={minDate}
      maxDate={maxDate}
      format={format}
      showIcon={false}
      hideText={true}
      confirmBtnText={confirmBtnText}
      cancelBtnText={cancelBtnText}
      onDateChange={dt => {
        setDateTime(dt);
        onChangeDateTime(dt);
      }}
    />
  );
};

export default CustomDateTimePicker;
