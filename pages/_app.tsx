import { Box, ChakraProvider, Flex, CSSReset } from "@chakra-ui/react";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box minHeight="100vh" bg="gray.900">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
