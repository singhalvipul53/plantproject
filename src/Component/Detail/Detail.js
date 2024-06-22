import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../Home/styles';
import {CARTICON, DETAILBACKGROUND, HEARTICON} from '../../Constant';
import {CategoryComp} from '../Home/PlantComponent';
import {StatusBarBac} from '../Home/Home';

const Detail = ({route, navigation}) => {
  let {detail} = route.params;
  useEffect(() => {
    console.log('7', detail);
  }, [detail]);
  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBarBac color={'#9ce5cc'} />
      <ScrollView>
        <ImageBackground
          source={DETAILBACKGROUND}
          style={styles.detailheaderback}>
          <CategoryComp item={detail} />
          <Text style={[styles.detailplantname, {marginBottom: 20}]}>
            {detail?.name}
          </Text>
          <View style={{marginBottom: 10}}>
            <Text style={styles.priceheading}>Price</Text>
            <Text style={styles.detailpagepricetext}>${detail?.price}</Text>
          </View>
          <View>
            <Text style={styles.priceheading}>Size</Text>
            <Text style={styles.detailpagepricetext}>{detail?.size}</Text>
          </View>

          <View style={styles.detailplantabs}>
            <Image
              source={{uri: detail?.image}}
              style={styles.detailplantimage}
            />
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
