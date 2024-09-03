import {
  Flex,
  Text,
  Button as ChakraButton,
  Box,
  keyframes,
} from "@chakra-ui/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { css } from "@emotion/react";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

// Helper function to shuffle an array
const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Hero2: React.FC = () => {

  // Array of video URLs
  const videos = shuffleArray([
    "https://videos.pexels.com/video-files/9953191/9953191-sd_506_960_25fps.mp4",
    "https://videos.pexels.com/video-files/6764050/6764050-sd_360_640_25fps.mp4",
  ]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {videos.slice(0, 4).map((video, index) => (
        <Flex
          key={index}
          w="100vw"
          h="80vh"
          pt={"80px"}
          bg="#D8DAD3"
          justifyContent="space-evenly"
          position="relative"
          mb={1}
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

          <Box
            as="video"
            src={video}
            autoPlay
            loop
            muted
            playsInline
            objectFit="cover"
            width="100%"
            height="100%"
            position="absolute"
            top="0"
            left="0"
            zIndex="0"
          />

          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.1)"
            zIndex="0"
          />
        </Flex>
      ))}
    </Slider>
  );
};

export default Hero2;
