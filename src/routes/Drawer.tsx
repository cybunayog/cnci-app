import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  HomeScreen,
  ContactScreen,
  AboutScreen,
  LocationScreen,
} from "../screens";
import { screens } from "../constants/constants";

const HomeDrawer = createDrawerNavigator();

export const Drawer = () => {
  const { Navigator, Screen } = HomeDrawer;

  return (
    <Navigator screenOptions={{ drawerPosition: "right", headerShown: false }}>
      <Screen name={"Home"} component={HomeScreen} />
      <Screen name={"About"} component={AboutScreen} />
      <Screen name={"Contact"} component={ContactScreen} />
      <Screen name={"Location"} component={LocationScreen} />
    </Navigator>
  );
};
