import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as CoverImage, Text } from '@rneui/themed';

import {
	Header,
	Footer,
	CardWithContent,
	ContactForm,
} from '../components';
import { platform, strings, colors } from '../constants';
import { homeGalleryFive } from '../../assets/images';

export const ContactScreen = () => {
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
						source={homeGalleryFive}
					/>
					<Text
						h2
						h2Style={{
							textAlign: 'center',
							margin: 20,
							fontWeight: '500',
						}}
					>
						{strings.contactHeader}
					</Text>
					<CardWithContent
						cardContainerStyle={{
							flex: 1,
							height: '100%',
						}}
						hasButton={false}
						title={strings.contactInfo}
						titleStyle={styles.title}
					>
						<ContactForm />
					</CardWithContent>
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
		paddingBottom: 20,
	},
	coverImage: {
		width: '100%',
		height: platform.windowWidth / 2,
	},
	title: {
		color: colors.black,
	},
	subText: {
		color: colors.black,
		textAlign: 'left',
		padding: 5,
		fontSize:
			(platform.isMobileWidth && platform.isWeb) ||
			platform.isMobile
				? 15
				: 30,
	},
	innerCard: {
		padding:
			(platform.isMobileWidth && platform.isWeb) ||
			platform.isMobile
				? 20
				: 10,
	},
});
