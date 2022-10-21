import { useCallback, useMemo } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

const NavLink = ({ label, href }: { label: string, href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {label}
  </Link>
);

export default function Navbar() {
  const { t } = useTranslation('auth')

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const { data: session } = useSession();

  const Links = useMemo(() => ([
    {
      label: 'Mi Cuenta',
      href: '/account'
    },
    {
      label: 'Productos',
      href: '/products'
    }
  ]), []);

  const handleOnSignOut = useCallback(() => {
    signOut({ callbackUrl: '/' })
  }, []);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image
              src='/svg/logo.svg'
              width={50}
              height={50}
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.label} {...link}/>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {session && session.user ?
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={session.user.image}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem
                    fontWeight="400"
                    fontSize="sm"
                    py="2"
                    onClick={handleOnSignOut}
                >{t('login.logout')}</MenuItem>
              </MenuList>
            </Menu> :
            <Link href="/signin">
                <Button size="sm" minW="unset">
                    {t('login.login_title')}
                </Button>
            </Link>
            }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} {...link}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}