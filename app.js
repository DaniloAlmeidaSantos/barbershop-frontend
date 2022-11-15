import React from 'react';
import AuthenticateScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalsRouteName="Authenticate"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Authenticate" component={AuthenticateScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
