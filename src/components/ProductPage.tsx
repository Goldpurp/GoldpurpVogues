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
import Img2 from "/ProductImages/2.webp";
import Img3 from "/ProductImages/3.jpg";
import Img4 from "/ProductImages/4.webp";
import Img5 from "/ProductImages/5.webp";

import ColorSelectComponent from "./Color";
import SizeSelectComponent from "./Size";
import StarRating from "./StarRating";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RelatedChoice from "./RelatedChoice";
import AlsoLike from "./AlsoLike";

const images = [Img2, Img3, Img4, Img5];

export default function ProductPage() {
  const [value, setValue] = useState(1);
  const [like, setLike] = useState(false);

  const handleIncrement = () => setValue((prevValue) => prevValue + 1);
  const handleDecrement = () =>
    setValue((prevValue) => Math.max(prevValue - 1, 1));

  const toggleLike = () => setLike(!like);

  const tabs = ["DETAILS", "DESCRIPTION"];
  const detailsContent = [
    "Available In Olive",
    "Elastic Waistband",
    "Drawstring",
    "100% Polyester",
    "Back Hand Pocket    ",
    "Cargo Pockets",
    "Left Chest Pocket",
    "Pair With Cargo Zip Up Hoodie",
    "96% Polyester 4% Elastane",
    "Disclaimer: Due To The Specialized Distressing & Wash Process, Each Garment Is Unique.",
    "Imported",
  ];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      pt={"100px"}
      pb={"50px"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        flex="0.4"
        position="relative"
        px={3}
      >
        <Box maxW="640px" mx="auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={true}
            showArrows={false}
          >
            {images.map((item, index) => (
              <Box key={index}>
                <Image alt={`image-${index}`} src={item} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Flex>

      <Flex
        direction="column"
        flex="0.6"
        ml={{ md: 8 }}
        mt={{ base: 4, md: 0 }}
        px={4}
      >
        <Text fontSize={"15px"}>Crosses Cargo Sweatpant - Olive</Text>
        <Flex justify="space-between" align="center" pt={3} pb={4}>
          <Text
            as="h5"
            color="#386648"
            fontWeight={600}
            fontSize={{ base: "20px", lg: "18px" }}
          >
            ₦41,459.99
            <Text
              as="span"
              color="#780000"
              textDecoration="line-through"
              ml={6}
              fontWeight={400}
              fontSize={{ base: "13px", lg: "13px" }}
            >
              ₦58,050.00
            </Text>
          </Text>
        </Flex>

        <ColorSelectComponent />
        <SizeSelectComponent />

        <Flex alignItems={"center"} justifyContent={"space-between"} py={3}>
          <StarRating />
          <Flex align="center">
            <Button onClick={handleDecrement}>-</Button>
            <Text mx={4}>{value}</Text>
            <Button onClick={handleIncrement}>+</Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
            p={"12px"}
            bg={"#2D6A4F"}
            borderRadius={"10px"}
          >
            <Text fontSize={"16px"} fontWeight={"600"} color={"#fff"}>
              Add to cart
            </Text>
          </Flex>
          <Box m={4} w={"40px"} h={"40px"} borderRadius={"5px"} bg="white">
            <IconButton
              w={"40px"}
              h={"40px"}
              aria-label="Like Item"
              icon={
                like ? (
                  <Box boxSize="24px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                  </Box>
                ) : (
                  <Box boxSize="24px">
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
              colorScheme="red"
              border="1px solid #e9ecef" 
              _hover={{ bg: "transparent" }}
            />
          </Box>
        </Flex>

        <Tabs mt={4}>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                _selected={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderColor: "#072115",
                }}
                color="black"
                fontSize="14px"
                fontWeight="normal"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel py={2} px={0}>
              <UnorderedList>
                {detailsContent.map((desc, index) => (
                  <ListItem key={index}>{desc}</ListItem>
                ))}
              </UnorderedList>
            </TabPanel>

            <TabPanel py={2} px={0}>
              <Text>
                In a constantly changing fashion environment, staying ahead of
                the curve is key to maintaining a wardrobe that reflects both
                your personal style and the latest trends.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <RelatedChoice/>
      <AlsoLike/>
    </Flex>
  );
}
