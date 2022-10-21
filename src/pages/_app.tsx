import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '@/theme/index'
import Layout from '@/components/common/Layout'
import { getProviders, SessionProvider, useSession } from 'next-auth/react'
import '../i18n';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Layout>
        {/* @ts-ignore */}
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </SessionProvider>
    </ChakraProvider>
  )
}

function Auth({ children }: { children: JSX.Element }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const router = useRouter();
  const { status } = useSession({ required: true, onUnauthenticated() {
    router.push('/signin');
  }, })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  }
}

export default MyApp
