import React from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import { Card, CardProps, Text, Button } from '@rneui/themed';

import { colors, platform } from '../constants';

type CardWithContentProps = {
  image: ImageSourcePropType;
  title: string;
  subtext: string;
  buttonText: string;
  buttonColor?: string;
  onPress: () => void;
} & CardProps;

export const CardWithContent = ({
  image,
  title,
  subtext,
  buttonText,
  buttonColor = colors.cnciBlue,
  onPress,
}: CardWithContentProps) => (
  <Card containerStyle={styles.cardContainer}>
    <Card.Image style={styles.cardImage} source={image}>
      <View style={styles.cardInnerContainer}>
        <Text h1 h1Style={styles.cardTitle}>
          {title}
        </Text>
        <Text style={styles.cardSubText}>{subtext}</Text>
        <Button
          onPress={onPress}
          color={buttonColor}
          style={styles.cardButtonContainer}
          buttonStyle={styles.cardButton}
          titleStyle={styles.cardButtonText}
        >
          {buttonText}
        </Button>
      </View>
    </Card.Image>
  </Card>
);

const styles = StyleSheet.create({
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
