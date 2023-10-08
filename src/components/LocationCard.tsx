import { Image as IconImage, Text } from '@rneui/base';
import * as Linking from 'expo-linking';
import React from 'react';
import { View, StyleSheet, type ImageSourcePropType } from 'react-native';

import { platformMeasurement } from '../constants';
import { useMobile } from '../lib/hooks';

interface LocationCardProps {
  source: ImageSourcePropType;
  title: string;
  address: string;
  addressLink: string;
  time: string;
}

export const LocationCard = ({
  source,
  title,
  address,
  time,
  addressLink,
}: LocationCardProps): React.FC => {
  const isMobileWidth = useMobile();

  return (
    <View style={styles.container}>
      <IconImage source={source} style={styles.icon} />
      <Text h4>{title}</Text>
      <Text
        style={{ paddingTop: 10, fontSize: isMobileWidth ? 10 : 20 }}
        onPress={async () => await Linking.openURL(addressLink)}>
        {address}
      </Text>
      <Text style={{ paddingTop: 10, fontSize: isMobileWidth ? 10 : 20 }}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 'auto',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    height: platformMeasurement.windowHeight / 6,
    width: platformMeasurement.windowHeight / 6,
  },
});
