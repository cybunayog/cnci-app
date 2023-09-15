import { Platform, Dimensions } from 'react-native'

const {width: screenWidth} = Dimensions.get('screen');

const platform = {
    isWeb: Platform.OS === 'web',
    isMobile: Platform.OS === 'android' || Platform.OS === 'ios',
    isMobileHeight: screenWidth < 768
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