import { Platform, Dimensions } from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const platform = {
    isWeb: Platform.OS === 'web',
    isMobile: Platform.OS === 'android' || Platform.OS === 'ios',
    isMobileWidth: screenWidth <= 768,
    windowWidth,
    windowHeight,
    screenWidth,
    screenHeight,
};

const colors = {
    cnciBlue: '#1c4e7d',
    lightGray: '#dadada',
    white: '#fff',
    black: '#000',
};

const strings = {
    about: 'About',
    locations: 'Locations',
    contact: 'Contact',
    home: 'Home',
}

const screens = {
    HomeScreen: 'HomeScreen',
    ContactScreen: 'ContactScreen',
    AboutScreen: 'AboutScreen',
    LocationScreen: 'LocationScreen',
}
 
export {
    platform,
    colors,
    strings,
    screens,
};