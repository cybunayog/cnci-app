import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Header as RNEHeader } from '@rneui/base';

const styles = StyleSheet.create({});

const HeaderLeftComponent = () => (
  <View>
    <Text>Here</Text>
  </View>
);

const HeaderRightComponent = () => (
  <View>
    <Text>Right</Text>
  </View>
);

export const Header = () => {
  return (
    <RNEHeader
      leftComponent={<HeaderLeftComponent />}
      rightComponent={<HeaderRightComponent />}
      containerStyle={{ width: 'auto', height: 100 }}
    />
  );
};
