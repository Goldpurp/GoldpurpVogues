import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  UnorderedList,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import demoImg from "/Products/4.png";

import Img1 from "/ModalImgCards/1.webp";
import Img2 from "/ModalImgCards/2.webp";
import Img3 from "/ModalImgCards/3.webp";
import Img4 from "/ModalImgCards/4.webp";
import ColorSelectComponent from "./Color";
import SizeSelectComponent from "./Size";
import StarRating from "./StarRating";
import WhyChooseUs from "./WhyChooseUs";

const images = [demoImg, Img1, Img2, Img3, Img4];

export default function ProductPage() {
  const [value, setValue] = useState(1);
  const [like, setLike] = useState(false);
  const [activeIndex, _setActiveIndex] = useState(0);

  const handleIncrement = () => setValue((prevValue) => prevValue + 1);
  const handleDecrement = () =>
    setValue((prevValue) => Math.max(prevValue - 1, 1));

  const toggleLike = () => setLike(!like);
  // const handleNext = () =>
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  // const handlePrevious = () =>
  //   setActiveIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );

  const tabs = ["DESCRIPTION", "DETAILS"];
  const descriptionContent = [
    "Model Height: 6'1 - Wearing Large",
    "Big & Tall: Height 6'5 - Wearing XXL",
    "Available In Green",
    "Cuban Collar",
    "Short Sleeve",
    "Front Button Closure",
    "Left Chest Pocket",
    "Disclaimer: Stripe Placement May Vary",
    "96% Polyester 4% Elastane",
    "Pair With 'Show Up Slim Slit Pants' Or 'Show Up Basketball Shorts'",
    "Imported",
  ];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      pt={"100px"}
      pb={"50px"}
      bg={"#e9ecef"}
      color={"#000"}
    >
      <Flex justifyContent={"center"} flex="0.4" position="relative" px={3}>
        <Image
          src={images[activeIndex]}
          alt="Product Image"
          objectFit="cover"
          boxSize="100%"
        />
      </Flex>

      <Flex
        direction="column"
        flex="0.6"
        ml={{ md: 8 }}
        mt={{ base: 8, md: 0 }}
        px={5}
      >
        <Text fontSize={"21px"}>Demo dress for product page</Text>
        <Flex justify="space-between" align="center" pt={3} pb={4}>
          <Text
            as="h5"
            color="#386648"
            mt={1}
            fontWeight={600}
            fontSize={{ base: "20px", lg: "18px" }}
          >
            $230.99
            <Text
              as="span"
              color="#780000"
              textDecoration="line-through"
              ml={6}
              fontWeight={400}
              fontSize={{ base: "15px", lg: "13px" }}
            >
              $120.99
            </Text>
          </Text>
        </Flex>

        <ColorSelectComponent />
        <SizeSelectComponent />
        
        <Flex alignItems={"center"} justifyContent={"space-between"} py={3}>

        <StarRating />

        <Flex align="center">
          <Button
        
            onClick={handleDecrement}
            cursor="pointer"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
          >
            -
          </Button>
          <Text mx={4}>{value}</Text>
          <Button
        
            cursor="pointer"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
            onClick={handleIncrement}
          >
            +
          </Button>
        </Flex>
        </Flex>


        <Flex alignItems={"center"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            h={"fit-content"}
            p={"12px"}
            borderRadius={"10px"}
            bg={"#2D6A4F"}
            cursor="pointer"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
          >
            <Text fontSize={"16px"} fontWeight={"600"} color={"#fff"}>
              Add to cart
            </Text>
          </Flex>
          <Box
            m={4}
            w={"40px"}
            h={"40px"}
            bg={"#fff"}
            borderRadius={"5px"}
            cursor="pointer"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
          >
            <IconButton
              w={"40px"}
              h={"40px"}
              aria-label="Like Item"
              icon={
                like ? (
                  <Box
                    boxSize={{ base: "25px", md: "21px", lg: "24px" }}
                    cursor="pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                  </Box>
                ) : (
                  <Box
                    boxSize={{ base: "25px", md: "21px", lg: "24px" }}
                    cursor="pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </Box>
                )
              }
              onClick={toggleLike}
              variant="ghost"
              colorScheme="teal"
              _hover={{ color: "#2f3e46" }}
              transition="900ms"
            />
          </Box>
        </Flex>

        <Tabs mt={4}>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab key={index}>{tab} </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel py={2} px={0}>
              <Text>
                In a constantly changing fashion environment, it's vital to keep
                pace with the latest tendencies and blaze new trails, which is
                one of our top priorities. Efforts of our team are directed at
                making customers' feel trendy with the accessories they pick at
                our shop.
              </Text>
            </TabPanel>
            <TabPanel py={2} px={0}>
              <UnorderedList>
                {descriptionContent.map((desc, index) => (
                  <ListItem key={index}>{desc}</ListItem>
                ))}
              </UnorderedList>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <WhyChooseUs/>
    </Flex>
  );
}
