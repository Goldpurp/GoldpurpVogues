import { useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

interface Color {
  name: string;
  value: string;
}

const colors: Color[] = [
  { name: "Black", value: "#000000" },
  { name: "Red", value: "#c1121f" },
  { name: "Green", value: "#588157" },
  { name: "Gray", value: "#808080" },
  { name: "Pink", value: "#fb6f92" },
  { name: "Blue", value: "#8ecae6" },
];

export default function ColorSelectComponent() {
  const [activeColor, setActiveColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setActiveColor(color);
  };

  return (
    <Flex direction="column" mb={2}>
      <Flex flexDirection={"column"} align="flex-start" mb={2} gap={2}>
        <Text fontSize={{ base: "15px", md: "17px" }} fontWeight="400" mr={4}>
          Colour: {activeColor ? activeColor : ""}
        </Text>
        <Flex>
          {colors.map((color) => (
            <Box
              key={color.value}
              w="35px"
              h="23px"
              bg={color.value}
              border={activeColor === color.name ? "2px solid black" : "1px solid #adb5bd"}
              cursor="pointer"
              mr={3}
              _hover={{ border: "2px solid #c4a163" }}
              onClick={() => handleColorClick(color.name)}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
