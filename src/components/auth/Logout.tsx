import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function Logout() {
    const { t } = useTranslation('auth', { keyPrefix: 'login' });

    const handleOnSignOut = useCallback(() => {
        signOut({ callbackUrl: '/' })
    }, []);

    return (
        <Button onClick={handleOnSignOut}>
            {t('logout')}
        </Button>
    )
}