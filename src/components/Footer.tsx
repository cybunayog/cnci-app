import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { colors, strings, platform } from '../constants';

const { footerText, cnciFBUrl } = strings;

export const Footer = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {!platform.isMobileWidth && !platform.isMobile && (
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Linking.openURL(cnciFBUrl)}
          >
            <Ionicons name="logo-facebook" color={colors.white} size={20} />
          </TouchableOpacity>
        )}
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
    marginBottom: 20,
  },
  footerText: {
    color: colors.white,
    textAlign: 'center',
    margin: 'auto',
    padding: platform.isMobileWidth && platform.isMobile ? 20 : undefined,
  },
});
