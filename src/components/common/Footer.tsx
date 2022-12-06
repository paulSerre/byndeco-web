import { HStack, VStack, useColorModeValue, Link } from "@chakra-ui/react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import FacebookRounded from "./icons/FacebookRounded";
import InstagramRounded from "./icons/InstagramRounded";
import Logo from "./icons/Logo";

export default function Footer() {

    const { t } = useTranslation();

    const Links = useMemo(() => ([
        {
          label: t('common:footer.help'),
          href: '/help'
        },
        {
          label: t('common:footer.delivery'),
          href: '/delivery'
        },
        {
          label: t('common:footer.returns_exchange'),
          href: '/returns'
        },
        {
            label: t('common:footer.terms_conditions'),
            href: '/terms'
        },
        {
            label: t('common:footer.payment_methods'),
            href: '/payment'
        }
      ]), [t]);

    return (
        <HStack bg={useColorModeValue('gray.100', 'gray.900')}  px={{ base: 0, lg: 14}}>
            <VStack>
                <Logo boxSize={{ base: 16, lg: 28}}/>
                <HStack>
                    <FacebookRounded 
                      boxSize={{ base: 4, lg: 7}}
                      _hover={{ transform: 'scale(1.2)', transition: 'all .3s ease-in-out' }}
                    />
                    <InstagramRounded 
                      boxSize={{ base: 4, lg: 7}}
                      _hover={{ transform: 'scale(1.1)', transition: 'all .3s ease-in-out' }}
                    />
                </HStack>
            </VStack>
            <VStack>
            {Links.map(({ label, href }) => (
              <Link 
                key={label} 
                href={href} 
                colorScheme='primary'
                cursor='pointer'
              >{label.toUpperCase()}</Link>
            ))}
            </VStack>
        </HStack>
    )
}