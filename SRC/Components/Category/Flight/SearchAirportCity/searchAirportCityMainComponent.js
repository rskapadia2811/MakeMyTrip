import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../Helpers/screenHelper';
import {searchAirportCity} from '../../../../Actions/searchAirportCityAction';
import {fonts} from '../../../../Helpers/variableHelper';
import GLOBAL from '../../../GLOBAL';
import {connect} from 'react-redux';
import CustomTextInput from '../../../../Common/CustomTextInput';
import CustomIcon from '../../../../Common/CustomIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
class SearchAirportCityMainComponent extends Component {
  constructor() {
    super();
    this.state = {
      airportCity: '',
      airportData: '',
    };
  }
  componentDidMount(): void {
    this.props
      .searchAirportCity('Surat')
      .then(response => {
        this.setState({
          airportData: response,
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.wayData = this.props.navigation.getParam('wayData');
  }

  airportCityRenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          let data;
          data = {
            wayData: this.wayData,
            city: item && item.ct && item.ct.n && item.ct.n,
            cityCode: item && item.iata && item.iata,
          };
          this.props.navigation.navigate('FlightSearchComponent', data);
        }}>
        <View style={{...Styles.singleAirportItem}}>
          <View style={{flexDirection: 'column', width: wp(70)}}>
            <Text style={{...Styles.cityNameText}}>
              {item.ct.n + ', ' + item.xtr.cnt_n}
            </Text>
            <Text style={{...Styles.airportNameText}}>{item.n}</Text>
          </View>
          <View style={{...Styles.airportCodeContainer}}>
            <Text style={{...Styles.airportCodeText}}>{item.iata}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  emptyAirportCityRenderItem = () => {
    return (
      <View style={{...Styles.emptyContainer}}>
        <Image
          resizeMode={'contain'}
          source={require('../../../../Assets/Images/NoDataFound/ndf1.png')}
          style={{width: wp(70), height: wp(50)}}
        />
      </View>
    );
  };
  render() {
    return (
      <GLOBAL>
        <View style={{...Styles.searchAirportCityHeaderContainer}}>
          <CustomIcon
            IconType={MaterialIcons}
            name={'arrow-back'}
            size={wp(6)}
          />
          <CustomTextInput
            showLabel={false}
            showBottomBorder={false}
            placeHolderText={'Enter City/Airport Name'}
            textInputFontFamily={fonts.latoBlack}
            showPlaceHolderOnFocus={true}
            autoFocus={true}
            onChangeText={text => {
              this.props
                .searchAirportCity(text)
                .then(response => {
                  this.setState({
                    airportData: response,
                  });
                })
                .catch(error => {
                  console.log(error);
                });
              this.setState({airportCity: text});
            }}
            autoCapitalize={true}
            style={{marginLeft: wp(3), paddingBottom: wp(5)}}
            data={this.state.airportCity}
          />
          <View style={{...Styles.clearTextContainer}}>
            <TouchableOpacity onPress={() => this.setState({airportCity: ''})}>
              <Text style={{...Styles.clearText}}>CLEAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{...Styles.searchAirportCityBodyContainer}}>
          <FlatList
            keyExtractor={item => item._id}
            data={this.state.airportData}
            renderItem={(item, index) =>
              this.airportCityRenderItem(item, index)
            }
            ListEmptyComponent={() => this.emptyAirportCityRenderItem()}
          />
        </View>
      </GLOBAL>
    );
  }
}
const Styles = StyleSheet.create({
  searchAirportCityHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp(5),
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    elevation: 10,
  },
  clearTextContainer: {
    position: 'absolute',
    paddingVertical: wp(2),
    paddingHorizontal: wp(5),
    right: wp(0),
    backgroundColor: '#FFFFFF',
  },
  clearText: {
    fontFamily: fonts.latoBold,
    fontSize: wp(3),
  },
  searchAirportCityBodyContainer: {},
  singleAirportItem: {
    padding: wp(5),
    flexDirection: 'row',
    height: wp(15),
  },
  airportCodeContainer: {
    width: wp(20),
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cityNameText: {
    fontFamily: fonts.latoRegular,
    fontSize: wp(4.5),
  },
  airportNameText: {
    fontFamily: fonts.latoRegular,
    fontSize: wp(4),
    color: 'grey',
  },
  airportCodeText: {
    fontFamily: fonts.latoBlack,
    fontSize: wp(5),
    color: 'grey',
  },
  emptyContainer: {
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(-20),
  },
});
const mapDispatchToProps = {
  searchAirportCity,
};
export default connect(
  null,
  mapDispatchToProps,
)(SearchAirportCityMainComponent);
