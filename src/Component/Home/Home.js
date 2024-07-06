import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import PlantComponent from './PlantComponent';
import {styles} from './styles';
import apiHook from '../CustomHook/ApiHook';
// import ApiHook from '../CustomHook.js/ApiHook';

const Home = ({navigation}) => {
  const {getData, data} = apiHook();
  useEffect(() => {
    fetchplantlist();
  }, []);
  const fetchplantlist = async () => {
    await getData('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q');
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.mainbody}>
          {/* Main Plant Component */}
          {data.map((item, index) => (
            <PlantComponent item={item} key={index} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

export const StatusBarBac = ({color}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        backgroundColor: color,
        width: '100%',
        height: insets ? insets['top'] : 40,
      }}></View>
  );
};
