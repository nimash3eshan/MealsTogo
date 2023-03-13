import React from 'react';
import {StatusBar} from 'react-native';
import {RestaurantScreen} from './src/features/restaurants/screens/restaurants.screen';

const App = () => {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
