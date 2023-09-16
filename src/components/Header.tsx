import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Header as RNEHeader } from '@rneui/themed';

import { colors, platform, constants } from '../constants';
import { logo } from '../../assets/images';

const { cnciBlue, white } = colors;
const { isMobile, isMobileWidth, isWeb } = platform;
const { about, locations, contact, home } = constants;

const navHeaders = [about, locations, contact];

export const Header = () => {
  const { navigate, dispatch } = useNavigation();

  const HeaderLeftComponent = () => (
    <TouchableOpacity
      style={styles.sideContainer}
      onPress={() => {
        navigate(home);
      }}
    >
      <Image style={styles.logo} source={logo} />
    </TouchableOpacity>
  );

  const WebCenterComponent = () =>
    !isMobile &&
    !(isMobileWidth && isWeb) && (
      <View style={styles.middleContainer}>
        {navHeaders.map((item: string, index: number) => (
          <TouchableOpacity
            onPress={() => {
              navigate(item);
            }}
          >
            <Text style={styles.middleContainerText} key={index}>
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );

  return (
    <RNEHeader
      leftComponent={<HeaderLeftComponent />}
      rightComponent={
        <TouchableOpacity
          onPress={() => {
            dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <Ionicons name="menu-outline" color={white} size={40} />
        </TouchableOpacity>
      }
      rightContainerStyle={styles.sideContainer}
      centerComponent={<WebCenterComponent />}
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
    margin: 5,
  },
  middleContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    gap: 100,
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
