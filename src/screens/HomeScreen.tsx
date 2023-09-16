import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Image, Text, Button } from '@rneui/themed';

import { Header, Footer, CardWithContent } from '../components';
import { colors, platform, strings, constants } from '../constants';
import {
  cover,
  homeGalleryFour,
  homeGalleryOne,
  homeGalleryThree,
} from '../../assets/images';

const { locations, about, contact } = constants;
const {
  cardHomeLocationButtonText,
  cardHomeLocationSubText,
  cardHomeLocationTitle,
  cardHomeAboutTitle,
  cardHomeAboutSubText,
  cardHomeContactTitle,
  cardHomeContactSubText,
  cardHomeContactButtonText,
  learnMore,
} = strings;

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView style={{ marginTop: -1 }}>
        <View style={styles.container}>
          <Image style={styles.coverImage} source={cover} />
          <CardWithContent
            onPress={() => navigation.navigate(locations)}
            image={homeGalleryFour}
            title={cardHomeLocationTitle}
            subtext={cardHomeLocationSubText}
            buttonText={cardHomeLocationButtonText}
          />
          <CardWithContent
            onPress={() => navigation.navigate(about)}
            image={homeGalleryThree}
            title={cardHomeAboutTitle}
            subtext={cardHomeAboutSubText}
            buttonText={learnMore}
          />
          <CardWithContent
            onPress={() => navigation.navigate(contact)}
            image={homeGalleryOne}
            title={cardHomeContactTitle}
            subtext={cardHomeContactSubText}
            buttonText={cardHomeContactButtonText}
          />
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
