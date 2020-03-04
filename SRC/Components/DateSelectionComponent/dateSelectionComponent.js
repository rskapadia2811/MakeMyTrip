import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from '../../Helpers/screenHelper';
import GLOBAL from '../GLOBAL';
import {myColors} from '../../Helpers/ColorHelper';
import {connect} from 'react-redux';
import {get} from 'lodash';
import CustomCalender from '../../Common/CustomCalender';
import CustomIcon from '../../Common/CustomIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fonts} from '../../Helpers/variableHelper';
import moment from 'moment';
class DateSelectionComponent extends Component {
  UNSAFE_componentWillMount(): void {
    this.fromDate = get(this.props.navigation, 'state.params.date');
    this.setState({fromDate: get(this.props.navigation, 'state.params.date')});
    this.way = get(this.props.navigation, 'state.params.way');
  }
  constructor() {
    super();
    this.state = {
      fromDate: new Date(),
      toDate: new Date(),
    };
  }
  componentDidMount(): void {}

  render() {
    let week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return (
      <GLOBAL>
        <View>
          <View>
            <View
              style={{
                ...Styles.flightSearchHeaderMainContainer,
                backgroundColor: myColors.primaryBGColor[this.props.theme],
              }}>
              <TouchableOpacity
                onPress={() => this.navigation.navigate('HomeComponent')}>
                <CustomIcon
                  IconType={Ionicons}
                  name={'ios-arrow-round-back'}
                  color={myColors.primaryTextColor[this.props.theme]}
                  size={wp(10)}
                  style={{...Styles.backIcon}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...Styles.thinText,
                  color: myColors.primaryTextColor[this.props.theme],
                }}>
                Select
              </Text>
              <Text
                style={{
                  ...Styles.boldText,
                  color: myColors.primaryTextColor[this.props.theme],
                }}>
                Travel Dates
              </Text>
            </View>
            <View style={{...Styles.dateContainer}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text
                  style={{
                    color:
                      myColors.primaryActiveTextBoxLabelColor[this.props.theme],
                  }}>
                  DEPATURE
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        ...Styles.dateText,
                        color:
                          myColors.primaryActiveTextBoxLabelColor[
                            this.props.theme
                          ],
                      }}>
                      {this.way === 'depature'
                        ? moment(this.state.fromDate).format('DD')
                        : moment(this.fromDate).format('DD')}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        ...Styles.monthYearText,
                        color:
                          myColors.primaryActiveTextBoxLabelColor[
                            this.props.theme
                          ],
                      }}>
                      {this.way === 'depature'
                        ? moment(this.state.fromDate)
                            .format('MMM')
                            .toUpperCase()
                        : moment(this.fromDate).format('MMM')}
                      {'  '}
                      {this.way === 'depature'
                        ? moment(this.state.fromDate).format('YYYY')
                        : moment(this.fromDate).format('YYYY')}
                    </Text>
                    <Text style={{...Styles.dayText}}>
                      {this.way === 'depature'
                        ? moment(this.state.fromDate).format('dddd')
                        : moment(this.fromDate).format('dddd')}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  transform: [{rotateZ: '10deg'}],
                  height: wp(20),
                  width: 1,
                  backgroundColor: myColors.grey,
                  marginRight: wp(5),
                }}
              />
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text
                  style={{
                    color:
                      myColors.primaryActiveTextBoxLabelColor[this.props.theme],
                  }}>
                  RETURN
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{
                        ...Styles.dateText,
                        color:
                          myColors.primaryActiveTextBoxLabelColor[
                            this.props.theme
                          ],
                      }}>
                      {this.way === 'return'
                        ? moment(this.state.fromDate).format('DD')
                        : '--'}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        ...Styles.monthYearText,
                        color:
                          myColors.primaryActiveTextBoxLabelColor[
                            this.props.theme
                          ],
                      }}>
                      {this.way === 'return'
                        ? moment(this.state.fromDate)
                            .format('MMM')
                            .toUpperCase()
                        : ''}{' '}
                      {this.way === 'return'
                        ? moment(this.state.fromDate).format('YYYY')
                        : ''}
                    </Text>
                    <Text style={{...Styles.dayText}}>
                      {this.way === 'return'
                        ? moment(this.state.fromDate).format('dddd')
                        : ''}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{...Styles.weekContainer}}>
            {week.map(item => {
              return <Text style={{color: myColors.grey}}>{item}</Text>;
            })}
          </View>
          <CustomCalender
            onDatePress={date => this.setState({fromDate: date})}
            minDate={this.fromDate && this.fromDate}
            markedDate={
              this.fromDate && {
                [this.fromDate]: {
                  color: myColors.white,
                  backgroundColor:
                    this.props.theme === 'dark'
                      ? myColors.darkPink
                      : myColors.shadeBlue,
                },
              }
            }
            onDateSelect={date => {
              this.props.navigation.navigate('FlightSearchComponent', {
                date: date,
                way: this.way,
              });
            }}
          />
        </View>
      </GLOBAL>
    );
  }
}
const Styles = StyleSheet.create({
  flightSearchHeaderMainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: wp(2.5),
    paddingHorizontal: wp(3),
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: myColors.black,
    elevation: 10,
  },
  backIcon: {
    marginRight: wp(5),
  },
  thinText: {
    marginRight: wp(2),
    fontFamily: fonts.latoLight,
    fontSize: wp(5.5),
  },
  boldText: {
    fontFamily: fonts.latoBold,
    fontSize: wp(5.5),
  },
  dateContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    padding: wp(4),
  },
  dateText: {
    fontFamily: fonts.latoBold,
    marginRight: wp(2),
    fontSize: wp(10),
  },
  monthYearText: {
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  dayText: {
    color: 'grey',
    fontFamily: fonts.latoRegular,
    fontSize: wp(3.8),
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = state => {
  return {
    theme: state.ThemeReducer.theme,
  };
};
export default connect(
  mapStateToProps,
  null,
)(DateSelectionComponent);
