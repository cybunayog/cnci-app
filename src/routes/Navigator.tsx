import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages';

const RootStack = createNativeStackNavigator();
const HomeDrawerStack = createNativeStackNavigator();

const HomeDrawer = () => {
  const { Navigator, Screen } = HomeDrawerStack;

  return (
    <Navigator>
      <Screen
        name="HomeDrawer"
        component={Home}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export const Navigator = () => {
  const { Navigator: RootNavigator, Screen } = RootStack;

  return (
    <NavigationContainer>
      <RootNavigator initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeDrawer}
          options={{ headerShown: false }}
        />
      </RootNavigator>
    </NavigationContainer>
  );
};
