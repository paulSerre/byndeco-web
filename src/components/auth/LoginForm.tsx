import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { Provider } from "next-auth/providers";
import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function LoginForm({ providers }: { providers: Provider}) {

    const { t } = useTranslation('auth', { keyPrefix: 'login' });
    
    return (
        <>
            <Flex align="center" alignSelf="stretch" direction="row">
                <Heading mx="auto" fontWeight="600" fontSize="3xl">
                {t('login_title')}
                </Heading>
            </Flex>

            {Object.values(providers).map((provider) => (
                <Box key={provider.name}>
                    <Button onClick={() => signIn(provider.id, { callbackUrl: '/' })} leftIcon={<FaGoogle/>}>
                        {provider.name}
                    </Button>
                </Box>
            ))}
        </>
    )
}