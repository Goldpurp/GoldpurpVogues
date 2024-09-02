import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Link as ChakraLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  Collapse,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import { IoHeartOutline, IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import ImgIcon from "/Images/profile.jpeg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Flex direction="column">
      <Flex
        position={"absolute"}
        w="100%"
        h="80px"
        px={{ base: "20px", lg: "35px", "2xl": "40px" }}
        align="center"
        justify="space-between"
        bg="transparent"
        top={"0"}
        right={"0"}
        left={"0"}
        zIndex={90}
      // color={"#fff"}

      >
        <Flex align="center">
          <IconButton
            aria-label="Toggle Menu"
            icon={
              isOpen ? (
                <VscClose size="25px" />
              ) : (
                <RxHamburgerMenu size="25px" />
              )
            }
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            onClick={isOpen ? onClose : onOpen}
            zIndex="2"
          />
          <Image
            src="/icon/logoIcon.svg"
            alt="logo"
            cursor="pointer"
            boxSize={{
              base: "170px",
              sm: "180px",
              md: "220px",
              lg: "230px",
              "2xl": "240px",
            }}
            h={"50px"}
          />
        </Flex>

        <Box display={{ base: "none", md: "flex" }} width="400px">
          <LargeScreenNav />
        </Box>

        <Flex gap={{ base: "13px", md: "15px" }} align="center">
          <Icon
            as={IoSearchOutline}
            boxSize={{ base: "22px", md: "30px" }}
            cursor="pointer"
            onClick={() => setIsModalOpen(true)}
          />
          <ChakraLink>
            <Icon
              as={IoHeartOutline}
              boxSize={{ base: "23px", md: "30px" }}
              cursor="pointer"
            />
          </ChakraLink>
          <ChakraLink>
            <Icon
              as={BsHandbag}
              boxSize={{ base: "20px", md: "26px" }}
              cursor="pointer"
            />
          </ChakraLink>
          <Image
            src={ImgIcon}
            alt="Icon"
            boxSize={{ base: "28px", md: "33px" }}
            borderRadius="50%"
            cursor="pointer"
            onClick={toggleDrawer}
          />
        </Flex>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify="space-between" align="center">
              <Image
                src="/icon/logoIcon.svg"
                alt="logo"
                cursor="pointer"
                boxSize={{
                  base: "170px",
                  sm: "180px",
                  md: "220px",
                  lg: "230px",
                  "2xl": "240px",
                }}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <SidebarMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Flex>
  );
};

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent
      maxW={{ base: "80%", lg: "50%" }}
      top="180px"
      p={5}
      onClick={onClose}
      bg="transparent"
      boxShadow="none"
    >
      <Box
        as="form"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
        w="full"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoSearchOutline size={"22px"} />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="Enter search"
            bg="gray.300"
            borderColor="black"
            borderRadius="10px"
            fontSize={{ base: "15px", lg: "17px" }}
            py={{ base: "10px", lg: "15px" }}
            pl="40px"
            _placeholder={{ color: "gray.500" }}
          />
        </InputGroup>
      </Box>
    </ModalContent>
  </Modal>
);

const SidebarMenu = () => {
  const [isOpenItem, setIsOpenItem] = useState({
    AllProducts: true,
    Clothing: false,
    Footwear: false,
    Accessories: false,
    Activewear: false,
    Undergarments: false,
    Swimwear: false,
    Sleepwear: false,
  });

  const toggleItemSection = (section: keyof typeof isOpenItem) => {
    setIsOpenItem((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <VStack
      textAlign="left"
      overflowY="scroll"
      spacing={2}
      align="stretch"
      css={{ "&::-webkit-scrollbar": { display: "none" } }}
    >
      <Section
        title="Accessories"
        isOpen={isOpenItem.Accessories}
        onToggle={() => toggleItemSection("Accessories")}
      >
        {[
          "Watches",
          "Sunglasses",
          "Hats",
          "Scarves",
          "Belts",
          "Ties",
          "Wallets",
          "Necklaces",
          "Bracelets",
          "Earrings",
          "Rings",
        ].map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Section>

      <Section
        title="Clothing"
        isOpen={isOpenItem.Clothing}
        onToggle={() => toggleItemSection("Clothing")}
      >
        {[
          "Shirts",
          "T-shirts",
          "Skirts",
          "Jeans",
          "Hoodies",
          "Suits",
          "Blazers",
          "Shorts",
          "Pants",
        ].map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Section>

      <Section
        title="Undergarments"
        isOpen={isOpenItem.Undergarments}
        onToggle={() => toggleItemSection("Undergarments")}
      >
        {["Bras", "Underwear", "Lingerie", "Socks", "Hosiery"].map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Section>

      <Section
        title="Footwear"
        isOpen={isOpenItem.Footwear}
        onToggle={() => toggleItemSection("Footwear")}
      >
        {["Sneakers", "Boots", "Slippers", "Heels", "Sandals", "Loafers"].map(
          (item) => (
            <MenuItem key={item}>{item}</MenuItem>
          )
        )}
      </Section>

      <Section
        title="Swimwear"
        isOpen={isOpenItem.Swimwear}
        onToggle={() => toggleItemSection("Swimwear")}
      >
        {["Bikinis", "Swim trunks", "One-piece swimsuits", "Cover-ups"].map(
          (item) => (
            <MenuItem key={item}>{item}</MenuItem>
          )
        )}
      </Section>

      <Section
        title="Sleepwear"
        isOpen={isOpenItem.Sleepwear}
        onToggle={() => toggleItemSection("Sleepwear")}
      >
        {["Pajamas", "Nightgowns", "Robes"].map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Section>

      <Section
        title="Activewear"
        isOpen={isOpenItem.Activewear}
        onToggle={() => toggleItemSection("Activewear")}
      >
        {["Sports bras", "Leggings", "Gym shorts", "Tracksuits"].map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Section>

      <VStack align="start" spacing={2}>
        <SpecialMenuItem>Wishlist</SpecialMenuItem>
        <SpecialMenuItem>Login</SpecialMenuItem>
      </VStack>

      <VStack align="start" spacing={2}>
        <SpecialMenuItem>About</SpecialMenuItem>
        <SpecialMenuItem>Our Store</SpecialMenuItem>
        <SpecialMenuItem>Customer Care</SpecialMenuItem>
        <SpecialMenuItem>Contact Us</SpecialMenuItem>
      </VStack>

      <Divider borderColor="gray.300" />
    </VStack>
  );
};

const Section = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <VStack align="start" spacing={2} px={4}>
    <Flex w="full" justify="space-between" align="center">
      <Heading
        fontSize="md"
        onClick={onToggle}
        cursor="pointer"
        _hover={{ color: "blue.500" }}
      >
        {title}
      </Heading>
      {isOpen ? (
        <ChevronUpIcon boxSize="24px" onClick={onToggle} />
      ) : (
        <ChevronDownIcon boxSize="24px" onClick={onToggle} />
      )}
    </Flex>
    <Collapse in={isOpen}>
      <VStack align="start" spacing={1} pl={4}>
        {children}
      </VStack>
    </Collapse>
  </VStack>
);

const MenuItem = ({ children }: { children: React.ReactNode }) => (
  <Text fontSize="sm" cursor="pointer" _hover={{ color: "blue.500" }}>
    {children}
  </Text>
);

const SpecialMenuItem = ({ children }: { children: React.ReactNode }) => (
  <Text
    fontSize="sm"
    fontWeight="bold"
    cursor="pointer"
    _hover={{ color: "blue.500" }}
  >
    {children}
  </Text>
);

const LargeScreenNav = () => (
  <Flex gap={{ base: "20px", lg: "40px" }} align="center">
    <ChakraLink href="#">Home</ChakraLink>
    <ChakraLink href="#">Shop</ChakraLink>
    <ChakraLink href="#">Collections</ChakraLink>
    <ChakraLink href="#">Brands</ChakraLink>
  </Flex>
);

export default Header;
