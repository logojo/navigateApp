import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/presentation/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
