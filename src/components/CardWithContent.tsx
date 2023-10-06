import { Card, CardProps, Text, Button } from '@rneui/themed';
import React from 'react';
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { colors, platform } from '../constants';

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
}: CardWithContentProps) => {
  const InnerComponent = () => (
    <View style={[styles.cardInnerContainer, cardInnerContainerStyle]}>
      <Text h2 h2Style={[styles.cardTitle, titleStyle]}>
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
    <Card containerStyle={[styles.cardContainer, cardContainerStyle]}>
      {image ? (
        <Card.Image style={styles.cardImage} source={image}>
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
    height: platform.isMobileWidth ? platform.windowWidth : platform.windowWidth / 2,
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
    height: platform.isMobileWidth ? platform.windowWidth : platform.windowWidth / 2,
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
