import { VStack } from "@chakra-ui/react";
import { getProviders } from "next-auth/react"
import { Provider } from "next-auth/providers";
import AuthButton from "@/components/auth/AuthButton";

export default function Signin({ providers }: { providers: Provider }) {

    return (
        <VStack
        align="center"
        rounded="md"
        bgColor="surface"
        m="auto"
        placeSelf="center"
        spacing="6"
      >
        <AuthButton providers={providers} />
      </VStack>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    }
}