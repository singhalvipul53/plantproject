import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  CARTICON,
  CATHANDICON,
  DUMMYPLANT,
  HEARTICON,
  PLANTBACKGROUND,
} from '../../Constant';
import {styles} from './styles';

const PlantComponent = ({item, navigation}) => {
  const movetodetailpage = () => {
    navigation.navigate('Detail', {
      detail: item,
    });
  };
  return (
    <TouchableOpacity onPress={movetodetailpage} style={{marginTop: 50}}>
      <ImageBackground
        source={PLANTBACKGROUND}
        style={styles.plantimagebackground}
        imageStyle={{borderRadius: 30}}>
        <CategoryComp item={item} />
        <Text style={styles.plantname}>{item?.name}</Text>
        <View style={styles.flexrow}>
          <Text style={styles.plantprice}>${item?.price}</Text>
          <View style={styles.flexrow}>
            <TouchableOpacity>
              <Image source={HEARTICON} style={styles.hearticon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={CARTICON} style={styles.carticon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.absimagecont}>
          <Image source={{uri: item?.image}} style={styles.plantimage} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PlantComponent;

export const CategoryComp = ({item}) => {
  return (
    <View style={styles.flexrow}>
      <Text style={styles.plantcondition}>{item?.category}</Text>
      <Image source={CATHANDICON} />
    </View>
  );
};
