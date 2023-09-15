import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages';

const RootStack = createNativeStackNavigator();
const HomeDrawerStack = createNativeStackNavigator();

const HomeDrawer = () => {
  const { Navigator, Screen } = HomeDrawerStack;

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export const Navigator = () => {
  const { Navigator: RootNavigator, Screen } = RootStack;

  return (
    <NavigationContainer>
      <RootNavigator
        initialRouteName="HomeDrawer"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="HomeDrawer" component={HomeDrawer} />
      </RootNavigator>
    </NavigationContainer>
  );
};
