import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Header as RNEHeader } from '@rneui/themed';

import { Constants } from '../constants';
import { Logo } from '../../assets/images';

const {
  colors: { cnciBlue, white },
  platform: { isMobile, isMobileHeight },
  strings: { about, locations, contact },
  screens: { HomeScreen, LocationScreen },
} = Constants;

const navHeaders = [about, locations, contact];

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
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

export const Header = () => {
  const { navigate } = useNavigation();

  const HeaderLeftComponent = () => (
    <TouchableOpacity
      style={styles.sideContainer}
      onPress={() => {
        navigate(HomeScreen);
      }}
    >
      <Image style={styles.logo} source={Logo} />
    </TouchableOpacity>
  );

  const WebCenterComponent = () =>
    !isMobile &&
    !isMobileHeight && (
      <View style={styles.middleContainer}>
        {navHeaders.map((item: string, index: number) => (
          <TouchableOpacity
            onPress={() => {
              if (item === locations) {
                navigate(LocationScreen);
              }
              navigate(`${item}Screen`);
            }}
          >
            <Text style={styles.middleContainerText} key={index}>
              {item}
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
            // TODO: Open drawer
            console.log('open!');
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
