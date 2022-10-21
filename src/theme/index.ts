import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from "@chakra-ui/react";
import styles from './foundation/styles';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
};
  

const theme = {
    ...chakraTheme,
    config,
    styles
}

export default extendTheme(theme);