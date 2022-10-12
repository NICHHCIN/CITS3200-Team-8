import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";

//import { Provider } from 'react-redux'
//import { createStore, applyMiddleware } from 'redux'
// import Reducers from './screens/redux/reducers'
//import thunk from 'redux-thunk'
//const store = createStore(Reducers, applyMiddleware(thunk))

import loginscreen from './screens/loginscreen';
import Profile from './screens/profile';
import Emergency from './screens/emergency';
import CheckInScreen from './screens/checkin';
import HomeScreen from './screens/homescreen';
import Policies from './screens/policies';
import App1 from './screens/popart1';
import { Main } from './screens/navigator';

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

function App() {
  
  return (
    //<Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
          <Stack.Screen options={{ headerShown: false}} name="Tabs" component={Tabs} />
          <Stack.Screen options={{ headerShown: false}} name="Main" component={Main} />
          <Stack.Screen options={{ headerShown: false}} name = "PSpart1" component = {App1} />
        </Stack.Navigator>
      </NavigationContainer>
      //</Provider>
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
        <Tab.Screen name = "Profile" component = {Profile} />
        
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