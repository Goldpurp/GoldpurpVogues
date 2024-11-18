import { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, Skeleton } from "@chakra-ui/react";
import ShopNowBtn from "./ShowNowBtn";
import { useNavigate } from "react-router-dom";
import { filterByCollection } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const Hero: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCollectionClick = (collection: string) => {
    dispatch(filterByCollection(collection));
    navigate(`/collection/${collection}`);
  };

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#fff"
      fontFamily={"DM Mono"}
    >
      <Skeleton isLoaded={!isLoading}>
        <Box
          as="video"
          src="https://videos.pexels.com/video-files/7037493/7037493-sd_506_960_25fps.mp4"
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
      </Skeleton>

      <Flex
        direction="column"
        align="center"
        justify="center"
        zIndex="1"
        textAlign="center"
        color="#fff"
        opacity={"0.7"}
        px={9}
      >
        <Skeleton isLoaded={!isLoading}>
          <Heading fontSize={"22px"} mb="4">
            Urban Winter Essentials
          </Heading>
        </Skeleton>
        
        <Skeleton isLoaded={!isLoading}>
          <Text fontSize={"13px"} mb="6" px={6}>
            Experience the perfect blend of style and warmth with our sleek winter
            collection.
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!isLoading}>
          <ShopNowBtn onclickBtn={() => handleCollectionClick("Winter Collections")} />


        </Skeleton>
      </Flex>

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="0"
      />
    </Box>
  );
};

export default Hero;
