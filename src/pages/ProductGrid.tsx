import Img4 from "/Products/2.png";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { PiHandbagThin } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";
import TrendsIcons from "../components/TrendsIcons";

const productList = [
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
  {
    src: Img4,
    label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    bonus: "Get 10% Off On ₦50,000+ Orders!",
  },
];

export default function ProductGrid() {
  return (
    <>
      <TrendsIcons />
      <Box
        w="100%"
        overflow="hidden"
        letterSpacing="normal"
        fontFamily="Nunito, sans-serif"
      >
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
          {productList.map((item, itemIndex) => (
            <Box
              key={itemIndex}
              bg="#e3e7eb"
              p={2}
              border="1px solid #e2e6e9"
              cursor="pointer"
            >
              <Link as={RouterLink} to="product">
                <Image src={item.src} alt="image" objectFit="cover" />
              </Link>
              <Flex
                position="absolute"
                right={5}
                bottom={7}
                bg="white"
                p={1}
                borderRadius="full"
              >
                <Box
                  as={PiHandbagThin}
                  w={{ base: 5, lg: 6 }}
                  h={{ base: 5, lg: 6 }}
                />
              </Flex>
              <Box p={2}>
                <Text
                  noOfLines={1}
                  fontSize={{ base: "12px", md: "15px", lg: "17px" }}
                >
                  {item.label}
                </Text>
                <Heading
                  as="h5"
                  size="sm"
                  color="#386648"
                  mt={1}
                  fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                >
                  ₦{item.price}
                  <Text
                    as="span"
                    color="#780000"
                    textDecoration="line-through"
                    ml={2}
                    fontSize={{ base: "11px", md: "13px", lg: "15px" }}
                  >
                    ₦{item.oldPrice}
                  </Text>
                </Heading>
                <Text
                  color="#9d2226"
                  fontSize={{ base: "9px", md: "13px", lg: "15px" }}
                >
                  {item.bonus}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <Flex align="center" justify="center" p={4}>
          <Button
            color="white"
            width={{ base: "228px", lg: "385px" }}
            height="48px"
            fontSize="13px"
            borderRadius="30px"
            bg="black"
            _hover={{ bg: "#212529" }}
          >
            Show more
          </Button>
        </Flex>
      </Box>
    </>
  );
}
