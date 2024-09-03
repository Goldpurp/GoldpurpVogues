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
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Logo from "/icon/gpLogo1.png";
import NavLinks from "./NavLinks";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Flex direction="column">
      <Flex
        w="100%"
        h={{ base: "80px", lg: "100px" }}
        px={{ base: "20px", lg: "35px", "2xl": "40px" }}
        align="center"
        justify="space-between"
        bg="transparent"
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        border={"none"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={{ base: "130px", md: "150px", lg: "180px" }}
          h={"90px"}
        >
          <Image
            src={Logo}
            alt="logo"
            cursor="pointer"
            w="100%"
            h="100%"
            objectFit="contain"
            boxSize={"90%"}
          />
        </Flex>

        <Box display={{ base: "none", lg: "flex" }} width="400px">
          <NavLinks />
        </Box>

        <Flex gap={{ base: "13px", md: "15px" }} align="center">

          <ChakraLink>
            <Box w={"23px"} cursor="pointer" onClick={() => setIsModalOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Box>
          </ChakraLink>

          <ChakraLink>
            <Box w={"23px"} cursor="pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Box>
          </ChakraLink>

          <IconButton
            aria-label="Toggle Menu"
            icon={
              isOpen ? (
                <VscClose size="25px" />
              ) : (
                <RxHamburgerMenu size="25px" />
              )
            }
            display={{ base: "flex", lg: "none" }}
            variant="transparent"
            onClick={isOpen ? onClose : onOpen}
            zIndex="2"
          />
        </Flex>
        
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={"lg"} mt={1} />
          <DrawerHeader>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              w={{ base: "130px", md: "150px" }}
              h={"70px"}
            >
              <Image
                src={Logo}
                alt="logo"
                cursor="pointer"
                w="100%"
                h="100%"
                objectFit="contain"
                boxSize={"80%"}
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
      top="-200px"
      p={5}
      onClick={onClose}
      bg="transparent"
      boxShadow="none"
    >
      <Box
        as="form"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
        w="full"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
          <ChakraLink>
            <Box w={"22px"} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Box>
          </ChakraLink>
          </InputLeftElement>
          <Input
            type="search"
            placeholder="Enter search"
            bg="#dee2e6"
            outline={"none"}
            borderColor="#000"
            borderRadius="10px"
            fontSize={{ base: "15px", lg: "17px" }}
            py={{ base: "10px", lg: "15px" }}
            pl="40px"
            _placeholder={{ color: "#000" }}
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
  <VStack align="start" spacing={2}>
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

export default Header;
