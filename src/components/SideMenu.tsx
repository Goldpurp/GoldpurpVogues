import { useState } from "react";
import {
  Box,
  Collapse,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const SidebarMenu = () => {
  const [isOpenItem, setIsOpenItem] = useState({
    Accessories: false,
    Clothing: false,
    Footwear: false,
    Activewear: false,
    Swimwear: false,
    Sleepwear: false,
  });

  const toggleItemSection = (section: keyof typeof isOpenItem) => {
    setIsOpenItem((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const navigate = useNavigate();

  const handleSubCategoryClick = (category: string, subCategory: string) => {
    navigate(`/category/${category}/${subCategory}`);
  };

  return (
    <VStack
      h="100%"
      pb="100px"
      textAlign="left"
      overflowY="scroll"
      spacing={2}
      align="stretch"
      fontFamily="Inter, sans-serif"
      position="relative"
      css={{ "&::-webkit-scrollbar": { display: "none" } }}
    >

      <Box pt={5}>
        <Link to={"/"}>ALL PRODUCTS</Link>
      </Box>

      {/* Accessories Section */}
      <Section
        title="ACCESSORIES"
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
          <MenuItem
            key={item}
            onClick={() => handleSubCategoryClick("accessories", item)}
          >
            {item}
          </MenuItem>
        ))}
      </Section>

      {/* Clothing Section */}
      <Section
        title="CLOTHING"
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
          <MenuItem
            key={item}
            onClick={() => handleSubCategoryClick("clothing", item)}
          >
            {item}
          </MenuItem>
        ))}
      </Section>

      {/* Footwear Section */}
      <Section
        title="FOOTWEAR"
        isOpen={isOpenItem.Footwear}
        onToggle={() => toggleItemSection("Footwear")}
      >
        {["Sneakers", "Boots", "Slippers", "Heels", "Sandals", "Loafers"].map(
          (item) => (
            <MenuItem
              key={item}
              onClick={() => handleSubCategoryClick("footwear", item)}
            >
              {item}
            </MenuItem>
          )
        )}
      </Section>

      <Section
        title="ACTIVEWEAR"
        isOpen={isOpenItem.Activewear}
        onToggle={() => toggleItemSection("Activewear")}
      >
        {["Leggings", "Joggers", "Sweatshirts", "Tank Tops"].map((item) => (
          <MenuItem
            key={item}
            onClick={() => handleSubCategoryClick("activewear", item)}
          >
            {item}
          </MenuItem>
        ))}
      </Section>

      <Section
        title="SWIMWEAR"
        isOpen={isOpenItem.Swimwear}
        onToggle={() => toggleItemSection("Swimwear")}
      >
        {["Bikinis", "Swim Shorts", "Cover-Ups"].map((item) => (
          <MenuItem
            key={item}
            onClick={() => handleSubCategoryClick("swimwear", item)}
          >
            {item}
          </MenuItem>
        ))}
      </Section>

      <Section
        title="SLEEPWEAR"
        isOpen={isOpenItem.Sleepwear}
        onToggle={() => toggleItemSection("Sleepwear")}
      >
        {["Pajamas", "Nightgowns", "Robes"].map((item) => (
          <MenuItem
            key={item}
            onClick={() => handleSubCategoryClick("sleepwear", item)}
          >
            {item}
          </MenuItem>
        ))}
      </Section>

      <VStack align="start" spacing={5}>
        <Box onClick={() => navigate(Routes.Wishlist)}>
          <SpecialMenuItem>Wishlist</SpecialMenuItem>
        </Box>
        <SpecialMenuItem>Media</SpecialMenuItem>
        <SpecialMenuItem>Blog</SpecialMenuItem>
        <SpecialMenuItem>Store</SpecialMenuItem>
        <Box onClick={() => navigate(Routes.Login)}>
          <SpecialMenuItem>Login/SignUp</SpecialMenuItem>
        </Box>
        <Box onClick={() => navigate(Routes.ContactUs)}>
          <SpecialMenuItem>Contact Us</SpecialMenuItem>
        </Box>
        <Box onClick={() => navigate(Routes.About)}>
          <SpecialMenuItem>About</SpecialMenuItem>
        </Box>
      </VStack>

      <Flex
      alignItems={"center"}
        justifyContent={"space-between"}
        w={{ base: "92%", md: "83%" }}
        position="fixed"
        bottom={0}
        zIndex={10}
        bg="#fff"
        py={3}
        borderTop="1px solid #878484a9"
      >
        <Text>NG | 434,000.99</Text>
        <Link to={"/"}>goldpurp</Link>

      </Flex>
    </VStack>
  );
};

const MenuItem = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <Text fontSize="sm" cursor="pointer" _hover={{ color: "blue.500" }} onClick={onClick}>
    {children}
  </Text>
);

const SpecialMenuItem = ({ children }: { children: React.ReactNode }) => (
  <Text fontWeight={600} fontSize="sm" cursor="pointer" _hover={{ color: "blue.500" }}>
    {children}
  </Text>
);

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
  <VStack align="start" spacing={2} fontFamily={"Inter, sans-serif"}>
    <Flex w="full" justify="space-between" align="center" py={"5px"}>
      <Text
        fontFamily={"Inter, sans-serif"}
        fontWeight={"500"}
        onClick={onToggle}
        cursor="pointer"
        _hover={{ color: "blue.500" }}
      >
        {title}
      </Text>
      {isOpen ? (
        <ChevronUpIcon boxSize="24px" onClick={onToggle} />
      ) : (
        <ChevronDownIcon boxSize="24px" onClick={onToggle} />
      )}
    </Flex>
    <Collapse in={isOpen}>
      <VStack align="start" spacing={2} fontWeight={"400"} opacity={"0.8"}>
        {children}
      </VStack>
    </Collapse>
  </VStack>
);

export default SidebarMenu;