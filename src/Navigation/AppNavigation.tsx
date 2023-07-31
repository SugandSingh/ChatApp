import * as React from 'react';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './Routes';
import SplashScreen from '../Screens/Auth/SplashScreen /SplashScreen';
import LoginScreen from '../Screens/Auth/LoginScreen/LoginScreen';
import WelcomeScreen from '../Screens/Auth/WelcomeScreen/WelcomeScreen';

type RegisterParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RegisterParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={Routes.WELCOME_SCREEN} component={WelcomeScreen} />
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
