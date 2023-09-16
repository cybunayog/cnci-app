import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import { Header, Carousel } from '../components';
import { colors, platform } from '../constants';
import { cover } from '../../assets/images';

export const HomeScreen = () => {
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView style={{ marginTop: -1 }}>
        <View style={styles.container}>
          <Image style={styles.coverImage} source={cover} />
          <Text style={{ textAlign: 'center' }}>HomePage</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: colors.lightGray,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  coverImage: {
    flex: 1,
    width: 'auto',
    height: platform.windowWidth / 2,
  },
});
