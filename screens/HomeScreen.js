//This page shows user's name and location, and shows them animated weather data for their location. 

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Linking, } from 'react-native';
import { auth } from '../firebase';
import { SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons'
import firebase from 'firebase/compat';
require('firebase/firestore')

import {
  Avatar,

  Title,
  Caption,

  TouchableRipple,
} from 'react-native-paper';

//import AnimatedWeather from 'react-native-animated-weather';

const HomeScreen = () => {
  const location = "Perth";
  const [weather, setWeather] = useState("CLEAR_DAY");
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7a6b2a2c7b6d6b2f6b2a2c7b6d6b2f6b&units=metric`)
      .then(res => res.json())
      .then(json => {
        setWeather(json.weather[0].main);
        setTemperature(json.main.temp);
      });
  }
  );  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{

              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>{location}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{location}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>0422 222 222</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}> {auth.currentUser?.email}</Text>
        </View>
      </View>
            
      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>Temperature</Title>
          <Caption>{temperature}°C</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>Weather</Title>
          <Caption>{weather}</Caption>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*
//random screen to test navigation
import  React  from  'react' ;

import  {  View ,  Text ,  StyleSheet  }  from  'react-native' ;

const  HomeScreen  = ( {  navigation  } )  =>  {
    return  (
        <View  style = { styles . container } >
            <Text  style = { styles . text } > Home Screen </Text >
        </View >
    ) ;
}

export  default  HomeScreen ;

const  styles  =  StyleSheet . create ( {
    container : {
        flex :  1 ,
        alignItems :  'center' ,
        justifyContent :  'center' ,
    } ,
    text : {
        fontSize :  20 ,
        fontWeight :  'bold' ,
    } ,
} ) ;


*/

