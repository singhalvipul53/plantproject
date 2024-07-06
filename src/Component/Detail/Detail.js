import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../Home/styles';
import {CARTICON, DETAILBACKGROUND, HEARTICON} from '../../Constant';
import {CategoryComp} from '../Home/PlantComponent';
import {StatusBarBac} from '../Home/Home';
import Animated from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';

const Detail = ({route, navigation}) => {
  let {detail} = route.params;
  useEffect(() => {
    console.log('7', detail);
  }, [detail]);
  // return (
  //   <View style={{flex: 1, marginTop: 50}}>
  //     <Animated.View
  //       style={{width: 100, height: 100, backgroundColor: 'green'}}
  //       sharedTransitionTag="sharedTag"
  //     />
  //     <Button title="Go back" onPress={() => navigation.navigate('Home')} />
  //   </View>
  // );
  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBarBac color={'#9ce5cc'} />
      <ScrollView>
        <ImageBackground
          source={DETAILBACKGROUND}
          style={styles.detailheaderback}>
          <CategoryComp item={detail} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.detailplantname, {marginBottom: 20}]}>
              {detail?.name}
            </Text>
          </TouchableOpacity>
          <View style={{marginBottom: 10}}>
            <Text style={styles.priceheading}>Price</Text>
            <Text style={styles.detailpagepricetext}>${detail?.price}</Text>
          </View>
          <View>
            <Text style={styles.priceheading}>Size</Text>
            <Text style={styles.detailpagepricetext}>{detail?.size}</Text>
          </View>
          <View
            onPress={() => navigation.goBack()}
            style={styles.detailplantabs}>
            <SharedElement id={`item.${detail.id}.photo`}>
              <Image
                source={{uri: detail?.image}}
                style={styles.detailplantimage}
              />
            </SharedElement>
          </View>
        </ImageBackground>
        <View style={{padding: 20}}>
          <Text style={styles.detailpageheader}>Plant Bio</Text>
          <Text style={styles.detailpagebio}>{detail?.bio}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
