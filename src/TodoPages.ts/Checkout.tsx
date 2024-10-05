import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VStack,
    Divider,
    FormControl,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
  
  const Checkout = () => {
    const [cartItems, _setCartItems] = useState<CartItem[]>([
      {
        id: 1,
        name: "Product 1",
        price: 29.99,
        quantity: 2,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Product 2",
        price: 49.99,
        quantity: 1,
        image: "https://via.placeholder.com/150",
      },
    ]);
  
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
    return (
      <Container maxW="container.lg" py={8}>
        <Heading mb={4}>Checkout</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Cart Items Section */}
          <Box>
            <Heading size="md" mb={4}>
              Your Cart
            </Heading>
            {cartItems.map((item) => (
              <HStack key={item.id} justify="space-between" mb={4}>
                <HStack>
                  <Image boxSize="50px" src={item.image} alt={item.name} />
                  <VStack align="flex-start">
                    <Text>{item.name}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                  </VStack>
                </HStack>
                <Text>${(item.price * item.quantity).toFixed(2)}</Text>
              </HStack>
            ))}
            <Divider my={4} />
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Total
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                ${totalPrice.toFixed(2)}
              </Text>
            </HStack>
          </Box>
  
          {/* Checkout Form Section */}
          <Box bg={useColorModeValue("gray.50", "gray.700")} p={6} borderRadius="md">
            <Heading size="md" mb={4}>
              Billing Information
            </Heading>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" placeholder="John Doe" 
                   _focus={{
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="johndoe@example.com" />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input type="text" placeholder="123 Main St" />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder="City" />
              </FormControl>
              <FormControl>
                <FormLabel>Postal Code</FormLabel>
                <Input type="text" placeholder="Postal Code" />
              </FormControl>
              <Button colorScheme="blue" size="lg" mt={4}>
                Place Order
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    );
  };
  
  export default Checkout;
  