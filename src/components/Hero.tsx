import {
  Flex,
  Image,
  Text,
  Button as ChakraButton,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HeroImg from "../../public/Images/hero3.png";
import HeroImgMini from "../../public/Images/heroMini3.png";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const Hero: React.FC = () => {
  const heroImgWidth = useBreakpointValue({ base: "300px", md: "520px" });
  const miniImgDisplay = useBreakpointValue({
    base: "none",
    sm: "block",
  });

  return (
    <Flex
      w="100vw"
      h="100%"
      p="0 10px"
      bg="#eef0eb"
      justifyContent="space-evenly"
      position="relative"
    >
      <Flex
        direction="column"
        maxW={{ base: "220px", md: "320px", lg: "450px" }}
        gap="8px"
        position="absolute"
        left={{ base: "30px", md: "40px", lg: "70px" }}
        top={{ base: "220px", md: "330px", lg: "350px" }}
        zIndex="1"
        css={css`
          animation: ${fadeIn} 5s ease-out;
        `}
      >
        <Text
          fontSize={{ base: "15px", md: "25px", lg: "35px" }}
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          SUMMER SALE IS ON
        </Text>
        <Text
          as="h1"
          fontSize={{ base: "30px", md: "45px", lg: "65px" }}
          fontWeight="400"
          fontFamily="Irish Grover, system-ui"
        >
          Discover Men's Latest Fashion
        </Text>
        <ChakraButton
          w={"fit-content"}
          p={4}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          color="#000000"
          fontSize={{ base: "15px", lg: "18px" }}
          fontWeight="300"
          variant="outline"
          borderRadius="5px"
          borderColor="#000"
          bg="transparent"
          _hover={{
            transform: "scale(0.96)",
            borderColor: "#bcb8b1",
            bg: "#edede9",
            transition: "all 0.4s linear",
          }}
        >
          Discover More <MdKeyboardDoubleArrowRight />
        </ChakraButton>
      </Flex>

      <Image
        src={HeroImg}
        alt="HomeImage"
        position="relative"
        width={heroImgWidth}
      />

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
    </Flex>
  );
};

export default Hero;
