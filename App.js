import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import loginscreen from './screens/loginscreen';
import App1 from './screens/popart1';
import { Main } from './screens/navigator';
import App2 from './screens/popart2';
import App3 from './screens/popart3';
import App4 from './screens/popart4';
import App5 from './screens/popart5';
import App13 from './screens/policies';
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
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
          <Stack.Screen options={{ headerShown: false}} name="Main" component={Main} />
          <Stack.Screen options={{ headerShown: false}} name = "PSpart1" component = {App1} />
        <Stack.Screen options={{ headerShown: false}} name = "PSpart2" component = {App2} />
        <Stack.Screen options={{ headerShown: false}} name = "PSpart3" component = {App3} />
        <Stack.Screen options={{ headerShown: false}} name = "PSpart4" component = {App4} />
        <Stack.Screen options={{ headerShown: false}} name = "PSpart5" component = {App5} />
        <Stack.Screen options={{ headerShown: false}} name = "Polic" component = {App13} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App