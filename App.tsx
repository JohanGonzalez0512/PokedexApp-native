import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator/> */}
      <Tabs/>
    </NavigationContainer>
  );
}