import { Box, Text, Flex } from "@chakra-ui/react";

interface Color {
  name: string;
  value: string;
}

interface ColorSelectComponentProps {
  selectedColor: string | undefined;
  colors: Color[];
  onColorSelect: (color: string) => void;
}

export default function ColorSelectComponent({
  selectedColor,
  colors,
  onColorSelect,
}: ColorSelectComponentProps) {
  return (
    <Flex direction="column" mb={2}>
      <Flex flexDirection={"column"} align="flex-start" mb={2} gap={2}>
        <Text fontSize={{ base: "15px", md: "17px" }} fontWeight="400" mr={4}>
          Colour: {selectedColor ? selectedColor : ""}
        </Text>
        <Flex>
          {colors.map((color) => (
            <Box
              key={color.value}
              w="35px"
              h="23px"
              bg={color.value}
              border={
                selectedColor === color.name
                  ? "2px solid #c4a163"
                  : "1px solid #adb5bd"
              }
              cursor="pointer"
              mr={3}
              _hover={{ border: "2px solid #c4a163" }}
              onClick={() => onColorSelect(color.name)}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
