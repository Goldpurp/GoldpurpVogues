import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import capImage from "/Images/cap.png";
import braceletImage from "/Images/bracelet.png";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import { useState, useEffect } from "react";

const MotionFlex = motion(Flex);

const ShowcaseItem = ({
  title,
  description,
  imageSrc,
  onClick,
}: {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionFlex
      minWidth={{ base: "100vw", lg: "50vw" }}
      height={{ base: "220px", md: "270px", xl: "280px" }}
      alignItems="center"
      justifyContent="space-evenly"
      overflow="hidden"
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
      <Flex flexDir="column" justifyContent="center" ml="10px" gap="15px">
        <Box>
          <Skeleton isLoaded={!isLoading}>
            <Text
              fontSize={{ base: "17px", md: "20px", xl: "26px" }}
              fontWeight="600"
              fontFamily="Concert One, sans-serif"
            >
              {title}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Heading
              fontSize={{ base: "14px", md: "15px", xl: "22px" }}
              fontWeight="400"
              fontFamily="Julee, cursive"
            >
              {description}
            </Heading>
          </Skeleton>
        </Box>
        <Skeleton isLoaded={!isLoading}>
          <Button
            onClick={onClick}
            rightIcon={<MdKeyboardDoubleArrowRight />}
            fontFamily="Jolly Lodger, system-ui"
            border="1px solid #000"
            borderRadius="5px"
            variant="outline"
            w="fit-content"
            _hover={{
              transform: "scale(0.96)",
              borderColor: "#bcb8b1",
              bgColor: "#edede9",
              transition: "all 0.4s linear",
            }}
          >
            Enter Shop
          </Button>
        </Skeleton>
      </Flex>
      <Skeleton isLoaded={!isLoading}>
        <Image
          src={imageSrc}
          alt={title}
          width={{ base: "200px", sm: "250px", md: "320px" }}
          height={{ base: "200px", sm: "250px", md: "320px" }}
          objectFit="contain"
        />
      </Skeleton>
    </MotionFlex>
  );
};

export default function ShowCaseAds() {
  const navigate = useNavigate();

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
        onClick={() => navigate(Routes.CollectionPage)}
      />
      <ShowcaseItem
        title="Jewelries"
        description="Unisex Moissanite Bracelets"
        imageSrc={braceletImage}
        onClick={() => navigate(Routes.CollectionPage)}
      />
    </Flex>
  );
}
