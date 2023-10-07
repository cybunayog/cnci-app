import { Image as CoverImage, Text } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { homeGalleryFive } from '../../assets/images';
import { Header, Footer, CardWithContent, ContactForm } from '../components';
import { platformMeasurement, strings, colors } from '../constants';

export const ContactScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView
        style={{
          marginTop: -1,
        }}>
        <View style={styles.container}>
          <CoverImage
            style={{
              width: '100%',
              resizeMode: 'contain',
              height: platformMeasurement.windowWidth / 2,
            }}
            source={homeGalleryFive}
          />
          <Text
            h2
            h2Style={{
              textAlign: 'center',
              margin: 20,
              fontWeight: '500',
            }}>
            {strings.contactHeader}
          </Text>
          <CardWithContent
            cardContainerStyle={{
              flex: 1,
              height: '100%',
            }}
            hasButton={false}
            title={strings.contactInfo}
            titleStyle={styles.title}>
            <ContactForm />
          </CardWithContent>
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
    paddingBottom: 20,
  },
  title: {
    color: colors.black,
  },
});
