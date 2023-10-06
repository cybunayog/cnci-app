import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Drawer } from "./Drawer";
import {
  HomeScreen,
  AboutScreen,
  ContactScreen,
  LocationScreen,
} from "../screens";
import { strings } from "../constants";

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const HomeStack = () => {
  const { Navigator, Screen } = MainStack;

  return (
    <Navigator
      initialRouteName={strings.home}
      screenOptions={{ headerShown: false }}
    >
      <Screen name={strings.home} component={HomeScreen} />
      <Screen name={strings.about} component={AboutScreen} />
      <Screen name={strings.contact} component={ContactScreen} />
      <Screen name={strings.locations} component={LocationScreen} />
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
