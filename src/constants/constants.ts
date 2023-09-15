import { Platform } from 'react-native'

const platform = {
    IS_WEB: Platform.OS === 'web',
    IS_MOBILE: Platform.OS === 'android' || Platform.OS === 'ios',
};

const colors = {
    cnciBlue: '#1c4e7d',
    lightGray: '#dadada',
    white: '#fff',
    black: '#000',
};
 
export {
    platform,
    colors
};