import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Button } from "@chakra-ui/button";
import { Box, Heading, Text, Flex, Spacer, Link } from "@chakra-ui/layout";
import { NextPage } from "next";
import { RiDiscordFill } from "react-icons/ri";

interface ICommands {
  command: string;
  description: string;
}

const commands: Array<ICommands> = [
  { command: "dayı!", description: "Tüm komutlara erişilir." },
  { command: "dayı!söz", description: "Rastgele söz paylaşılır." },
  { command: "dayı!video", description: "Rastgele güzel sahneler paylaşılır." },
  { command: "dayı!gif", description: "Rastgele gif paylaşılır." },
  {
    command: "dayı!şiir-oku",
    description: "Ses kanalında dayıya şiir okutur.",
  },
  {
    command: "dayı!şiir-kapat",
    description: "Ses kanalında dayı şiir kapatır.",
  },
];

const Document: NextPage = () => {
  return (
    <Flex
      w="full"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" p="4" w="full" height="10vh">
        <Spacer />
        <Link
          href="https://discordapp.com/oauth2/authorize?client_id=668047174369542174&scope=bot&permissions=805314622"
          target="_blank"
          _hover={{ textDecoration: "none" }}
        >
          <Button
            leftIcon={<RiDiscordFill size={24} />}
            bg="purple.400"
            _hover={{ bg: "purple.500" }}
            textColor="white"
          >
            Sunucuya Ekle
          </Button>
        </Link>
      </Box>
      <Box
        w="80vw"
        minH="90vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Accordion w="full">
          {commands.map(({ command, description }, index: number) => (
            <AccordionItem key={index}>
              <Box>
                <AccordionButton textColor="white">
                  <Box
                    display="flex"
                    flex="1"
                    alignItems="center"
                    textAlign="left"
                    h="4rem"
                  >
                    <Heading
                      textColor="white"
                      fontSize="2xl"
                      fontWeight="semibold"
                    >
                      {command}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
              <AccordionPanel pb={4}>
                <Text textColor="white">{description}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default Document;
