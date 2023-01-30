import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackNavigatorParamList } from './types';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Register } from '../screens/Register';
import { Update } from '../screens/Update';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen name="Update" component={Update} />
    </HomeStack.Navigator>
  );
}
