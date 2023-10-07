import { Platform, Dimensions } from 'react-native';

import { homeGalleryFour, homeGalleryThree, homeGalleryTwo, laIcon } from '../../assets/images';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const platform: Record<string, boolean> = {
  isWeb: Platform.OS === 'web',
  isMobile: Platform.OS === 'android' || Platform.OS === 'ios',
};

export const platformMeasurement: Record<string, number> = {
  windowWidth,
  windowHeight,
  screenWidth,
  screenHeight,
};

export const colors: Record<string, string> = {
  cnciBlue: '#1c4e7d',
  cnciRed: '#c80201',
  lightGray: '#dadada',
  white: '#fff',
  black: '#000',
  borderGray: '#ccc',
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
  aboutHeader: 'WHO WE ARE',
  contactHeader: 'STAY IN TOUCH',
  locationHeader: `LOCATIONS & TIMES`,
  contactInfo: 'Contact Information',
  learnMore: 'Learn More',
  footerText: `© 2023 CNCI Los Angeles   |   401 E Colorado St, Glendale, CA 91205   |   cnciusa.la@gmail.com`,
  cnciFBUrl: 'https://www.facebook.com/people/CNCI-Los-Angeles-California-USA/61551495982602/',
  bibleApiUrl: 'https://bible-api.com',
  missionStatementTitle: 'Mission Statement',
  missionStatementSubText:
    'We are an Evangelistic, Missionary church called to influence this generation for Christ.\n' +
    '\nOur congregation embodies strong values of faith, righteousness, discipleship, and ministry, all directed towards fulfilling the GREAT COMMISSION.',
  emailErrorMessage: 'Something is missing, please fill the form.',
  emailSuccessMessage: 'Email sent!',
  tempEmailMessage: `This feature isn't available at the moment. For now, please email: cnciusa.la@gmail.com`,
};

export const constants: Record<string, string> = {
  about: 'About',
  locations: 'Locations',
  contact: 'Contact',
  home: 'Home',
  send: 'Send',
};

export const screens: Record<string, string> = {
  HomeScreen: 'HomeScreen',
  ContactScreen: 'ContactScreen',
  AboutScreen: 'AboutScreen',
  LocationScreen: 'LocationScreen',
};

export const locations = [
  {
    source: laIcon,
    title: 'Los Angeles Chapter',
    address: '401 E Colorado St, Glendale, CA 91205',
    time: '9:00AM - 11:00AM',
    addressLink: 'https://tinyurl.com/cnci-la-location',
  },
];

export const homeCards = [
  {
    page: constants.locations,
    image: homeGalleryFour,
    title: strings.cardHomeLocationTitle,
    subtext: strings.cardHomeLocationSubText,
    buttonText: strings.cardHomeLocationButtonText,
  },
  {
    page: constants.about,
    image: homeGalleryThree,
    title: strings.cardHomeAboutTitle,
    subtext: strings.cardHomeAboutSubText,
    buttonText: strings.learnMore,
  },
  {
    page: constants.contact,
    image: homeGalleryTwo,
    title: strings.cardHomeContactTitle,
    subtext: strings.cardHomeContactSubText,
    buttonText: strings.cardHomeContactButtonText,
  },
];

export const aboutCards = [
  {
    cardContainerStyle: {
      justifyContent: 'flex-start',
      flex: (platform.isMobileWidth && platform.isWeb) || platform.isMobile ? 2 : 1,
    },
    title: strings.missionStatementTitle,
    subtext: strings.missionStatementSubText,
  },
  {
    cardContainerStyle: {
      justifyContent: 'flex-start',
      flex: (platform.isMobileWidth && platform.isWeb) || platform.isMobile ? 1.25 : 1,
    },
    title: strings.cardHomeAboutTitle,
    subtext: strings.cardHomeAboutSubText,
  },
];
