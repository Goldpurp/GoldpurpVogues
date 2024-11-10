import React, { useState, useEffect } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  InputGroup,
  InputLeftElement,
  Input,
  Badge,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "/icon/gpLogo1.png";
import LOGO from "/icon/GoldpurpIcon.png";
import NavLinks from "./NavLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import SidebarMenu from "./SideMenu";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.length;
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const wishlistCount = wishlistItems.length;

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === Routes.home ||
    location.pathname === Routes.Login ||
    location.pathname === Routes.SignUp;


  return (
    <Flex direction="column">
      <Flex
        w="100%"
        h={isHomePage ? { base: "90px", lg: "100px" } : { base: "60px", lg: "100px" }}
        px={{ base: "10px", lg: "35px", "2xl": "40px" }}
        alignItems={"center"}
        justify="space-between"
        bg="transparent"
        position={"fixed"}
        top={isScrolled ? "-200px" : "0"}
        left={0}
        right={0}
        zIndex={1000}
        border={"none"}
        transition="top 0.3s"
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={{ base: "130px", md: "150px" }}
          pt={"15px"}
          h={"110px"}
        >
          <Image
            src={isHomePage ? Logo : LOGO}
            alt="logo"
            cursor="pointer"
            w="100%"
            h="100%"
            objectFit="contain"
            boxSize={"90%"}
            onClick={() => navigate(Routes.home)}
          />
        </Flex>

        <Box
          display={{ base: "none", lg: "flex" }}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          width="400px"
          justifyContent="center"
        >
          <NavLinks />
        </Box>

        <Flex gap={{ base: "15px", md: "25px" }} align="center">
          <ChakraLink>
            <Box
              w={"23px"}
              cursor="pointer"
              onClick={() => setIsModalOpen(true)}
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
          <Box onClick={() => navigate(Routes.Wishlist)}>
            <WishlistBadge wishlistCount={wishlistCount}/>
          </Box>
          <Box onClick={() => navigate(Routes.Cart)}>
            <CartBadge cartCount={cartCount} />
          </Box>
          <IconButton
            aria-label="Toggle Menu"
            icon={isOpen ? <></> : <RxHamburgerMenu size="25px" />}
            display={{ base: "flex", lg: "none" }}
            variant="transparent"
            onClick={isOpen ? onClose : onOpen}
            zIndex="2"
          />
        </Flex>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={"lg"} mt={1} />
          <DrawerHeader p={"10px 15px 0px 15px"}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              w={{ base: "130px", md: "150px" }}
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
          <DrawerBody px={4}>
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
              <Box w={"22px"}>
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

const CartBadge = ({ cartCount }: { cartCount: number }) => {
  return (
    <Box position="relative">
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
      {cartCount > 0 && (
        <Badge
          colorScheme="red"
          borderRadius="full"
          px={2}
          position="absolute"
          top="-1"
          right="-2"
          fontSize="11px"
          fontWeight={400}
        >
          {cartCount}
        </Badge>
      )}
    </Box>
  );
};


const WishlistBadge = ({ wishlistCount }: { wishlistCount: number }) => {

  return (
    <Box position="relative">
      <ChakraLink>
        <Box w={"23px"} cursor="pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </Box>
      </ChakraLink>
      {wishlistCount > 0 && (
        <Badge
          colorScheme="pink"
          borderRadius="full"
          px={2}
          position="absolute"
          top="-1"
          right="-2"
          fontSize="11px"
          fontWeight={400}
        >
          {wishlistCount}
        </Badge>
      )}
    </Box>
  );
};

export default Header;
