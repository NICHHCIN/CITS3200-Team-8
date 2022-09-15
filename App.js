import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import loginscreen from './screens/loginscreen';
import Container from './screens/navigator';
import HomeScreen from './screens/HomeScreen';
import Emergency from './screens/emergency';
import CheckInScreen from './screens/checkin';
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name = "CheckIn" component = {CheckInScreen} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name = "navigator" component = {Container} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
