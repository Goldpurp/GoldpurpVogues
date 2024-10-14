import {
  Button,
  Flex,
  Input,
  Stack,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import FAQ from "../components/Faq";

const ContactForm = () => {
  return (
    <Flex direction={"column"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        minH="100vh"
        bg="white"
        pt={{ base: "65px", md: "0px" }}
      >
        <Flex alignItems="center" justifyContent={"center"}>
          <Heading as="h1" fontSize="20px">
            Contact Us
          </Heading>
        </Flex>
        <Flex
          flex={1}
          align="center"
          justify="center"
          p={4}
          bg="white"
          color="black"
        >
          <Stack spacing={4} maxW="md" w="full">
            <Text textAlign={"center"}>
              Feel free to reach out to us at any time. We'll respond as soon as
              possible to assist you with your inquiry. Feel free to contact us
              any time. We will get back to you as soon as we can!
            </Text>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="name">
              <FormLabel>Subject</FormLabel>
              <Input type="text" placeholder="Enter your name" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter your message" />
            </FormControl>
            <Button colorScheme="green" size="lg" mt={4}>
              Send
            </Button>
          </Stack>
        </Flex>

        <Flex
          flex={1}
          direction="column"
          p={8}
          bg="#344e41"
          color="#fff"
          justify="center"
          mb={6}
          position={"relative"}
        >
          <Stack spacing={4}>
            <Text fontSize={{ base: "25px", md: "50px" }} fontWeight="bold">
              Info
            </Text>
            <Flex align="center">
              <EmailIcon mr={3} />
              <Text fontSize={{ base: "15px", md: "20px" }}>
                goldpurpvogue@mail.me
              </Text>
            </Flex>
            <Flex align="center">
              <PhoneIcon mr={3} />
              <Text fontSize={{ base: "15px", md: "20px" }}>
                +2348109675377
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} mr={3} />
              <Text fontSize={{ base: "15px", md: "20px" }}>Ogun Ng</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaClock} mr={3} />
              <Text fontSize={{ base: "15px", md: "20px" }}>08:00 - 18:00</Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <FAQ />
    </Flex>
  );
};

export default ContactForm;
