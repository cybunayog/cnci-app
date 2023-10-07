/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Card, type CardProps, Text, Button } from '@rneui/themed';
import React from 'react';
import {
  View,
  StyleSheet,
  type ImageSourcePropType,
  type TextStyle,
  type ViewStyle,
  type StyleProp,
} from 'react-native';

import { colors, platformMeasurement } from '../constants';
import { useMobile } from '../lib/hooks';

type CardWithContentProps = {
  hasButton: boolean;
  title: string;
  subtext?: string;
  children?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  subtextStyle?: StyleProp<TextStyle>;
  cardContainerStyle?: StyleProp<ViewStyle>;
  cardInnerContainerStyle?: StyleProp<ViewStyle>;
  buttonText?: string;
  image?: ImageSourcePropType;
  buttonColor?: string;
  onPress?: () => void;
} & CardProps;

export const CardWithContent = ({
  hasButton = false,
  image,
  title,
  subtext,
  titleStyle,
  subtextStyle,
  cardContainerStyle,
  cardInnerContainerStyle,
  buttonText,
  buttonColor = colors.cnciRed,
  children,
  onPress = () => null,
}: CardWithContentProps): React.JSX.Element => {
  const isMobileWidth = useMobile();

  const InnerComponent = (): React.JSX.Element => (
    <View
      style={[
        styles.cardInnerContainer,
        cardInnerContainerStyle,
        { marginTop: isMobileWidth ? 10 : 30 },
      ]}>
      <Text
        h2
        h2Style={[
          styles.cardTitle,
          titleStyle,
          {
            fontSize: isMobileWidth ? 20 : 40,
          },
        ]}>
        {title}
      </Text>
      <Text style={[styles.cardSubText, subtextStyle]}>{subtext}</Text>
      {hasButton && (
        <Button
          onPress={onPress}
          color={buttonColor}
          style={styles.cardButtonContainer}
          buttonStyle={styles.cardButton}
          titleStyle={styles.cardButtonText}>
          {buttonText}
        </Button>
      )}
    </View>
  );

  return (
    <Card
      containerStyle={[
        styles.cardContainer,
        cardContainerStyle,
        {
          height: isMobileWidth
            ? platformMeasurement.windowWidth
            : platformMeasurement.windowWidth / 2,
          width: isMobileWidth ? '85%' : '50%',
        },
      ]}>
      {image ? (
        <Card.Image
          style={[
            styles.cardImage,
            {
              height: isMobileWidth
                ? platformMeasurement.windowWidth
                : platformMeasurement.windowWidth / 2,
            },
          ]}
          source={image}>
          <InnerComponent />
        </Card.Image>
      ) : children ? (
        <View style={{ flex: 1 }}>{children}</View>
      ) : (
        <InnerComponent />
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  cardTitle: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardImage: {
    padding: 0,
    borderRadius: 10,
  },
  cardInnerContainer: {
    justifyContent: 'center',
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
