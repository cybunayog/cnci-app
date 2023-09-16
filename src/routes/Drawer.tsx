import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  HomeScreen,
  ContactScreen,
  AboutScreen,
  LocationScreen,
} from '../screens';
import { colors, strings } from '../constants';

const HomeDrawer = createDrawerNavigator();

export const Drawer = () => {
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
      }}
    >
      <Screen name={strings.home} component={HomeScreen} />
      <Screen name={strings.about} component={AboutScreen} />
      <Screen name={strings.contact} component={ContactScreen} />
      <Screen name={strings.locations} component={LocationScreen} />
    </Navigator>
  );
};
