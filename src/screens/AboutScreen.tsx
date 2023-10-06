import { Image as CoverImage, Text } from '@rneui/themed';
import React from 'react';
import { View, ViewStyle, StyleSheet, ScrollView, StyleProp } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { homeGalleryOne } from '../../assets/images';
import { Header, Footer, CardWithContent } from '../components';
import { platform, strings, colors, aboutCards } from '../constants';

export const AboutScreen = () => {
  const InnerComponent = ({ style }: Partial<any | undefined>) => (
    <View style={style}>
      {aboutCards.map((content, key) => {
        const { cardContainerStyle, title, subtext } = content;
        return (
          <CardWithContent
            cardContainerStyle={cardContainerStyle as StyleProp<ViewStyle>}
            cardInnerContainerStyle={styles.innerCard}
            titleStyle={styles.title}
            hasButton={false}
            title={title}
            subtextStyle={styles.subText}
            subtext={subtext}
          />
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header />
      <ScrollView
        style={{
          marginTop: -1,
        }}>
        <View style={styles.container}>
          <CoverImage style={styles.coverImage} source={homeGalleryOne} />
          <Text
            h2
            h2Style={{
              textAlign: 'center',
              margin: 20,
              fontWeight: '500',
            }}>
            {strings.aboutHeader}
          </Text>
          {!platform.isMobileWidth && platform.isWeb ? (
            <InnerComponent
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 50,
                paddingBottom: 50,
                justifyContent: 'space-around',
                columnGap: 50,
              }}
            />
          ) : (
            <InnerComponent
              style={{
                display: 'flex',
                flex: 2,
                flexShrink: 1,
                paddingHorizontal: 5,
                paddingBottom: 5,
              }}
            />
          )}
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
    paddingBottom: 10,
  },
  coverImage: {
    width: '100%',
    height: platform.windowWidth / 2,
  },
  title: {
    color: colors.black,
    textAlign: 'left',
    padding: 5,
  },
  subText: {
    color: colors.black,
    textAlign: 'left',
    padding: 5,
    fontSize: (platform.isMobileWidth && platform.isWeb) || platform.isMobile ? 15 : 30,
  },
  innerCard: {
    padding: (platform.isMobileWidth && platform.isWeb) || platform.isMobile ? 20 : 10,
  },
});
