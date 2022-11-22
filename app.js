import React from 'react';
import AuthenticateScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';
import HomeScreen from './screens/home/HomeScreen';
import SchedulingScreen from './screens/schedulingScreen/SchedulingScreen';
import ManagerScreen from './screens/managerBarbershop/ManagerScreen';
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manager" component={ManagerScreen} />
        <Stack.Screen name="Scheduling" component={SchedulingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
