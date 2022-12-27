import { HStack, VStack, useColorModeValue, Link, Box, Text } from "@chakra-ui/react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import AddressIcon from "./icons/Address";
import FacebookRounded from "./icons/FacebookRounded";
import InstagramRounded from "./icons/InstagramRounded";
import Logo from "./icons/Logo";
import MailIcon from "./icons/Mail";
import PhoneIcon from "./icons/Phone";
import WhatsappIcon from "./icons/Whatsapp";

export default function Footer() {

  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY });

  const center = useMemo(() => ({lat: -46.44526533318304, lng: -67.5206430306525}), [])

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
        <HStack 
          bg={useColorModeValue('gray.100', 'gray.900')} 
          px={{ base: 0, lg: 6}}
          py={14}
        >
            <VStack alignItems="center">
                <Logo boxSize={{ base: 28, lg: 52}}/>
                <HStack spacing={4} alignItems="center">
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
            <VStack alignItems='flex-start'>
            {Links.map(({ label, href }) => (
              <Link 
                key={label} 
                href={href} 
                colorScheme='primary'
                cursor='pointer'
              >{label.toUpperCase()}</Link>
            ))}
            </VStack>
            <VStack alignItems='flex-start' spacing="3">
                <HStack>
                  <PhoneIcon boxSize={6}/>
                  <Text>(0297) 4830778</Text>
                </HStack>
                <HStack>
                  <WhatsappIcon boxSize={6}/>
                  <Text>+54 9 2974089060</Text>
                </HStack>
                <HStack>
                  <MailIcon boxSize={6}/>
                  <Text>byndeco@yahoo.com.ar</Text>
                </HStack>
                <HStack>
                  <AddressIcon boxSize={6}/>
                  <Text overflowWrap='break-word'>Progreso lópez 22 (esquina Av. Independencia) Caleta Olivia- Santa Cruz</Text>
                </HStack>
              { !isLoaded ? <div>Loading</div> :
                <GoogleMap zoom={15} center={center} mapContainerStyle={{ width: '400px', height: '200px' }}>
                  <MarkerF position={center}/>
                </GoogleMap>}
            </VStack>
        </HStack>
    )
}