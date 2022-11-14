/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '@/theme/index'
import Layout from '@/components/common/Layout'
import { SessionProvider, useSession } from 'next-auth/react'
import '../i18n';
import { useRouter } from 'next/router'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}

function Auth({ children }: { children: JSX.Element }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const router = useRouter();
  const { status } = useSession({ required: true, onUnauthenticated() {
    router.push('/');
  }, })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}

export default MyApp
