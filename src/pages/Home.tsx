import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components';

export const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text>Home Page</Text>
      </View>
    </SafeAreaView>
  );
};
