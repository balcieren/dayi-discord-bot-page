import { Box, ChakraProvider, Flex, CSSReset } from "@chakra-ui/react";
import Head from "next/head";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          property="og:image"
          content="https://cdna.artstation.com/p/assets/images/images/023/529/500/large/berat-bozan-tuncelkurtiz.jpg?1579520828"
          key="ogimage"
        />
        <meta property="og:title" content="DAYI" key="ogtitle" />
        <meta
          property="og:description"
          content="Dayı Discord Sunucu Botu"
          key="ogdesc"
        />
      </Head>
      <CSSReset />
      <Box minHeight="100vh" bg="gray.900">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
