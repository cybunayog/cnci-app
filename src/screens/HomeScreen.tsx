import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Card, Image, Text, Button } from '@rneui/themed';

import { Header } from '../components';
import { colors, platform, strings } from '../constants';
import { cover, homeGalleryOne } from '../../assets/images';

export const HomeScreen = ({ navigation }) => {
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView style={{ marginTop: -1 }}>
        <View style={styles.container}>
          <Image style={styles.coverImage} source={cover} />
          <Card containerStyle={styles.cardContainer}>
            <Card.Image
              style={{
                height: platform.isMobileWidth
                  ? platform.windowWidth
                  : platform.windowWidth / 2,
                padding: 0,
                borderRadius: 10,
              }}
              source={homeGalleryOne}
            >
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: platform.isMobileWidth ? 10 : 30,
                }}
              >
                <Text style={styles.cardTitle}>Join us this Sunday</Text>
                <Text style={styles.cardSubText}>
                  The doors are always open every week.
                </Text>
                <Button
                  onPress={() => navigation.navigate(strings.locations)}
                  color={colors.cnciBlue}
                  style={styles.cardButtonContainer}
                  buttonStyle={styles.cardButton}
                  titleStyle={styles.cardButtonText}
                >
                  Times & Locations
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
    fontSize: 20,
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
