import React from "react";
import { Box, Button, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Center minH="100dvh" bg="gray.100" p={4}>
      <Box
        maxW="500px"
        w="full"
        bg="white"
        boxShadow="md"
        borderRadius="md"
        p={6}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Image
            src="https://i.pinimg.com/originals/77/9b/9d/779b9dc3928c2dbc304bcf6702bef6df.gif"
            alt="Payment Successful"
            boxSize="150px"
            borderRadius="full"
            objectFit="cover"
          />
          <Heading size="lg" color="green.600">
            Payment Successful!
          </Heading>
          <Text fontSize="md" color="gray.600">
            Thank you for your purchase. Your payment has been successfully processed.
          </Text>
          <Text fontSize="sm" color="gray.500">
            A confirmation email has been sent to your email address.
          </Text>
          <Button
            colorScheme="green"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default PaymentConfirmation;
