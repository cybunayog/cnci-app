import { Ionicons } from '@expo/vector-icons';
import { Text } from '@rneui/themed';
import * as Linking from 'expo-linking';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { colors, strings, platform } from '../constants';

const { footerText, cnciFBUrl } = strings;

export const Footer = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={async () => await Linking.openURL(cnciFBUrl)}>
          <Ionicons name="logo-facebook" color={colors.white} size={20} />
        </TouchableOpacity>

        <Text style={styles.footerText}>{footerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.black,
    height: 100,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButton: {
    marginBottom: (platform.isMobileWidth && platform.isWeb) || platform.isMobile ? -15 : 20,
  },
  footerText: {
    color: colors.white,
    textAlign: 'center',
    margin: 'auto',
    padding: (platform.isMobileWidth && platform.isWeb) || platform.isMobile ? 20 : undefined,
  },
});
