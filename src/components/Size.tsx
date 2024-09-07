import { Box, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "2XL"];

export default function SizeSelectComponent() {

  const [activeSize, setActiveSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    setActiveSize(size)
  };

  return (
    <Flex direction="column" mb={2}>
      <Flex flexDirection={"column"} align="flex-start" mb={2} gap={2}>

        <Text fontSize={{ base: "15px", md: "17px" }} fontWeight="400" mr={4}>
          Size: {activeSize ? activeSize : ""}
        </Text>

        <Flex>
          {sizes.map((size) => (
            <Box
              key={size}
              fontSize={{ base: "13px", md: "15px" }}
              py={"2px"}
              px={4}
              borderRadius="0"
              border={activeSize === size ? "2px solid black" : "1px solid #adb5bd"}
              cursor="pointer"
              mr={3}
              _hover={{ border: "2px solid #c4a163" }}
              onClick={() => handleSizeClick(size)}
              fontWeight={activeSize === size ? "bold" : "normal"}
            >
              {size}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
