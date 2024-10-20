import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://i.pinimg.com/control/564x/49/ba/2a/49ba2acca7886e063b07ea2300a69716.jpg",
    alt: "Hover me",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/control/564x/49/ba/2a/49ba2acca7886e063b07ea2300a69716.jpg",
    alt: "Hover me",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/control/564x/49/ba/2a/49ba2acca7886e063b07ea2300a69716.jpg",
    alt: "Hover me",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/control/564x/49/ba/2a/49ba2acca7886e063b07ea2300a69716.jpg",
    alt: "Hover me",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/control/564x/49/ba/2a/49ba2acca7886e063b07ea2300a69716.jpg",
    alt: "Hover me",
  },
];

const ImageCard = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <Flex
      // width="410px"
      flex={1}
      height="254px"
      backgroundColor="#212121"
      borderRadius="4px"
      padding="0.4em"
      gap="5px"
    >
      {images.map((image, index) => (
        <Flex
          key={image.id}
          height="100%"
          flex={hoverIndex === index ? 4 : 1}
          overflow="hidden"
          cursor="pointer"
          borderRadius="2px"
          transition="all 0.5s"
          backgroundColor="#212121"
          border="1px solid #ff5a91"
          justifyContent="center"
          alignItems="center"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            minW="14em"
            padding="0.5em"
            transform={hoverIndex === index ? "rotate(0)" : "rotate(-90deg)"}
            transition="all 0.5s"
            textTransform="uppercase"
            color="#ff568e"
            letterSpacing="0.1em"
          />
          <Text
            minW="14em"
            padding="0.5em"
            textAlign="center"
            transform={hoverIndex === index ? "rotate(0)" : "rotate(-90deg)"}
            transition="all 0.5s"
            textTransform="uppercase"
            color="#ff568e"
            letterSpacing="0.1em"
          >
            {image.alt}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default ImageCard;
