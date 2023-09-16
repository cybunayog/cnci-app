import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components';
import { colors } from '../constants/constants';

export const LocationScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <View>
        <Text>Location Page</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: colors.lightGray,
    flex: 1,
  },
});
