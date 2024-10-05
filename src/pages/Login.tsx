import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import Header from "../components/Header";

export default function Login() {
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
          pb="10px"
          fontFamily="'Montserrat', sans-serif"
        >
          LOGIN ACCOUNT
        </Text>

        <Flex alignItems={"center"} fontWeight="500" gap={"5px"} pb={7}>
          <Text> New here?</Text>
          <Text color={"#53a548e7"} onClick={() => navigate(Routes.SignUp)}>Sign up</Text>
        </Flex>

        <VStack as="form" w="85vw" spacing="20px" align="center" justify="center">

          <FormControl
            id="email"
            w={{ base: "full", md: "500px" }}
            border={"1px solid #000"}
            borderRadius="10px"
            bg={"#b7e4c7"}
            mb={"20px"}
          >
            <FormLabel fontSize="16px" fontWeight="500" pl={4} mb={0} py={"2px"}>
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
            <FormLabel fontSize="16px" fontWeight="500" pl={4} mb={0} py={"2px"}>
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

          <Button
            h="45px"
            w={{ base: "full", md: "500px" }}
            fontSize="15px"
            fontWeight="600"
            p="15px 18px"
            borderRadius="30px"
            transition="400ms"
            borderColor="#0d0d0c9a"
            _hover={{ bg: "#2f8c62a6" }}
            color="#fff"
            bg="#2f8c62d2"
            border="0.6px solid"
            mt={6}
          >
            Access
          </Button>
        </VStack>

        <Text
          fontSize="14px"
          mt="60px"
          fontWeight="400"
          textAlign="center"
          maxW="200px"
        >
          Problem trying to access?{" "}
          <Link textDecoration="underline" color={"#2f8c62d2"} _hover={{ color: "#9f9aa4" }}>
            Reset password
          </Link>
        </Text>

        <Text fontSize="10px" mt="60px" textAlign="center" maxW="300px">
          By selecting Create Account you agree to our{" "}
          <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link textDecoration="underline" color={"#0c3725"} _hover={{ color: "#9f9aa4" }}>
            Terms & Conditions
          </Link>
        </Text>
      </Flex>
    </>
  );
}
