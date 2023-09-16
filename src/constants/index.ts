import { Platform, Dimensions } from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const platform: Record<string, any> = {
    isWeb: Platform.OS === 'web',
    isMobile: Platform.OS === 'android' || Platform.OS === 'ios',
    isMobileWidth: screenWidth <= 768,
    windowWidth,
    windowHeight,
    screenWidth,
    screenHeight,
};

export const colors: Record<string, string> = {
    cnciBlue: '#1c4e7d',
    lightGray: '#dadada',
    white: '#fff',
    black: '#000',
};

export const strings: Record<string, string> = {
    cardHomeLocationTitle: 'Join us this Sunday',
    cardHomeLocationSubText: 'The doors are always open every week.',
    cardHomeLocationButtonText: 'Times & Locations',
    cardHomeAboutTitle: 'Our Purpose',
    cardHomeAboutSubText: `"To proclaim Salvation, Healing, Deliverance, & the Second Coming of our Lord Jesus Christ."`,
    cardHomeContactTitle: 'Questions?',
    cardHomeContactSubText: 'Feel free to reach out! We would love to hear from you.',
    cardHomeContactButtonText: 'Get In Touch',
    learnMore: 'Learn More',
    footerText: `© 2023 CNCI Los Angeles${'\t'}|${'\t'}401 E Colorado St, Glendale, CA 91205`,
    cnciFBUrl: 'https://www.facebook.com/people/CNCI-Los-Angeles-California-USA/61551495982602/',
};

export const constants: Record<string, string> = {
    about: 'About',
    locations: 'Locations',
    contact: 'Contact',
    home: 'Home',
};

export const screens: Record<string, string> = {
    HomeScreen: 'HomeScreen',
    ContactScreen: 'ContactScreen',
    AboutScreen: 'AboutScreen',
    LocationScreen: 'LocationScreen',
};
 