import { Button } from "@chakra-ui/button";
import { Box, Heading, HStack, Link, VStack } from "@chakra-ui/layout";
import { NextPage } from "next";
import { FC, useState } from "react";
import { RiDiscordFill } from "react-icons/ri";
import MotionBox from "../components/MotionBox";
import LazyLoad from "react-lazyload";
import BackgroundVideo from "../components/BackgroundVideo";
import Head from "next/head";

const Overlay: FC = () => (
  <Box
    w="full"
    minHeight="100vh"
    objectFit="cover"
    position="absolute"
    bg="blackAlpha.700"
    zIndex="1"
  />
);

const Home: NextPage = () => {
  return (
    <Box overflow="hidden">
      <Head>
        <title>Dayı Discord Bot</title>
      </Head>
      <Overlay />
      <LazyLoad>
        <BackgroundVideo url="./background.mp4" />
      </LazyLoad>

      <Box
        w="full"
        zIndex="2"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack zIndex="1" spacing="4">
          <MotionBox animate={{ scale: [0, 1], transition: { duration: 1.5 } }}>
            <Heading textColor="white" textAlign="center">
              Oyunun sonunda her yol, ayrı bir sondur.
            </Heading>
          </MotionBox>
          <HStack spacing="2">
            <MotionBox
              animate={{
                translateX: [-1000, 0],
                transition: { duration: 2 },
              }}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                href="https://discordapp.com/oauth2/authorize?client_id=668047174369542174&scope=bot&permissions=805314622"
                target="_blank"
              >
                <Button
                  leftIcon={<RiDiscordFill size={24} />}
                  size="lg"
                  bg="purple.500"
                  _active={{ bg: "purple.600" }}
                  _hover={{ bg: "purple.600", transform: "translateY(-3px)" }}
                  ringColor="tr"
                  ringOffsetColor="transparent"
                  textColor="white"
                >
                  Sunucuya Ekle
                </Button>
              </Link>
            </MotionBox>
            <MotionBox
              animate={{ translateX: [1000, 0], transition: { duration: 2 } }}
            >
              <Link href="/dokuman" _hover={{ textDecoration: "none" }}>
                <Button
                  bg="gray.200"
                  _hover={{ bg: "gray.300", transform: "translateY(-3px)" }}
                  boxShadow="none"
                  size="lg"
                >
                  Döküman
                </Button>
              </Link>
            </MotionBox>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
