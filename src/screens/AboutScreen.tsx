import { Image as CoverImage, Text } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { homeGalleryOne } from '../../assets/images';
import { Header, Footer, CardWithContent } from '../components';
import { platformMeasurement, strings, colors, aboutCards } from '../constants';
import { useMobile } from '../lib/hooks';

export const AboutScreen = (): React.FC => {
  const isMobileWidth = useMobile();

  const InnerComponent = ({ style }: Partial<any | undefined>): React.JSX.Element => (
    <View style={style}>
      {aboutCards.map((content, key) => {
        const { title, subtext } = content;
        return (
          <CardWithContent
            key={key}
            cardContainerStyle={{
              justifyContent: 'flex-start',
            }}
            cardInnerContainerStyle={{
              padding: 20,
              marginTop: isMobileWidth ? -10 : 0,
              height: isMobileWidth ? platformMeasurement.windowWidth / 1.5 : 'auto',
            }}
            titleStyle={styles.title}
            hasButton={false}
            title={title}
            subtextStyle={[
              styles.subText,
              {
                fontSize: isMobileWidth ? 15 : 25,
              },
            ]}
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
          <CoverImage
            style={{
              width: '100%',
              resizeMode: 'contain',
              height: platformMeasurement.windowWidth / 2.5,
            }}
            source={homeGalleryOne}
          />
          <Text
            h2
            h2Style={{
              textAlign: 'center',
              margin: 15,
              fontWeight: '500',
            }}>
            {strings.aboutHeader}
          </Text>
          {!isMobileWidth ? (
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
  title: {
    color: colors.black,
    textAlign: 'left',
    padding: 5,
  },
  subText: {
    color: colors.black,
    textAlign: 'left',
    padding: 5,
  },
});
