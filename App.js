import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import LoginForm from './screens/LoginForm';
import SignupForm from './screens/SignupForm';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='LogIn' component={LoginForm}/>
        <Stack.Screen name='SignUp' component={SignupForm}/>
      </Stack.Navigator>
    }</NavigationContainer>
  );
}