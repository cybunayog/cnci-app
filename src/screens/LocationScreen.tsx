import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as CoverImage, Text } from '@rneui/themed';

import {
	Header,
	Footer,
	CardWithContent,
	LocationCard,
} from '../components';
import {
	platform,
	strings,
	colors,
	locations,
} from '../constants';
import { churchBuilding } from '../../assets/images';

export const LocationScreen = () => {
	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<Header />
			<ScrollView
				style={{
					marginTop: -1,
				}}
			>
				<View style={styles.container}>
					<CoverImage
						style={styles.coverImage}
						source={churchBuilding}
					/>
					<Text
						h2
						h2Style={{
							textAlign: 'center',
							margin: 20,
							fontWeight: '500',
						}}
					>
						{strings.locationHeader}
					</Text>
					<CardWithContent
						cardContainerStyle={{
							flex: 1,
						}}
						hasButton={false}
						title={strings.contactInfo}
						titleStyle={styles.title}
					>
						{locations.map((church, key) => (
							<LocationCard
								key={key}
								source={church.source}
								title={church.title}
								address={church.address}
								addressLink={church.addressLink}
								time={church.time}
							/>
						))}
					</CardWithContent>
				</View>
			</ScrollView>
			{/* Move <Footer /> inside of <ScrollView /> if content gets bigger*/}
			<Footer />
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
		paddingBottom: 20,
	},
	coverImage: {
		width: '100%',
		height: platform.windowWidth / 2,
	},
	title: {
		color: colors.black,
	},
});
