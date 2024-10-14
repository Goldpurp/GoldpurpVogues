import {
    Box,
    Image,
    Text,
    Heading,
    Flex,
    SimpleGrid,
  } from "@chakra-ui/react";
  import Img1 from "../../public/Products/spec.jpg";
  import { PiHandbagThin } from "react-icons/pi";
  
  const ItemList = [
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
      price: "24,999.99",
      oldPrice: "33,000.00",
      bonus: "Get 10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
      price: "24,999.99",
      oldPrice: "33,000.00",
      bonus: "Get 10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
      price: "24,999.99",
      oldPrice: "33,000.00",
      bonus: "Get 10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img1,
      label: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
      price: "24,999.99",
      oldPrice: "33,000.00",
      bonus: "Get 10% Off On ₦50,000+ Orders!",
    },
  ];
  
  export default function CategoryItemsDisplay() {
  
    return (
      <>
        <Box
        pt={"70px"}
        pb={"40px"}
          px={2}
          w="100%"
          overflow="hidden"
          letterSpacing="normal"
          fontFamily="Nunito, sans-serif"
        >
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={2}>
            {ItemList.map((item, itemIndex) => (
              <Box
                key={itemIndex}
                bg="#e3e7eb"
                border="1px solid #e2e6e9"
                cursor="pointer"
                position={"relative"}
              >
                <Image src={item.src} alt="image" objectFit="cover"/>
                <Flex
                  position="absolute"
                  right={2}
                  top={3}
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
                <Box p={2} w={"full"} bg={"#fff"}>
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
                      fontWeight={"400"}
                      fontSize={{ base: "11px", md: "13px", lg: "15px" }}
                    >
                      ₦{item.oldPrice}
                    </Text>
                  </Heading>
                  <Text
                    color="#9d2226"
                    fontSize={{ base: "9px", md: "13px", lg: "15px" }}
                    mt={"5px"}
                  >
                    {item.bonus}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </>
    );
  }
  