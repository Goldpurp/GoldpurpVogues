import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Routes } from "../routes/baseRoutes";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Flex
        align="center"
        justify="center"
        direction="column"
        py={{ base: "120px", md: "70px" }}
        fontFamily="'Poppins', sans-serif"
      >
        <Text
          fontSize="24px"
          fontWeight="800"
          padding="0 10px 10px 10px"
          fontFamily="Montserrat, sans-serif"
        >
          REGISTER ACCOUNT
        </Text>

        <Flex alignItems={"center"} fontWeight="500" gap={"5px"} pb={7}>
          <Text> Have account?</Text>
          <Text color={"#53a548"} onClick={() => navigate(Routes.Login)}>
            login here
          </Text>
        </Flex>

        <VStack
          as="form"
          gap={"20px"}
          w="85vw"
          spacing="20px"
          align="center"
          justify="center"
        >
          <FormControl
            id="name"
            w={{ base: "full", md: "500px" }}
            border={"1px solid #000"}
            borderRadius="10px"
            bg={"#b7e4c7"}

          >
            <FormLabel
              fontSize="16px"
              fontWeight="500"
              pl={4}
              mb={0}
              py={"2px"}
            >
              Full Name
            </FormLabel>
            <Input
              type="text"
              placeholder="full name"
              h="50px"
              fontSize="15px"
              borderRadius="10px"
              border={"none"}
              bg="#fff"
              p="7px 45px 7px 12px"
              _focus={{
                boxShadow: "none",
              }}
            />
          </FormControl>

          <FormControl
            id="email"
            w={{ base: "full", md: "500px" }}
            border={"1px solid #000"}
            borderRadius="10px"
            bg={"#b7e4c7"}
          >
            <FormLabel
              fontSize="16px"
              fontWeight="500"
              pl={4}
              mb={0}
              py={"2px"}
            >
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="email address"
              h="50px"
              fontSize="15px"
              borderRadius="10px"
              border={"none"}
              bg="#fff"
              p="7px 45px 7px 12px"
              _focus={{
                boxShadow: "none",
              }}
            />
          </FormControl>

          <FormControl
            id="password"
            w={{ base: "full", md: "500px" }}
            border={"1px solid #000"}
            borderRadius="10px"
            bg={"#b7e4c7"}
          >
            <FormLabel
              fontSize="16px"
              fontWeight="500"
              pl={4}
              mb={0}
              py={"2px"}
            >
              Password
            </FormLabel>
            <Input
              type="password"
              placeholder="passsword"
              h="50px"
              fontSize="15px"
              borderRadius="10px"
              border={"none"}
              bg="#fff"
              p="7px 45px 7px 12px"
              _focus={{
                boxShadow: "none",
              }}
            />
          </FormControl>

          <FormControl
            id="mobileNumber"
            w={{ base: "full", md: "500px" }}
            border={"1px solid #000"}
            borderRadius="10px"
            bg={"#b7e4c7"}

          >
            <FormLabel
              fontSize="16px"
              fontWeight="500"
              pl={4}
              mb={0}
              py={"2px"}
            >
              Phone
            </FormLabel>
            <Input
              type="text"
              placeholder="phone number"
              h="50px"
              fontSize="15px"
              borderRadius="10px"
              border={"none"}
              bg="#fff"
              p="7px 45px 7px 12px"
              _focus={{
                boxShadow: "none",
              }}
            />
          </FormControl>

          <Button
            mt={6}
            h="45px"
            w={{ base: "full", md: "500px" }}
            colorScheme="gray"
            fontSize="15px"
            fontWeight="700"
            borderRadius="30px"
            padding="12px 18px"
            borderColor="#0d0d0c9a"
            _hover={{ bg: "#2f8c62a6" }}
            color="#fff"
            bg="#2f8c62d2"
          >
            Register
          </Button>
        </VStack>

        <Text
          fontSize="10px"
          marginTop="60px"
          maxWidth="300px"
          textAlign="center"
        >
          By selecting Create Account you agree to our{" "}
          <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
            Terms & Conditions
          </Link>{" "}
        </Text>
      </Flex>
    </>
  );
}
