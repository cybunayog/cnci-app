import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Image, Text, Button } from '@rneui/themed';

import { Header } from '../components';
import { colors, platform, strings } from '../constants';
import { cover, homeGalleryOne, homeGalleryTwo } from '../../assets/images';

export const HomeScreen = ({ navigation }) => {
  const {
    locations,
    about,
    cardHomeLocationButtonText,
    cardHomeLocationSubText,
    cardHomeLocationTitle,
  } = strings;

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView style={{ marginTop: -1 }}>
        <View style={styles.container}>
          <Image style={styles.coverImage} source={cover} />
          <Card containerStyle={styles.cardContainer}>
            <Card.Image style={styles.cardImage} source={homeGalleryOne}>
              <View style={styles.cardInnerContainer}>
                <Text style={styles.cardTitle}>{cardHomeLocationTitle}</Text>
                <Text style={styles.cardSubText}>
                  {cardHomeLocationSubText}
                </Text>
                <Button
                  onPress={() => navigation.navigate(locations)}
                  color={colors.cnciBlue}
                  style={styles.cardButtonContainer}
                  buttonStyle={styles.cardButton}
                  titleStyle={styles.cardButtonText}
                >
                  {cardHomeLocationButtonText}
                </Button>
              </View>
            </Card.Image>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <Card.Image style={styles.cardImage} source={homeGalleryTwo}>
              <View style={styles.cardInnerContainer}>
                <Text style={styles.cardTitle}>Our Purpose</Text>
                <Text style={styles.cardSubText}>
                  To proclaim Salvation, Healing, Deliverance, & the Second
                  Coming of our Lord Jesus Christ
                </Text>
                <Button
                  onPress={() => navigation.navigate(locations)}
                  color={colors.cnciBlue}
                  style={styles.cardButtonContainer}
                  buttonStyle={styles.cardButton}
                  titleStyle={styles.cardButtonText}
                >
                  Learn More
                </Button>
              </View>
            </Card.Image>
          </Card>
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
    width: '100%',
    height: platform.windowWidth / 2,
  },
  cardContainer: {
    borderRadius: 10,
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    marginHorizontal: 'auto',
    height: platform.isMobileWidth
      ? platform.windowWidth
      : platform.windowWidth / 2,
    width: platform.isMobileWidth ? '90%' : '50%',
  },
  cardTitle: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: platform.isMobileWidth ? 20 : 40,
  },
  cardImage: {
    height: platform.isMobileWidth
      ? platform.windowWidth
      : platform.windowWidth / 2,
    padding: 0,
    borderRadius: 10,
  },
  cardInnerContainer: {
    justifyContent: 'center',
    marginTop: platform.isMobileWidth ? 10 : 30,
    paddingHorizontal: 5,
  },
  cardSubText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
  cardButtonContainer: {
    padding: 10,
  },
  cardButton: {
    margin: 'auto',
    paddingHorizontal: 20,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  cardButtonText: {
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});
