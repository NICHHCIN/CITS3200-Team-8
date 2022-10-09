import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './screens/redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(Reducers, applyMiddleware(thunk))

import loginscreen from './screens/loginscreen';
import { Main } from './screens/navigator';

const Stack = createNativeStackNavigator()

function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false}} name="Login" component={loginscreen} />
          <Stack.Screen options={{ headerShown: false}} name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App