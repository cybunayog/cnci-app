import React from "react";
import { View, StyleSheet, ImageSourcePropType } from "react-native";
import * as Linking from "expo-linking";

import { Image as IconImage, Text } from "@rneui/base";
import { platform } from "../constants";

type LocationCardProps = {
  source: ImageSourcePropType;
  title: string;
  address: string;
  addressLink: string;
  time: string;
};

export const LocationCard = ({
  source,
  title,
  address,
  time,
  addressLink,
}: LocationCardProps) => {
  return (
    <View style={styles.container}>
      <IconImage source={source} style={styles.icon} />
      <Text h4>{title}</Text>
      <Text
        style={styles.description}
        onPress={() => Linking.openURL(addressLink)}
      >
        {address}
      </Text>
      <Text style={styles.description}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    height: platform.windowHeight / 6,
    width: platform.windowHeight / 6,
  },
  description: {
    fontSize: platform.isMobileWidth ? 15 : 20,
    paddingTop: 10,
  },
});
