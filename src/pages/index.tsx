import ErrorBoundary from '@/components/common/ErrorBoundary'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function LandingPage() {
  return (
    <ErrorBoundary>
      <Head>
        <title>ByN Deco</title>        
        <meta
          name="description"
          content="¡Mucho más que una tienda de decoración!"
        />
        <meta name="author" content="ByN Deco" />
      </Head>

      <Flex>
        Hello !
      </Flex>
    </ErrorBoundary>
  )
}
