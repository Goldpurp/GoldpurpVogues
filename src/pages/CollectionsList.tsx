import { useEffect, useState } from "react";
import { Text, Button, Flex, Box, Skeleton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { filterByCollection } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const collections = [
  {
    label: "Everyday Essentials",
    imageUrl:
      "https://i.pinimg.com/736x/57/4a/41/574a41f83974bd10473bbfc9c8f35bc8.jpg",
    type: "image",
  },
  {
    label: "New Arrivals",
    imageUrl:
      "https://i.pinimg.com/736x/c2/70/6d/c2706de2dfbe95f458ffc160bfb5939f.jpg",
    type: "image",
  },
  {
    label: "Winter Collections ",
    videoUrl:
      "https://videos.pexels.com/video-files/7037493/7037493-sd_506_960_25fps.mp4",
    type: "video",
  },
  {
    label: "Best Sellers",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/10-10-24_S7_62_ZDF01O440016_Black_ZSR_CZ_DJ_13-32-14_22099_CM.jpg?v=1728944383&width=600&height=900&crop=center",
    type: "image",
  },
];

const MotionBox = motion(Flex);

const CollectionsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [currentMedia, setCurrentMedia] = useState(collections[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMediaChange = (index: number) => {
    setCurrentMedia(collections[index]);
  };


  const handleCollectionClick = (collection: string) => {
    dispatch(filterByCollection(collection));
    navigate(`/collection/${collection}`);
  };

  return (
    <Flex
      h="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign={"center"}
      position="relative"
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <Skeleton
            height="100%"
            width="100%"
            isLoaded={!loading}
            startColor="gray.200"
            endColor="gray.400"
          />
        ) : currentMedia.type === "image" ? (
          <MotionBox
            key={currentMedia.imageUrl}
            bgImage={`url(${currentMedia.imageUrl})`}
            bgSize="cover"
            bgPosition="center"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="-1"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1 }}
          />
        ) : (
          <motion.video
            key={currentMedia.videoUrl}
            src={currentMedia.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      <Skeleton isLoaded={!loading} width="200px">
        <Text
          fontSize="12px"
          fontWeight="medium"
          color="#fff"
          cursor="pointer"
          mb={3}
          zIndex={10}
        >
          EXPLORE COLLECTIONS
        </Text>
      </Skeleton>

      <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} textAlign="center" zIndex={10}>
        {collections.map((collection, index) => (
          <Skeleton key={index} isLoaded={!loading}>
            <Text
              lineHeight={9}
              opacity={currentMedia === collection ? "1" : "0.4"}
              fontWeight={currentMedia === collection ? "900" : "700"}
              fontSize={"25px"}
              color={"#ffff"}
              cursor="pointer"
              onClick={() => handleMediaChange(index)}
            >
              {collection.label}
            </Text>
          </Skeleton>
        ))}

        <Box mt={12}>
          <Skeleton isLoaded={!loading} width="150px" height="35px">
            <Button
              borderBottom={"1px solid #ffffff"}
              color={"#fff"}
              background={"transparent"}
              variant="unstyled"
              alignItems="center"
              justifyContent="center"
              fontSize={"12px"}
              cursor="pointer"
              transition="color 0.4s, border-color 0.4s"
              alignSelf="center"
              _hover={{ color: "#dee2e6", borderBottomColor: "#dee2e6" }}
              onClick={() => handleCollectionClick(currentMedia.label)}
            >
              Discover Now
            </Button>
          </Skeleton>
        </Box>
      </Box>

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="0"
      />
    </Flex>
  );
};

export default CollectionsList;
