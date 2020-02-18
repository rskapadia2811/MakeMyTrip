import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from '../../Helpers/screenHelper';
import GLOBAL from '../GLOBAL';
import {myColors} from '../../Helpers/ColorHelper';
import {CalendarList} from 'react-native-calendars';
import moment from 'moment';
import {fonts} from '../../Helpers/variableHelper';
import CustomCalender from '../../Common/CustomCalender';
class DateSelectionComponent extends Component {
  constructor() {
    super();
  }
  UNSAFE_componentWillMount(): void {
    this.fromDate =
      this.props &&
      this.props.navigation &&
      this.props.navigation.state &&
      this.props.navigation.state.params &&
      this.props.navigation.state.params.date;
    this.way =
      (this.props &&
        this.props.navigation &&
        this.props.navigation.state &&
        this.props.navigation.state.params &&
        this.props.navigation.state.params.way) ||
      '';
  }

  render() {
    return (
      <GLOBAL>
        <View>
          <CustomCalender
            way={this.way}
            minDate={this.fromDate && this.fromDate}
            markedDate={
              this.fromDate && {
                [this.fromDate]: {
                  color: myColors.white,
                  backgroundColor: myColors.shadeBlue,
                },
              }
            }
            onDateSelect={date =>
              this.props.navigation.navigate('FlightSearchComponent', {
                fromDate: date,
                way: this.way,
              })
            }
          />
        </View>
      </GLOBAL>
    );
  }
}
export default DateSelectionComponent;
