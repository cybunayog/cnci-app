import { Image as CoverImage } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cover } from '../../assets/images';
import { Header, Footer, CardWithContent } from '../components';
import { colors, platform, homeCards } from '../constants';

export const HomeScreen = ({ navigation }: any): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView style={{ marginTop: -1 }}>
        <View style={styles.container}>
          <CoverImage style={styles.coverImage} source={cover} />
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
  coverImage: {
    width: '100%',
    height: platform.windowWidth / 2,
  },
});
