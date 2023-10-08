import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { colors, constants } from '../constants';
import { HomeScreen, ContactScreen, AboutScreen, LocationScreen } from '../screens';

const { home, about, contact, locations } = constants;

const HomeDrawer = createDrawerNavigator();

export const Drawer = (): React.FC => {
  const { Navigator, Screen } = HomeDrawer;

  return (
    <Navigator
      screenOptions={{
        drawerActiveBackgroundColor: colors.lightGray,
        drawerPosition: 'right',
        headerShown: false,
        drawerType: 'front',
        drawerLabelStyle: {
          color: colors.black,
          fontSize: 20,
          fontWeight: 'normal',
          textTransform: 'uppercase',
        },
      }}>
      <Screen name={home} component={HomeScreen} />
      <Screen name={about} component={AboutScreen} />
      <Screen name={contact} component={ContactScreen} />
      <Screen name={locations} component={LocationScreen} />
    </Navigator>
  );
};
