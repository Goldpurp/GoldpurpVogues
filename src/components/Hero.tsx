import {
  Flex,
  Image,
  Text,
  Button as ChakraButton,
  keyframes,
  useBreakpointValue,
  Box,
  Skeleton,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HeroImg from "/Images/heroImg5.png";
import HeroImgMini from "/Images/heroImg5mini.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const heroImgWidth = useBreakpointValue({ base: "300px", md: "520px" });
  const miniImgDisplay = useBreakpointValue({
    base: "none",
    sm: "block",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      w="100vw"
      h="100%"
      pt={"70px"}
      bg="#D8DAD3"
      justifyContent="space-evenly"
      position="relative"
      color={"#fff"}
    >
      <Flex
        direction="column"
        maxW={{ base: "220px", md: "320px", lg: "450px" }}
        gap="8px"
        position="absolute"
        left={{ base: "30px", md: "40px", lg: "70px" }}
        top={{ base: "220px", md: "330px", lg: "350px" }}
        zIndex="1"
        opacity={"0.7"}
        css={css`
          animation: ${fadeIn} 5s ease-out;
        `}
      >
        <Skeleton isLoaded={!isLoading}>
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "25px" }}
            fontWeight="600"
            fontFamily={"Inter, sans-serif"}
          >
            TRENDY LOOKS AWAIT!
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!isLoading}>
          <Text
            as="h1"
            fontSize={{ base: "20px", md: "35px", lg: "45px" }}
            fontWeight="400"
            fontFamily="Irish Grover, system-ui"
          >
            UNLEASH YOUR STYLES WITH OUR NEWEST ARRIVALS.
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!isLoading}>
          <ChakraButton
            onClick={() => navigate(Routes.Collection)}
            fontFamily={"DM Mono"}
            w={"fit-content"}
            p={2}
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
            color={"#fff"}
            fontSize={{ base: "13px", lg: "18px" }}
            fontWeight="300"
            variant="outline"
            borderRadius="5px"
            borderColor="#fff"
            bg="transparent"
            _hover={{
              transform: "scale(0.96)",
              borderColor: "#00000098",
              bg: "#00000084",
              transition: "all 0.4s linear",
              color: "#d4d2d2",
            }}
          >
            Discover More <MdKeyboardDoubleArrowRight />
          </ChakraButton>
        </Skeleton>
      </Flex>

      <Skeleton isLoaded={!isLoading}>
        <Image
          src={HeroImg}
          alt="HomeImage"
          position="relative"
          width={heroImgWidth}
        />
      </Skeleton>

      <Skeleton isLoaded={!isLoading}>
        <Image
          src={HeroImgMini}
          alt="HomeImage"
          position="absolute"
          right="0"
          display={miniImgDisplay}
          top={{
            base: "150px",
            sm: "210px",
            md: "312px",
            lg: "300px",
          }}
          width={{
            base: "200px",
            sm: "160px",
            md: "220px",
            lg: "320px",
          }}
        />
      </Skeleton>

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.3)"
        zIndex="0"
      />
    </Flex>
  );
};

export default Hero;
