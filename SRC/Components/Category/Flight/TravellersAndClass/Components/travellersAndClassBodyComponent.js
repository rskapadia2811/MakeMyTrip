import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../Helpers/screenHelper';
import {fonts} from '../../../../../Helpers/variableHelper';
import {myColors} from '../../../../../Helpers/ColorHelper';
import LinearGradient from 'react-native-linear-gradient';

const TravellersAndClassBodyComponent = ({
  theme,
  navigation,
  adult,
  infant,
  child,
  classes,
}) => {
  let classs = ['Economy', 'Premium Economy', 'Business'];
  const [adults, setAdults] = useState(adult);
  const [childs, setChilds] = useState(child);
  const [infants, setInfants] = useState(infant);
  const [classes1, setClass] = useState(classes);
  const [ind, setInd] = useState(0);
  useEffect(() => {
    classs.map((item, index) => {
      if (item === classes1) {
        setInd(index);
      }
    });
  }, [classes1, classs]);
  const classRenderData = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setClass(item);
          setInd(index);
        }}
        style={{
          ...Styles.classSubContainer,
          backgroundColor:
            index === ind
              ? myColors.primaryActiveTextBoxLabelColor[theme]
              : myColors.white,
        }}>
        <Text
          style={{
            ...Styles.classText,
            color: ind === index ? myColors.white : myColors.black,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{...Styles.travellersAndClassBodyContainer}}>
          <View>
            <Text style={{color: myColors.grey, ...Styles.addNumberOfText}}>
              ADD NUMBERS OF TRAVELLERS
            </Text>
          </View>

          <View style={{...Styles.singleContainer}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  ...Styles.bigText,
                  color: myColors.primaryTextColor[theme],
                }}>
                Adult
                <Text
                  style={{
                    ...Styles.mediumText,
                    color: myColors.primaryTextColor[theme],
                  }}>
                  {'   '}
                  12 yrs & above
                </Text>
                <Text style={{...Styles.smallText}}>
                  {'\n'}on the day of travel
                </Text>
              </Text>
            </View>

            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{...Styles.incDecContainer}}>
                <TouchableOpacity
                  onPress={() => {
                    adults > 0 ? setAdults(adults - 1) : 0;
                  }}>
                  <Text style={{...Styles.plusMinusText}}>-</Text>
                </TouchableOpacity>
                <Text style={{...Styles.incDecNumText}}>{adults}</Text>
                <TouchableOpacity onPress={() => setAdults(adults + 1)}>
                  <Text style={{...Styles.plusMinusText}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{...Styles.singleContainer}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  ...Styles.bigText,
                  color: myColors.primaryTextColor[theme],
                }}>
                Children
                <Text
                  style={{
                    ...Styles.mediumText,
                    color: myColors.primaryTextColor[theme],
                  }}>
                  {'   '}2 - 12 yrs
                </Text>
                <Text style={{...Styles.smallText}}>
                  {'\n'}on the day of travel
                </Text>
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{...Styles.incDecContainer}}>
                <TouchableOpacity
                  onPress={() => {
                    childs > 0 ? setChilds(childs - 1) : 0;
                  }}>
                  <Text style={{...Styles.plusMinusText}}>-</Text>
                </TouchableOpacity>
                <Text style={{...Styles.incDecNumText}}>{childs}</Text>
                <TouchableOpacity onPress={() => setChilds(childs + 1)}>
                  <Text style={{...Styles.plusMinusText}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{...Styles.singleContainer}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  ...Styles.bigText,
                  color: myColors.primaryTextColor[theme],
                }}>
                Infant
                <Text
                  style={{
                    ...Styles.mediumText,
                    color: myColors.primaryTextColor[theme],
                  }}>
                  {'   '}Under 2 yrs
                </Text>
                <Text style={{...Styles.smallText}}>
                  {'\n'}on the day of travel
                </Text>
              </Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{...Styles.incDecContainer}}>
                <TouchableOpacity
                  onPress={() => {
                    infants > 0 ? setInfants(infants - 1) : 0;
                  }}>
                  <Text style={{...Styles.plusMinusText}}>-</Text>
                </TouchableOpacity>
                <Text style={{...Styles.incDecNumText}}>{infants}</Text>
                <TouchableOpacity onPress={() => setInfants(infants + 1)}>
                  <Text style={{...Styles.plusMinusText}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={{color: myColors.grey, ...Styles.addNumberOfText}}>
              CHOOSE CABIN CLASS
            </Text>
          </View>
          <View style={{...Styles.classContainer}}>
            <FlatList
              horizontal={true}
              data={classs}
              renderItem={(item, index) => classRenderData(item, index)}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          zIndex: 5,
          alignSelf: 'center',
          bottom: hp(5),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FlightSearchComponent', {
              adult: adults,
              child: childs,
              infant: infants,
              classes: classes1,
            });
          }}>
          <LinearGradient
            colors={myColors.primaryGradiantColor[theme]}
            style={{...Styles.searchButtonContainer}}>
            <Text style={{...Styles.searchText}}>DONE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  travellersAndClassBodyContainer: {
    flex: 1,
    padding: wp(4),
  },
  addNumberOfText: {
    fontSize: wp(3),
    color: myColors.grey,
    fontFamily: fonts.latoBold,
  },
  singleContainer: {
    marginBottom: wp(8),
    flex: 1,
    flexDirection: 'row',
    marginTop: wp(3),
    justifyContent: 'center',
  },
  bigText: {
    fontSize: wp(5),
    fontFamily: fonts.latoBold,
  },
  mediumText: {
    fontSize: wp(3.2),
    fontFamily: fonts.latoRegular,
  },
  smallText: {
    fontSize: wp(3),
    fontFamily: fonts.latoRegular,
    color: myColors.grey,
  },
  incDecContainer: {
    backgroundColor: myColors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp(30),
    height: wp(10),
    borderRadius: 5,
    shadowColor: myColors.black,
    shadowRadius: 5,
    shadowOffset: {x: 0, y: 0},
    shadowOpacity: 0.5,
    elevation: 10,
  },
  plusMinusText: {
    color: myColors.grey,
    fontFamily: fonts.latoBlack,
    fontSize: wp(8),
  },
  incDecNumText: {
    color: myColors.black,
    fontSize: wp(5),
    fontFamily: fonts.latoBlack,
  },
  classContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  classSubContainer: {
    marginTop: wp(5),
    alignItems: 'center',
    backgroundColor: myColors.white,
    margin: wp(1),
    borderRadius: 5,
    paddingHorizontal: wp(3),
    paddingVertical: wp(2),
    shadowColor: myColors.black,
    shadowRadius: 3,
    shadowOffset: {x: 0, y: 0},
    shadowOpacity: 0.5,
    elevation: 10,
  },
  classText: {
    fontSize: wp(4),
    fontFamily: fonts.latoBold,
  },
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
export default TravellersAndClassBodyComponent;
