import Navbar from "@/components/common/Navbar";
import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Account() {
    const { data: session } = useSession();

    return (
        <>
          <Head>
            <title>ByN Deco</title>        
            <meta
              name="description"
              content="¡Mi cuenta!"
            />
            <meta name="author" content="ByN Deco" />
          </Head>
          <Navbar/>
          <Flex>
            {JSON.stringify(session)}
          </Flex>
        </>
      )
}

Account.auth = {
    
}