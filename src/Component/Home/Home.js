import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import PlantComponent from './PlantComponent';
import {styles} from './styles';
import axios from 'axios';

const Home = ({navigation}) => {
  const [plantlist, setplantlist] = useState([]);
  useEffect(() => {
    fetchplantlist();
  }, []);
  const fetchplantlist = () => {
    axios
      .get('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q')
      .then(res => {
        console.log('16', res.data);
        setplantlist(res.data);
      })
      .catch(err => {
        console.log('18', err);
      });
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.mainbody}>
          {/* Main Plant Component */}
          {plantlist.map((item, index) => (
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
