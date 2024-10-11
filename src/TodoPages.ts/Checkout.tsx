import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

const CheckoutPage = () => {
  return (
    <Box
      p={5}
      maxW="425px"
      mx="auto"
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
    >
   
      <FormControl mb={4}>
        <FormLabel>Country/Region</FormLabel>
        <Select defaultValue="Nigeria">
          <option value="Nigeria">Nigeria</option>
          {/* Add more options if needed */}
        </Select>
      </FormControl>

      <Stack spacing={4}>
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input placeholder="Last name" />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder="Address" />
        </FormControl>
        <FormControl>
          <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
          <Input placeholder="Apartment, suite, etc. (optional)" />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="City" />
        </FormControl>
        <FormControl>
          <FormLabel>State</FormLabel>
          <Select defaultValue="Lagos">
            <option value="Lagos">Lagos</option>
            {/* Add more states if needed */}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Postal code (optional)</FormLabel>
          <Input placeholder="Postal code (optional)" />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input placeholder="Phone" />
        </FormControl>
        <Checkbox>Text me with news and offers</Checkbox>
      </Stack>

      {/* Shipping Method Section */}
      <Text fontSize="xl" mt={6} mb={4} fontWeight="bold">
        Shipping method
      </Text>
      <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
        <Checkbox defaultChecked>
          Orders over $300 via DHL Express (1-3 Business Days) - FREE
        </Checkbox>
        <Checkbox>DHL Express (1-3 Business Days) - $15.00</Checkbox>
      </Box>

      {/* Payment Section */}
      <Text fontSize="xl" mt={6} mb={4} fontWeight="bold">
        Payment
      </Text>
      <Text mb={4}>All transactions are secure and encrypted.</Text>
      <FormControl mb={4}>
        <FormLabel>Card number</FormLabel>
        <Input placeholder="Card number" />
      </FormControl>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Expiration date (MM/YY)</FormLabel>
          <Input placeholder="MM / YY" />
        </FormControl>
        <FormControl>
          <FormLabel>Security code</FormLabel>
          <Input placeholder="Security code" />
        </FormControl>
      </Stack>
      <FormControl mb={4}>
        <FormLabel>Name on card</FormLabel>
        <Input placeholder="Name on card" />
      </FormControl>

      <Checkbox mb={4}>Use shipping address as billing address</Checkbox>
      <Checkbox mb={4}>PayPal</Checkbox>
      <Checkbox mb={4}>NihaoPay</Checkbox>

      {/* Order Summary Section */}
      <Text fontSize="xl" mt={6} mb={4} fontWeight="bold">
        Order Summary
      </Text>
      <FormControl mb={4}>
        <Input placeholder="Discount code or gift card" />
        <Button>Apply</Button>
      </FormControl>
      <Text fontWeight="bold">Subtotal • 2 items: $380.00</Text>

      <Button
        colorScheme="green"
        mt={8}
        w="100%"
        py={6}
        alignSelf={"center"}
        boxShadow={"1px 0px 3px 1px #403b3b55"}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default CheckoutPage;
