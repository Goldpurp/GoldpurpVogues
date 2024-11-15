import { Box, Text, Flex } from "@chakra-ui/react";

interface SizeSelectComponentProps {
  selectedSize: string | undefined;
  sizes: string[]; // Accepting dynamic sizes array
  onSizeSelect: (size: string) => void; // Callback function for size selection
}

export default function SizeSelectComponent({
  selectedSize,
  sizes,
  onSizeSelect,
}: SizeSelectComponentProps) {
  return (
    <Flex direction="column" mb={2}>
      <Flex flexDirection={"column"} align="flex-start" mb={2} gap={2}>
        <Text fontSize={{ base: "15px", md: "17px" }} fontWeight="400" mr={4}>
          Size: {selectedSize ? selectedSize : ""}
        </Text>

        <Flex>
          {sizes.map((size) => (
            <Box
              key={size}
              fontSize={{ base: "13px", md: "15px" }}
              py={"2px"}
              px={4}
              borderRadius="0"
              border={selectedSize === size ? "2px solid #c4a163" : "1px solid #adb5bd"}
              cursor="pointer"
              mr={3}
              _hover={{ border: "2px solid #c4a163" }}
              onClick={() => onSizeSelect(size)} // Update size selection
              fontWeight={selectedSize === size ? "bold" : "normal"}
            >
              {size}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}