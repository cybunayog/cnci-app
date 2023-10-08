import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Drawer } from './Drawer';
import { strings } from '../constants';
import { HomeScreen, AboutScreen, ContactScreen, LocationScreen } from '../screens';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const HomeStack = (): React.FC => {
  const { Navigator, Screen } = MainStack;

  return (
    <Navigator initialRouteName={strings.home} screenOptions={{ headerShown: false }}>
      <Screen name={strings.home} component={HomeScreen} />
      <Screen name={strings.about} component={AboutScreen} />
      <Screen name={strings.contact} component={ContactScreen} />
      <Screen name={strings.locations} component={LocationScreen} />
    </Navigator>
  );
};

export const Navigator = (): React.FC => {
  const { Navigator: RootNavigator, Screen } = RootStack;

  return (
    <NavigationContainer>
      <RootNavigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: false }}>
        <Screen name="HomeDrawer" component={Drawer} />
        <Screen name="HomeStack" component={HomeStack} />
      </RootNavigator>
    </NavigationContainer>
  );
};
