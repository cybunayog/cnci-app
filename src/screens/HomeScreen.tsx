import { Image as CoverImage } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cover } from '../../assets/images';
import { Header, Footer, CardWithContent } from '../components';
import { colors, platformMeasurement, homeCards } from '../constants';
import { useMobile } from '../lib/hooks';

export const HomeScreen = ({ navigation }: any): React.JSX.Element => {
  const isMobileWidth = useMobile();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView style={{ marginTop: -1 }}>
        <View style={styles.container}>
          <CoverImage
            style={{
              width: '100%',
              resizeMode: 'contain',
              height: isMobileWidth
                ? platformMeasurement.windowWidth / 2
                : platformMeasurement.windowWidth / 2.5,
            }}
            source={cover}
          />
          {homeCards.map((content, key) => (
            <CardWithContent
              key={key}
              hasButton
              onPress={() => navigation.navigate(content.page)}
              image={content.image}
              title={content.title}
              subtext={content.subtext}
              buttonText={content.buttonText}
            />
          ))}
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
});
