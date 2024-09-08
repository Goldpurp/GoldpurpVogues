import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Icon,
  Link,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest, FaSnapchatGhost, FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosDoneAll } from "react-icons/io";
import CopyRight from "./CopyRight";

export default function Footer() {
  type OpenState = {
    help: boolean;
    company: boolean;
    legal: boolean;
  };

  const [isOpen, setIsOpen] = useState<OpenState>({
    help: false,
    company: false,
    legal: false,
  });

  const toggleSection = (section: keyof OpenState) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Box as="footer" color="white" p="10px 20px" bg="#344e41">
      <HStack justify="center" spacing="15px" py="10px">
        <Icon as={FaPinterest} boxSize="22px" cursor="pointer" />
        <Icon as={IoLogoYoutube} boxSize="22px" cursor="pointer" />
        <Icon as={FaSnapchatGhost} boxSize="22px" cursor="pointer" />
        <Icon as={RiInstagramFill} boxSize="22px" cursor="pointer" />
        <Icon as={FaFacebook} boxSize="22px" cursor="pointer" />
        <Icon as={FaXTwitter} boxSize="22px" cursor="pointer" />
      </HStack>

      <VStack spacing="10px" py="10px">
        <Heading as="h4" size="sm">
          Newsletter + Updates
        </Heading>
        <Flex as="form" position="relative" w="100%" maxW="400px">
          <Input
            type="email"
            placeholder="Email address"
            borderColor="gray"
            bg="white"
            color="black"
            _placeholder={{ color: "gray.500" }}
            borderRadius="7px"
            h="50px"
            pr="45px"
          />
          <Button
            position="absolute"
            top="10px"
            right="8px"
            w="30px"
            h="30px"
            bg="#c4c5c1"
            borderRadius="full"
          >
            <Icon as={IoIosDoneAll} fontSize={"30px"} />
          </Button>
        </Flex>

        <Text fontSize="xs" color="#fff" textAlign="center" px={2}>
          By signing up for email, you agree to Goldpurp's Vogue{" "}
          <Link href="#" textDecoration="underline" color={"#dee2e6"}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" textDecoration="underline" color={"#dee2e6"}>
            Privacy Policy
          </Link>
          . By submitting your email address, you agree to receive recurring
          automated promotional and personalized marketing text messages (e.g.
          cart reminders) from Goldpurp's Vogue at the email address used when
          signing up. Consent is not a condition of any purchase. Reply HELP for
          help and STOP to cancel. Mail frequency varies. Msg & data rates may
          apply. View{" "}
          <Link href="#" textDecoration="underline" color={"#dee2e6"}>
            Terms
          </Link>{" "}
          &{" "}
          <Link href="#" textDecoration="underline" color={"#dee2e6"}>
            Privacy
          </Link>
        </Text>
      </VStack>

      <VStack spacing="10px" py="40px 0 30px 0" mt={3}>
        <Section
          title="GET HELP"
          isOpen={isOpen.help}
          onToggle={() => toggleSection("help")}
        >
          <Link color={"#dee2e6"}>Help Center</Link>
          <Link color={"#dee2e6"}>Track Order</Link>
          <Link color={"#dee2e6"}>Shipping Information</Link>
        </Section>

        <Section
          title="COMPANY"
          isOpen={isOpen.company}
          onToggle={() => toggleSection("company")}
        >
          <Link color={"#dee2e6"}>About Us</Link>
          <Link color={"#dee2e6"}>Contact Us</Link>
        </Section>

        <Section
          title="LEGAL"
          isOpen={isOpen.legal}
          onToggle={() => toggleSection("legal")}
        >
          <Link color={"#dee2e6"}>Privacy Policy</Link>
          <Link color={"#dee2e6"}>Return and Refund Policy</Link>
        </Section>
      </VStack>

      <CopyRight />
    </Box>
  );
}

type SectionProps = {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  onToggle: () => void;
};

const Section = ({ title, isOpen, children, onToggle }: SectionProps) => (
  <Box w="100%" borderTop="1px solid #333" py="10px">
    <Flex
      onClick={onToggle}
      justify="space-between"
      align="center"
      cursor="pointer"
      fontWeight="bold"
    >
      <Text fontSize="14px" color="white">
        {title}
      </Text>
      <Text fontSize="20px" color="white">
        {isOpen ? "-" : "+"}
      </Text>
    </Flex>
    {isOpen && (
      <VStack
        align="start"
        fontSize="12px"
        mt="10px"
        color="gray.400"
        animation="fadeIn 2s ease-out"
      >
        {children}
      </VStack>
    )}
  </Box>
);
