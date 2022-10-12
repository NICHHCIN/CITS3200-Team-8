import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import loginscreen from './screens/loginscreen';
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
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
          <Stack.Screen options={{ headerShown: false}} name="Main" component={Main} />
          <Stack.Screen options={{ headerShown: false}} name = "PSpart1" component = {App1} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App