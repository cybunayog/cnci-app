import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components';
import { colors } from '../constants/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    flex: 1,
    alignContent: 'center',
  },
});

export const LocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text>Location Page</Text>
      </View>
    </SafeAreaView>
  );
};
