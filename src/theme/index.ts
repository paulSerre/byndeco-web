import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import styles from './foundation/styles';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};
  

const theme = {
    ...chakraTheme,
    config,
    styles,
    fonts: {
        body: `'Raleway', sans-serif`,
    }
}

export default extendTheme(theme);