import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import loginscreen from './screens/loginscreen';
import ProfileScreen from './screens/profilescreen';
import Emergency from './screens/emergency';
import CheckInScreen from './screens/checkin';
import HomeScreen from './screens/HomeScreen';
import Policies from './screens/policies';
import App1 from './screens/popart1';

const Stack = createNativeStackNavigator()

const MyTheme = {
  dark: false,
  colors: {
    primary: '#ffa74f',
    background: '#FFFFFF',
    card: '#ff962b',
    text: '#FFFFFF',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
      >
        <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
        <Stack.Screen options={{ headerShown: false}} name="Tabs" component={Tabs} />
        <Stack.Screen options={{ headerShown: false}} name = "PSpart1" component = {App1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const Tab = createBottomTabNavigator()
function Tabs() {
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
            showLabel: false,
          },
          tabBarActiveTintColor: '#FFDAB9',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle : { backgroundColor : '#ffb04f'},
        })
        
        }
      >

        <Tab.Screen name = "Home" component = {HomeScreen} />
        <Tab.Screen name = "Policies" component = {Policies} />
        <Tab.Screen name = "CheckIn" component = {CheckInScreen} />
        <Tab.Screen name="Emergency" component={Emergency} />         
        <Tab.Screen name = "Profile" component = {ProfileScreen} />
        
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App