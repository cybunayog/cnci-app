import React from 'react';
import { default as ReanimatedCarousel } from 'react-native-reanimated-carousel';
import type { TCarouselProps } from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Carousel = (props: TCarouselProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ReanimatedCarousel {...props} />
    </SafeAreaView>
  );
};
