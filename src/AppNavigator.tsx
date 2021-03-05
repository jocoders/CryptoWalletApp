import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './screens/Auth/AuthScreen';
import HomeScreen from './screens/Home/HomeScreen';
import IntroScreen from './screens/Intro/IntroScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Intro'} component={IntroScreen} />
        <Stack.Screen name={'Auth'} component={AuthScreen} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
