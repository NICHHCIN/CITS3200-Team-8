import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import { getAnnouncements } from './redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Provider } from 'react-redux'
//import { createStore, applyMiddleware } from 'redux'
//import Reducers from './redux/reducers'
//import thunk from 'redux-thunk'
//const store = createStore(Reducers, applyMiddleware(thunk))

import Profile from './profilescreen' 
import Emergency from './emergency';
import CheckInScreen from './checkin';
import HomeScreen from './homescreen';
import Policies from './policies';
import announcementsscreen from './announcementsscreen';

const Stack = createNativeStackNavigator()

const MyTheme = {
  dark: false,
  colors: {
    primary: '#ffa74f',
    background: '#FFFFFF',
    card: '#ff962b',
    text: '#FFFFFF',
    border: '#ff962b',
    notification: 'rgb(255, 69, 58)',
  },
};


const Tab = createBottomTabNavigator();
export class Main extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Emergency') {
              iconName = focused ? 'call-sharp' : 'call-outline';
            } else if (route.name === 'CheckIn') {
              iconName = focused ? 'toggle-sharp' : 'toggle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
            } else if (route.name === 'Policies') {
              iconName = focused ? 'book-sharp' : 'book-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarOptions: {
            showLabel: false
          },
          tabBarActiveTintColor: '#FFDAB9',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle : { backgroundColor : '#ffb04f'},
        })
        
        }
      >

        <Tab.Screen name = "Home" component = {HomeScreen} />
        <Tab.Screen name = "Announcements" component = {announcementsscreen} />
        <Tab.Screen name = "Policies" component = {Policies} />
        <Tab.Screen name = "CheckIn" component = {CheckInScreen} />
        <Tab.Screen name="Emergency" component={Emergency} />         
        <Tab.Screen name = "Profile" component = {Profile} />
      </Tab.Navigator>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});