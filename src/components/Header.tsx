import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Header as RNEHeader } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { logo } from '../../assets/images';
import { colors, constants } from '../constants';

const { cnciBlue, white } = colors;
const { about, locations, contact, home } = constants;

// const navHeaders = [about, locations, contact];

export const Header = (): React.JSX.Element => {
  const { navigate, dispatch } = useNavigation();

  const HeaderLeftComponent = (): React.JSX.Element => (
    <TouchableOpacity
      style={styles.sideContainer}
      onPress={() => {
        navigate(home);
      }}>
      <Image style={styles.logo} source={logo} />
    </TouchableOpacity>
  );

  return (
    <RNEHeader
      leftComponent={<HeaderLeftComponent />}
      rightComponent={
        <TouchableOpacity
          onPress={() => {
            dispatch(DrawerActions.toggleDrawer());
          }}>
          <Ionicons name="menu-outline" color={white} size={40} />
        </TouchableOpacity>
      }
      rightContainerStyle={styles.sideContainer}
      containerStyle={styles.headerContainer}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 85,
    backgroundColor: cnciBlue,
  },
  sideContainer: {
    margin: 50,
  },
  middleContainerText: {
    flex: 1,
    color: white,
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
