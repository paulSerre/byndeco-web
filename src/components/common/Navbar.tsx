import { useCallback, useMemo } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { Roles } from 'types/roles';
import Logo from './icons/Logo';
import { useRouter } from 'next/router';
import Favourite from './icons/Favourite';
import Cart from './icons/Cart';
import Profile from './icons/Profile';


export default function Navbar() {
  const { t } = useTranslation(['auth', 'common'])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { pathname } = useRouter();
  
  const { data: session } = useSession();

  const isAdmin = useMemo(() => session?.user?.roles.includes(Roles.ADMIN), [session?.user?.roles]);

  const Links = useMemo(() => ([
    {
      label: t('common:navbar.introduction'),
      href: '/'
    },
    {
      label: t('common:navbar.products'),
      href: '/products'
    },
    {
      label: t('common:navbar.contact'),
      href: '/contact'
    }
  ]), [t]);

  const handleOnSignOut = useCallback(() => {
    signOut({ callbackUrl: '/' })
  }, []);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={{ base: 0, lg: 14}}>
        <Flex h={{ base: 'auto', lg: 28}} alignItems={'flex-end'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            as={'nav'}
            spacing={16}
            display={{ base: 'none', lg: 'flex' }}
            mb={4}
            flexGrow={{ base: 'auto', lg: 1}}
            flexBasis={{ base: 'auto', lg: 0}}
          >
            {Links.map(({ label, href }) => (
              <Link 
                key={label} 
                href={href} 
                fontWeight={href === pathname ? 600 : 500}
                colorScheme='primary'
                cursor='pointer'
                borderWidth={href === pathname ? '0 0 1px 0' : null}
                borderColor={'primary'}
                _hover={{
                  fontWeight: 600,
                  borderWidth: '0 0 1px 0',
                  borderColor: 'primary',
                }}
              >{label.toUpperCase()}</Link>
            ))}
          </HStack>
          <Logo boxSize={{ base: 16, lg: 28}}/>
          <HStack 
            justifyContent='flex-end'
            mb={{ base: 2, lg: 4 }}
            flexGrow={{ base: 'auto', lg: 1}}
            flexBasis={{ base: 'auto', lg: 0}}
            spacing={8}
          >
            <Favourite 
              _hover={{ transform: 'scale(1.2)', transition: 'all .2s ease-in-out' }} 
              color='primary' 
              boxSize={{ base: 3, lg: 5 }}
            />
            <Cart
              _hover={{ transform: 'scale(1.2)', transition: 'all .2s ease-in-out' }}
              color='primary' 
              boxSize={{ base: 3, lg: 5 }}
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                _hover={{ transform: 'scale(1.2)', transition: 'all .2s ease-in-out' }}
                minW={0}>
                <Profile color='primary' boxSize={{ base: 3, lg: 5 }}/>
              </MenuButton>
              <MenuList>
                {
                  (session && session.user) ?
                  <>
                    <Link href='/account'>
                      <MenuItem>
                        {t('common:navbar.account')}
                      </MenuItem>
                    </Link>
                    <Link href='/orders'>
                      <MenuItem>
                        {t('common:navbar.orders')}
                      </MenuItem>
                    </Link>
                    {isAdmin ?                 
                    <>
                      <Link href='/admin/product'>
                        <MenuItem>
                          {t('common:navbar.admin_panel')}
                        </MenuItem>
                      </Link>
                    </> : null}
                    <MenuDivider />
                    <MenuItem
                      onClick={handleOnSignOut}
                    >{t('auth:login.logout')}
                    </MenuItem>
                  </> : <>
                    <Link href='/signin'>
                      <MenuItem>
                        {t('common:navbar.signin')}
                      </MenuItem>
                    </Link>
                  </>
                }
              </MenuList>
            </Menu>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ label, href }) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}