import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header as RNEHeader } from '@rneui/themed';

import { platform, colors } from '../constants/constants';
import { Logo } from '../../assets/images';
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    backgroundColor: colors.cnciBlue,
  },
  sideContainer: {
    margin: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

const HeaderLeftComponent = () => (
  <TouchableOpacity style={styles.sideContainer}>
    <Image style={styles.logo} source={Logo} />
  </TouchableOpacity>
);

const WebMiddleComponent = () => ({
  // TODO: Display About, Locations, Contact for web. Hide for mobile
});

export const Header = () => (
  <RNEHeader
    leftComponent={<HeaderLeftComponent />}
    rightComponent={
      <Ionicons name="menu-outline" color={colors.white} size={40} />
    }
    rightContainerStyle={styles.sideContainer}
    containerStyle={styles.headerContainer}
  />
);
