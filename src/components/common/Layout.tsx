import React from 'react';
import { Flex } from '@chakra-ui/react';
/**
 * General Page Layout.
 */
function Layout({ children }: { children: React.ReactNode}) {

  return (
    <Flex bgColor="surface" direction="column" flexGrow={1} id="root">
      {children}
    </Flex>
  );
}

export default Layout;
