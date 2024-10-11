import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';
import LOGO from "/icon/GoldpurpIcon.png";


const ReusableDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  headerContent: React.ReactNode;
  children: React.ReactNode;
}> = ({
  isOpen,
  onClose,
  headerContent,
  children,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        {/* Fixed Header */}
        <Flex
          alignItems="center"
          gap={2}
          mb={4}
          p={4}
          bg="#ffffffea"
          boxShadow="md"
          position="fixed"
          top={0}
          left={{ base: 0, md: "13%", lg: "34.5%", xl: "60%" }}
          right={0}
          zIndex={9}
        >
          {/* Dynamic Header Content */}
          {headerContent}

          {/* Permanent Logo */}
          <Box
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            maxW="100px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={LOGO} alt="LOGO" objectFit="cover" />
          </Box>

          <DrawerCloseButton />
        </Flex>

        <DrawerBody mt={16}> {/* Add margin top to avoid overlap with fixed header */}
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ReusableDrawer;
