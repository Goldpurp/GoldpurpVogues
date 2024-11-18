import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Collapse,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function ReturnPolicy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Flex
    bg={"#b7efc510"}
    pt={"60px"}
    pb={"50px"}
      direction={{ base: "column", md: "row" }}
      maxW="1200px"
      mx="auto"
      px="20px"
      mt="15px"
      fontFamily="Arial, sans-serif"
    >
      <Box flex="2" mr={{ md: "20px" }}>
        <Heading as="h1" fontSize={{ base: "28px", md: "35px" }} mb="20px">
          OUR RETURN POLICY AND PROCESS
        </Heading>
        <Text fontSize="16px" lineHeight="25.6px" mb="15px">
          Quickly and easily return your item(s) through our Returns Portal!
          Only US customers will be able to purchase a return shipping label but
          the returns portal is open to all customers.
        </Text>
        <Button
           bg="#2d6a4f"
           _hover={{ bg: "#344e41" }}
           color={"#fff"}
          fontSize="16px"
          borderRadius="5px"
          mb="20px"
          fontWeight={"500"}
        >
          Start return
        </Button>
        <Text fontSize="16px" lineHeight="25.6px" mb="15px">
          You have 30 days from the date of delivery to return your item.
        </Text>
        <Text fontSize="16px" lineHeight="25.6px" mb="15px">
          Returns are refunded via store credit in the form of a GoldPurp's
          Vogue gift card. Returns are processed within 5-7 business days after
          your item(s) are delivered to us. To receive your store credit more
          quickly, use the prepaid return label option in our Returns Portal
          below!
        </Text>
        <Text fontSize="16px" lineHeight="25.6px" mb="15px">
          Please note: Please ensure to package each order separately. If
          multiple orders are returned inside a single return package, your
          return will require additional time to process. You will not receive
          credit for any non-eligible items returned.
        </Text>

        {[
          "Can I purchase a return shipping label?",
          "Can I exchange items?",
          "What items are final sale?",
          "Should I know anything else about the Online Return Policy?",
          "What is the Store Returns Policy?",
          "What about returning online orders in store?",
          "Reserved Rights Regarding Returns",
        ].map((question, index) => (
          <Box key={index} borderTop="1px solid #ccc">
            <Flex
              justify="space-between"
              align="center"
              p="10px"
              cursor="pointer"
              bg="#f7f7f7"
              onClick={() => toggleAccordion(index)}
            >
              <Text>{question}</Text>
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </Flex>
            <Collapse in={activeIndex === index} animateOpacity>
              <Box p="10px">
                <Text fontSize="16px" lineHeight="25.6px" mb="15px">
                  [Insert detailed answer here.]
                </Text>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>

      <Box flex="1" mt={{ base: "20px", md: "0" }}>
        <Heading as="h3" fontSize="19.2px" mb="10px">
          Suggested Articles
        </Heading>
        <List spacing={3}>
          {[
            "I have a problem with my return",
            "How refunds work",
            "Our return policy and process",
            "My order was returned to sender or refused",
            "Track my return",
          ].map((item, index) => (
            <ListItem key={index} fontSize="16px">
              {item}
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
}
