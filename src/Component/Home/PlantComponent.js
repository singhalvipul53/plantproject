import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  // Animated,
  Easing,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  CARTICON,
  CATHANDICON,
  DUMMYPLANT,
  HEARTICON,
  PLANTBACKGROUND,
} from '../../Constant';
import {styles} from './styles';
import Animated, {useSharedValue} from 'react-native-reanimated';

const PlantComponent = ({item, navigation}) => {
  const movetodetailpage = () => {
    navigation.navigate('Detail', {
      detail: item,
    });
  };
  console.log('24', item?.image);
  // return (
  //   <View style={{flex: 1}}>
  //     <Animated.View
  //       style={{width: 150, height: 150, backgroundColor: 'green'}}
  //       sharedTransitionTag="sharedTag"
  //     />
  //     <Button
  //       title="Go to Details"
  //       onPress={() => navigation.navigate('Detail')}
  //     />
  //   </View>
  // );
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
        <Animated.View style={styles.absimagecont}>
          <Animated.Image
            sharedTransitionTag="sharedTag"
            source={{uri: item?.image}}
            style={[styles.plantimage]}
          />
        </Animated.View>
        {/* <TouchableOpacity onPress={handleanimation} style={styles.absimagecont}>
          <Animated.Image
            source={{uri: item?.image}}
            style={[
              styles.plantimage,
              {
                transform: [
                  {
                    translateX: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 120],
                    }),
                  },
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 25],
                    }),
                  },
                  {
                    scaleX: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 15],
                    }),
                  },
                  {
                    scaleY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 12.5],
                    }),
                  },
                ],
              },
            ]}
          />
        </TouchableOpacity> */}
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
