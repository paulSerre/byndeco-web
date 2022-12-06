import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import components from './components';
import colors from './foundation/colors';
import semanticTokens from './foundation/semanticTokens';
import styles from './foundation/styles';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};
  

const theme = {
    ...chakraTheme,
    config,
    styles,
    colors,
    semanticTokens,
    components,
    fonts: {
        body: `'Raleway', sans-serif`,
    }
}

export default extendTheme(theme);