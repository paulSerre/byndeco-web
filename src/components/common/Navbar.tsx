import { useCallback, useMemo } from 'react';
import {
  Box,
  Flex,
  Avatar,
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
  Link
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { Roles } from 'types/roles';
import Logo from './icons/Logo';
import { useRouter } from 'next/router';


export default function Navbar() {
  const { t } = useTranslation(['auth', 'common'])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { pathname } = useRouter();
  
  const { data: session } = useSession();

  const isAdmin = useMemo(() => session?.user?.roles.includes(Roles.ADMIN), [session?.user?.roles]);

  const Links = useMemo(() => ([
    {
      label: t('common:introduction'),
      href: '/'
    },
    {
      label: t('common:products'),
      href: '/products'
    },
    {
      label: t('common:contact'),
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
                cursor='pointer'
                _hover={{ fontWeight: 600 }}
              >{label.toUpperCase()}</Link>
            ))}
          </HStack>
          <Logo boxSize={{ base: 16, lg: 28}}/>
          <Flex 
            justifyContent='flex-end'
            mb={4}
            flexGrow={{ base: 'auto', lg: 1}}
            flexBasis={{ base: 'auto', lg: 0}}
          >
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
                <Link href='/account'>
                  <MenuItem>
                    {t('common:account')}
                  </MenuItem>
                </Link>
                <MenuDivider />
                {isAdmin ?                 
                <>
                  <Link href='/admin/product'>
                    <MenuItem>
                      {t('common:admin_panel')}
                    </MenuItem>
                  </Link>
                <MenuDivider />
                </> : null}
                <MenuItem
                    fontWeight="400"
                    fontSize="sm"
                    py="2"
                    onClick={handleOnSignOut}
                >{t('auth:login.logout')}</MenuItem>
              </MenuList>
            </Menu> :
            <Link href="/signin">
                <Button size="sm" minW="unset">
                    {t('auth:login.login_title')}
                </Button>
            </Link>
            }
          </Flex>
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