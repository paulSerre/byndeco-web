import { VStack } from "@chakra-ui/react";
import { getProviders, useSession } from "next-auth/react"
import { Provider } from "next-auth/providers";
import LoginForm from "@/components/auth/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Signin({ providers }: { providers: Provider }) {

  const { data: session } = useSession();

  const router = useRouter()

  useEffect(() => {
    if (session && session.user) {
      router.push('/');
    }
  }, [session, router]);

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

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    }
}