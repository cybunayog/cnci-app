import { useMediaQuery } from 'react-responsive';

export const useBigScreen = (): boolean => useMediaQuery({ minWidth: 1825 });

export const useDesktop = (): boolean => useMediaQuery({ minWidth: 992 });

export const useMobile = (): boolean => useMediaQuery({ maxWidth: 898 });

export const useTablet = (): boolean => useMediaQuery({ minWidth: 768, maxWidth: 991 });
