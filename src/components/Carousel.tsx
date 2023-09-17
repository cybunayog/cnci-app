import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as ReanimatedCarousel } from 'react-native-reanimated-carousel';

import type { TCarouselProps } from 'react-native-reanimated-carousel';

export const Carousel = (props: TCarouselProps) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ReanimatedCarousel {...props} />
		</SafeAreaView>
	);
};
