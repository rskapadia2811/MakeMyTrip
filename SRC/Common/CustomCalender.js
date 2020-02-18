import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import {connect} from 'react-redux';
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
  markedDate = null,
  ...props
}) => {
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
    [today]: {color: props.theme === 'dark' ? myColors.red : myColors.blue},
    [currentDate]: {color: myColors.white, backgroundColor: myColors.shadeBlue},
    ...markedDate,
  };
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          zIndex: 5,
          alignSelf: 'center',
          bottom: wp(15),
        }}>
        <TouchableOpacity onPress={() => onDateSelect(currentDate)}>
          <LinearGradient
            colors={myColors.primaryGradiantColor[props.theme]}
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
                setCurrentDate(moment(date.dateString).format('YYYY-MM-DD'));
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
                      : myColors.shadeBlue
                    : myColors.primaryBGColor[props.theme],
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
                      : myColors.primaryTextColor[props.theme],
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
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        firstDay={0}
        theme={{
          calendarBackground: myColors.primaryBGColor[props.theme],
          textSectionTitleColor: myColors.silver,
          textSectionFontSize: 10,
          todayTextColor: myColors.sky,
          monthTextColor: myColors.primaryTextColor[props.theme],
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
const reRender = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
};

const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
export default connect(
  mapStateToProps,
  null,
)(CustomCalender);
