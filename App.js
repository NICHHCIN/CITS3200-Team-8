import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import loginscreen from './screens/loginscreen';
import { Main } from './screens/navigator';

const Stack = createNativeStackNavigator()

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
        <Stack.Screen options={{ headerShown: false}} name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App