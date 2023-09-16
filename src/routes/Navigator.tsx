import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Drawer } from "./Drawer";
import {
  HomeScreen,
  AboutScreen,
  ContactScreen,
  LocationScreen,
} from "../screens";
import { screens } from "../constants/constants";

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const HomeStack = () => {
  const { Navigator, Screen } = MainStack;

  return (
    <Navigator
      initialRouteName={screens.HomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <Screen name={screens.HomeScreen} component={HomeScreen} />
      <Screen name={screens.AboutScreen} component={AboutScreen} />
      <Screen name={screens.ContactScreen} component={ContactScreen} />
      <Screen name={screens.LocationScreen} component={LocationScreen} />
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
        <Screen name="HomeDrawer" component={Drawer} />
        <Screen name="HomeStack" component={HomeStack} />
      </RootNavigator>
    </NavigationContainer>
  );
};
