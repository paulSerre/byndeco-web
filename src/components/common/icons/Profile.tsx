import { Icon, IconProps } from '@chakra-ui/icons';
import React from 'react';

export default function ArrowBottomCircleIcon(props: IconProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Icon viewBox="0 0 23 25" fill="currentColor" {...props}>
      <path d="M11.5 0C8.32322 0 5.75 2.75911 5.75 6.16537C5.75 9.56405 8.32322 12.3307 11.5 12.3307C14.6768 12.3307 17.25 9.56405 17.25 6.16537C17.25 2.75911 14.6768 0 11.5 0ZM11.5 15.4134C7.66914 15.4134 0 17.4712 0 21.5788V24.6615H23V21.5788C23 17.4712 15.3309 15.4134 11.5 15.4134Z" fill="currentColor"/>
    </Icon>
  );
}
