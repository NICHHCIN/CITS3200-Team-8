import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAnnouncements, getLocation } from '../redux/actions/index'

//Screens
//  import AnnouncementsScreen from './screens/Announcements';
//  import CheckInScreen from './screens/CheckIn'
//  import EmergencyScreen from './screens/Emergency';
import HomeScreen from './HomeScreen';
import Emergency from './emergency';
//  import GalleryScreen from './screens/Gallery';
//  import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();
export class Main extends Component {
  componentDidMount() {
    this.props.getAnnouncements;
    this.props.getLocation;
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'mail-outline' : 'mail-outline';
              // } else if (route.name === 'Gallery') {
              //   iconName = focused ? 'images-outline' : 'images-outline';
              // } else if (route.name === 'CheckIn/Out') {
              //   iconName = focused ? 'checkbox-outline' : 'checkbox-outline';
              } else if (route.name === 'Emergency') {
                iconName = focused ? 'call-outline' : 'call-outline';
              // } else if (route.name === 'Profile') {
              //   iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
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
          {/* <Tab.Screen name="Announcements" component={AnnouncementsScreen} /> */}
          {/* <Tab.Screen name="Gallery" component={GalleryScreen} /> */}
          {/* <Tab.Screen name="CheckIn/Out" component={CheckInScreen} /> */}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Emergency" component={Emergency} />
          
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


const mapStatetoProps = (store) => ({
  currentLocation: store.locationState.currentLocation
})

const mapDispatchProps = (dispatch) => bindActionCreators({getLocation, getAnnouncements},dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);