import { VStack } from "@chakra-ui/react";
import { getProviders } from "next-auth/react"
import { Provider } from "next-auth/providers";
import LoginForm from "@/components/auth/LoginForm";

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
        <LoginForm providers={providers}/>
      </VStack>
    )
}

export async function getStaticProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    }
}