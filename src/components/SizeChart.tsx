import { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Switch,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  Text,
} from "@chakra-ui/react";

const cmToInches = (cm: number) => (cm * 0.393701).toFixed(2);

const measurements = [
  { size: "S", chestWidth: 57.5, frontLength: 71 },
  { size: "M", chestWidth: 60, frontLength: 72 },
  { size: "L", chestWidth: 63, frontLength: 73.5 },
  { size: "XL", chestWidth: 66, frontLength: 75 },
  { size: "2XL", chestWidth: 69, frontLength: 76.5 },
];

const SizeChartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCm, setIsCm] = useState(true);

  return (
    <>
      <Button borderRadius={0} border={"1px solid #000"} p={"3px"} variant={"ghost"} h={"fit-content"} fontSize={"10px"} fontWeight={"300"} onClick={onOpen}>Size Chart</Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={"lg"}/>
          <DrawerHeader fontWeight={"400"}>Size & Fit</DrawerHeader>

          <DrawerBody>
            <Box mb={4}>
              <Text mb={3} fontWeight="600">Model: 187cm, 76kg, Wearing Size M</Text>
              <Text>Oversized Fit</Text>
              <Box display="flex" alignItems="center" mt={2}>
                <Text mr={2}>Cm</Text>
                <Switch isChecked={!isCm} onChange={() => setIsCm(!isCm)} />
                <Text ml={2}>Inches</Text>
              </Box>
            </Box>

            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Size</Th>
                  <Th>Chest Width</Th>
                  <Th>Front Length</Th>
                </Tr>
              </Thead>
              <Tbody>
                {measurements.map(({ size, chestWidth, frontLength }) => (
                  <Tr key={size}>
                    <Td>{size}</Td>
                    <Td>{isCm ? `${chestWidth} cm` : `${cmToInches(chestWidth)} in`}</Td>
                    <Td>{isCm ? `${frontLength} cm` : `${cmToInches(frontLength)} in`}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SizeChartDrawer;