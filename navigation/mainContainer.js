import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/navigation.style';

//Screens
 import AnnouncementsScreen from './screens/Announcements';
 import CheckInScreen from './screens/CheckIn'
 import EmergencyScreen from './screens/Emergency';
 import GalleryScreen from './screens/Gallery';
 import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Announcements') {
              iconName = focused ? 'mail-outline' : 'mail-outline';
            } else if (route.name === 'Gallery') {
              iconName = focused ? 'images-outline' : 'images-outline';
            } else if (route.name === 'CheckIn/Out') {
              iconName = focused ? 'checkbox-outline' : 'checkbox-outline';
            } else if (route.name === 'Emergency') {
              iconName = focused ? 'call-outline' : 'call-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarOptions: {
            showLabel: false
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="CheckIn/Out" component={CheckInScreen} />
        <Tab.Screen name="Emergency" component={EmergencyScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
