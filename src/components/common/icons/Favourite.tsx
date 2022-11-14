import { Icon, IconProps } from '@chakra-ui/icons';
import React from 'react';

export default function ArrowBottomCircleIcon(props: IconProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Icon viewBox="0 0 26 25" fill="none" {...props}>
        <path xmlns="http://www.w3.org/2000/svg" d="M13.6494 2.22848L12.6795 3.30339L11.7091 2.22848C9.03086 -0.740569 4.68781 -0.740569 2.00906 2.22848C-0.669687 5.19754 -0.669687 10.0123 2.00906 12.9828L2.97898 14.0582L12.6795 24.8111L22.3796 14.0563L23.3495 12.9814C26.0283 10.0123 26.0283 5.19754 23.3495 2.22655C20.6708 -0.742506 16.3282 -0.742506 13.6494 2.22848Z" fill="currentColor"/>
    </Icon>
  );
}
