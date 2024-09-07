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

export default function SignUp() {
  const navigate = useNavigate();
  return (
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

      <Text fontWeight="500" textAlign="center">
        Have account?{" "}
        <Text onClick={() => navigate(Routes.Login)}>login here</Text>
      </Text>

      <VStack as="form" w="85vw" spacing="20px" align="center" justify="center">
        <FormControl id="email" w={{ base: "full", md: "500px" }}>
          <FormLabel fontSize="13px" fontWeight="500" ml="10px">
            Email
          </FormLabel>
          <Input
            type="email"
            placeholder="email address"
            h="45px"
            fontSize="14px"
            borderRadius="10px"
            bg="#fff"
            p="7px 45px 7px 12px"
            borderColor="#000"
          />
        </FormControl>

        <FormControl id="password" w={{ base: "full", md: "500px" }}>
          <FormLabel fontSize="13px" fontWeight="500" ml="10px">
            Password
          </FormLabel>
          <Input
            type="password"
            placeholder="password"
            fontSize="14px"
            borderRadius="10px"
            bg="#fff"
            h="45px"
            p="7px 45px 7px 12px"
            borderColor="#000"
          />
        </FormControl>

        <FormControl id="mobileNumber" w={{ base: "full", md: "500px" }}>
          <FormLabel marginLeft="10px" fontSize="13px" fontWeight="500">
            Phone
          </FormLabel>
          <Input
            type="text"
            placeholder="mobile number"
            h="45px"
            fontSize="14px"
            borderRadius="10px"
            bg="#fff"
            p="7px 45px 7px 12px"
            borderColor="#000"
          />
        </FormControl>

        <Button
          mt={6}
          w={{ base: "full", md: "500px" }}
          colorScheme="gray"
          fontSize="15px"
          fontWeight="700"
          borderRadius="30px"
          padding="12px 18px"
          _hover={{ backgroundColor: "#ced4da" }}
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
  );
}
