import {
    Box,
    Container,
    Heading,
    Input,
    Text,
    Button,
    Icon,
    Image,
    useBreakpointValue,
    VStack,
    HStack,
  } from "@chakra-ui/react";
  import { IoSearchOutline } from "react-icons/io5";
  import helpDesk from "/icon/helpCenter.png";
  
  export default function HelpCenter() {
    const searchBoxWidth = useBreakpointValue({ base: "80%", md: "60%" });
    const helpImageSize = useBreakpointValue({ base: "100px", md: "150px" });
  
    return (
      <Container centerContent pt={"100px"} pb={"50px"}>
        <Heading as="h1" fontSize={{ base: "25px", md: "40px" }} fontWeight="300" mb="20px">
          How can we help?
        </Heading>
  
        <Box width={searchBoxWidth} position="relative" mb="10px">
          <Icon
            as={IoSearchOutline}
            boxSize="22px"
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            color="black"
          />
          <Input
            type="search"
            placeholder="Search our knowledge base"
            pl="40px"
            py="10px"
            fontSize="17px"
            borderRadius="5px"
            border="1px solid black"
          />
        </Box>
  
        <VStack spacing={2} mt="10px">
          <Text fontSize={{ base: "15px", md: "25px" }}>Popular searches:</Text>
          <HStack spacing={4}>
            <PopularSearchItem label="Bracelet" />
            <PopularSearchItem label="Side bag" />
            <PopularSearchItem label="Skechers" />
          </HStack>
        </VStack>
  
        <Box
          width="100%"
          bg={"#b7efc535"}
          py={{ base: "20px", md: "40px" }}
          mt="30px"
          textAlign="center"
        >
          <VStack>
            <Heading fontSize={{ base: "26px", md: "34px" }} fontFamily="Montserrat" fontWeight="bold">
              We're here to help
            </Heading>
            <Text fontSize={{ base: "13px", md: "16px" }} width="80%" mt="10px">
              Contact our support team or get your questions answered by one of our experts.
            </Text>
  
            <Image src={helpDesk} alt="Help Desk" boxSize={helpImageSize} mt={{ base: "20px", md: "40px" }} />
  
            <Button
              size="md"
              mt={{ base: "20px", md: "10px" }}
              colorScheme="teal"
              width="165px"
              height="40px"
              fontSize={{ base: "13px", md: "16px" }}
            >
              Contact support
            </Button>
          </VStack>
        </Box>
      </Container>
    );
  }
  
  function PopularSearchItem({ label }: { label: string }) {
    return (
      <Text
        px="10px"
        py="5px"
        borderRadius="5px"
        color={"#2d6a4f"}
      >
        {label}
      </Text>
    );
  }
  