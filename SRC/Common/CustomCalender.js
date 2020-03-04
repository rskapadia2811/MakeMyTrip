import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {fonts} from '../Helpers/variableHelper';
import moment from 'moment';
import {myColors} from '../Helpers/ColorHelper';
import {widthPercentageToDP as wp} from '../Helpers/screenHelper';
import LinearGradient from 'react-native-linear-gradient';
const CustomCalender = ({
  update = () => {},
  selectedDate = new Date(),
  pastMonth = 50,
  futureMonth = 50,
  minDate = new Date(),
  maxDate = new Date().setMonth(new Date().getMonth() + 4),
  onDateSelect = () => {},
  onDatePress = () => {},
  markedDate = null,
  ...props
}) => {
  const theme = useSelector(state => state.ThemeReducer.theme);
  const [currentDate, setCurrentDate] = useState(
    moment(selectedDate).format('YYYY-MM-DD'),
  );
  useEffect(() => {
    if (markedDate != null) {
      setCurrentDate(markedDate[0]);
    }
  }, [markedDate]);
  const today = moment(new Date()).format('YYYY-MM-DD');
  const markedDates = {
    [today]: {
      color: theme === 'dark' ? myColors.darkPink : myColors.blue,
    },
    [currentDate]: {
      color: myColors.white,
      backgroundColor:
        theme === 'dark' ? myColors.darkPink : myColors.lightBlue,
    },
    ...markedDate,
  };
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          zIndex: 5,
          alignSelf: 'center',
          bottom: wp(100),
        }}>
        <TouchableOpacity onPress={() => onDateSelect(currentDate)}>
          <LinearGradient
            colors={myColors.primaryGradiantColor[theme]}
            style={{...Styles.searchButtonContainer}}>
            <Text style={{...Styles.searchText}}>DONE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <CalendarList
        style={{zIndex: -5}}
        minDate={minDate}
        maxDate={maxDate}
        current={currentDate}
        markedDates={markedDates}
        dayComponent={({date, marking, state}) => (
          <TouchableOpacity
            onPress={() => {
              if (!(state && state === 'disabled')) {
                let dt = moment(date.dateString).format('YYYY-MM-DD');
                setCurrentDate(dt);
              }
            }}>
            <View
              style={{
                borderRadius: 5,
                width: marking && marking.width ? marking.width : wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:
                  currentDate === date.dateString ||
                  (marking && marking.backgroundColor)
                    ? marking && marking.backgroundColor
                      ? marking.backgroundColor
                      : myColors.primaryActiveTextBoxLabelColor[theme]
                    : myColors.primaryBGColor[theme],
                padding: wp(2),
              }}>
              <Text
                style={{
                  fontFamily: fonts.latoBold,
                  color:
                    state === 'disabled'
                      ? 'gray'
                      : marking && marking.color
                      ? marking.color
                      : myColors.primaryTextColor[theme],
                }}>
                {date.day}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType={'period'}
        showScrollIndicator={false}
        monthFormat={'MMMM yyyy'}
        hideArrows={true}
        hideExtraDays={true}
        hideDayNames={true}
        firstDay={0}
        theme={{
          calendarBackground: myColors.primaryBGColor[theme],
          textSectionTitleColor: myColors.silver,
          textSectionFontSize: 10,
          todayTextColor: myColors.sky,
          monthTextColor: myColors.primaryTextColor[theme],
          textDayFontFamily: fonts.latoBlack,
          textMonthFontFamily: fonts.latoBlack,
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: wp(3),
        }}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  searchButtonContainer: {
    height: wp(22),

    width: wp(22),
    justifyContent: 'center',
    borderRadius: wp(15),
    alignItems: 'center',
    zIndex: 1,
  },
  searchText: {
    fontSize: wp(4),
    color: myColors.white,
    fontFamily: fonts.latoBlack,
  },
});

export default CustomCalender;
