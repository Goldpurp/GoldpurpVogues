import { useState } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  maxStars?: number;
}

export default function StarRating({ maxStars = 5 }: StarRatingProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  return (
    <Flex>
      {Array.from({ length: maxStars }, (_, index) => {
        const starIndex = index + 1;

        return (
          <Box
            as="button"
            key={starIndex}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            cursor="pointer"
            mx={1}
          >
            <Icon
              as={FaStar}
              boxSize={6}
              color={
                starIndex <= (hoverRating ?? rating ?? 0)
                  ? "#faa307" : "#adb5bd"
              }
            />
          </Box>
        );
      })}
    </Flex>
  );
}
