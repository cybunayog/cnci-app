import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as CoverImage } from '@rneui/themed';

import { Header, Footer } from '../components';
import { constants, platform, strings, colors } from '../constants';
import { homeGalleryOne } from '../../assets/images';

export const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView style={{ marginTop: -1 }}>
        <View style={styles.container}>
          <CoverImage style={styles.coverImage} source={homeGalleryOne} />
        </View>
        <Footer />
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
    paddingBottom: 10,
  },
  coverImage: {
    width: '100%',
    height: platform.windowWidth / 2,
  },
});
