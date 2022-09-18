import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import loginscreen from './screens/loginscreen';
// import Container from './screens/navigator';
import HomeScreen from './screens/HomeScreen';
import Emergency from './screens/emergency';
import CheckInScreen from './screens/checkin';
const Stack = createNativeStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
        <Stack.Screen options={{ headerShown: false}} name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Tab = createBottomTabNavigator()
function Tabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} /> 
        <Tab.Screen name = "CheckIn" component = {CheckInScreen} />
        <Tab.Screen name="Emergency" component={Emergency} />
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