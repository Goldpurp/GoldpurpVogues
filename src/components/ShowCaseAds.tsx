import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import capImage from "/Images/cap.png";
import braceletImage from "/Images/bracelet.png";

const MotionFlex = motion(Flex);

const ShowcaseItem = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <MotionFlex
      minWidth={{ base: "100vw", lg: "50vw" }}
      height={{ base: "220px", md: "270px", xl: "280px" }}
      alignItems="center"
      justifyContent="space-evenly"
      overflowX="auto"
      bgColor="#eef0eb"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        marginLeft="10px"
        gap="15px"
      >
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", xl: "26px" }}
            fontWeight="600"
            fontFamily="Concert One, sans-serif"
          >
            {title}
          </Text>
          <Heading
            fontSize={{ base: "14px", md: "15px", xl: "22px" }}
            fontWeight="400"
            fontFamily="Julee, cursive"
          >
            {description}
          </Heading>
        </Box>
        <Button
          rightIcon={<MdKeyboardDoubleArrowRight />}
          fontFamily="Jolly Lodger, system-ui"
          border="1px solid #000"
          borderRadius="5px"
          variant="outline"
          w={"fit-content"}
          _hover={{
            transform: "scale(0.96)",
            borderColor: "#bcb8b1",
            bgColor: "#edede9",
            transition: "all 0.4s linear",
          }}
        >
          Enter Shop
        </Button>
      </Flex>
      <Image
        src={imageSrc}
        alt={title}
        width={{ base: "200px", sm: "250px", md: "320px" }}
        height={{ base: "200px", sm: "250px", md: "320px" }}
        objectFit="contain"
      />
    </MotionFlex>
  );
};

export default function ShowCaseAds() {
  return (
    <Flex
      gap="8px"
      overflowX="auto"
      flexWrap="nowrap"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <ShowcaseItem
        title="Accessories"
        description="Designed Caps for culture kings"
        imageSrc={capImage}
      />
      <ShowcaseItem
        title="Jewelries"
        description="Unisex Moissanite Bracelets"
        imageSrc={braceletImage}
      />
    </Flex>
  );
}
