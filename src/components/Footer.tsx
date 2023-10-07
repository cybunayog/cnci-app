import { Ionicons } from '@expo/vector-icons';
import { Text } from '@rneui/themed';
import * as Linking from 'expo-linking';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { colors, strings } from '../constants';
import { useMobile } from '../lib/hooks';

const { footerText, cnciFBUrl } = strings;

export const Footer = (): React.JSX.Element => {
  const isMobileWidth = useMobile();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{
            marginBottom: isMobileWidth ? -15 : 20,
          }}
          onPress={async () => await Linking.openURL(cnciFBUrl)}>
          <Ionicons name="logo-facebook" color={colors.white} size={20} />
        </TouchableOpacity>

        <Text
          style={[
            styles.footerText,
            {
              padding: isMobileWidth ? 20 : undefined,
            },
          ]}>
          {footerText}
        </Text>
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
  socialButton: {},
  footerText: {
    color: colors.white,
    textAlign: 'center',
    margin: 'auto',
  },
});
