import { useState } from "react";
import {
  VStack,
  Box,
  Icon,
  Text,
  Link,
  Collapse,
  Flex,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterByCategory, filterBySubCategory, filterByCollection } from "../redux/productSlice";
import { Routes } from "../routes/baseRoutes";

const categories = [
  {
    name: "Clothing",
    items: ["Shirts", "Hoodies", "Pants", "Tees", "Jacket", "Sweaters", "Joggers", "Shorts", "Denims", "Sweatpants"],
  },
  {
    name: "Footwears",
    items: ["Sneakers", "Slides", "Boots", "Shoes"],
  },
  {
    name: "Accessories",
    items: ["Bags", "Hats", "Belts", "Jewelries", "Glasses"],
  },
  {
    name: "Formal Wears",
    items: ["Suits", "Blazers", "Trousers"],
  },
];

const collections = ["Everyday Essentials", "New Arrivals", "Winter Collections", "Best Sellers"];

const SideDrawer = ({ onClose }: { onClose: () => void }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openCategory, setOpenCategory] = useState<string | null>(null);


  const handleExternalLinkClick = (route: string) => {
    navigate(route);
    onClose();
  };

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleCategoryClick = (category: string) => {
    dispatch(filterByCategory(category));
    navigate(`/category/${category}`);
  };

  const handleSubCategoryClick = (category: string, subCategory: string) => {
    dispatch(filterBySubCategory({ category, subCategory }));
    navigate(`/category/${category}/${subCategory}`);
    onClose();
  };

  const handleCollectionClick = (collection: string) => {
    dispatch(filterByCollection(collection));
    navigate(`/collection/${collection}`);
    onClose();
  };

  return (
    <Box w="100%" h="100vh" bg="white" py={6} px={2} overflowY="auto" position={"relative"}>


      <VStack align="start" spacing={6}>
        <VStack align="start" spacing={4} w="100%">
          {collections.map((collection) => (
            <Text
              key={collection}
              fontSize="md"
              fontWeight="500"
              cursor="pointer"
              onClick={() => handleCollectionClick(collection)}
            >
              {collection}
            </Text>
          ))}
        </VStack>

        <Box borderTop="1px solid #e2e8f0" w="100%" />

        <VStack align="start" spacing={6} w="100%">
          <Text fontSize="sm" fontWeight="500" color="gray.500">
            SHOP
          </Text>
          {categories.map((category) => (
            <Box key={category.name} w="100%">
              <Flex
                justify="space-between"
                align="center"
                onClick={() => toggleCategory(category.name)}
                cursor="pointer"
              >
                <Text
                  fontSize="md"
                  fontWeight="500"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </Text>
                <Icon
                  as={openCategory === category.name ? FaChevronDown : FaChevronRight}
                  fontSize="md"
                />
              </Flex>
              <Collapse in={openCategory === category.name} animateOpacity>
                <VStack align="start" pl={6} mt={2} spacing={2}>
                  {category.items.map((item) => (
                    <Text
                      key={item}
                      fontSize="md"
                      color="gray.600"
                      cursor="pointer"
                      onClick={() => handleSubCategoryClick(category.name, item)}
                    >
                      {item}
                    </Text>
                  ))}
                </VStack>
              </Collapse>
            </Box>
          ))}
        </VStack>

        <Box borderTop="1px solid #e2e8f0" w="100%" />

        <VStack align="start" spacing={4} w="100%">
          <Text fontSize="sm" fontWeight="500" color="gray.500">
            EXPLORE
          </Text>
          <Box onClick={() => handleExternalLinkClick(Routes.Blogs)}>
            Fashion Blogs
          </Box>
          <Link href="#" fontSize="md" fontWeight="500">
            See Our Shop
          </Link>
          <Box onClick={() => handleExternalLinkClick(Routes.About)}>
            About Our Brand
          </Box>
          <Box onClick={() => handleExternalLinkClick(Routes.ContactUs)}>
            Contact us
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
          <Text>🌍 NG | 434,000.99</Text>
          <Link href={"/"}>goldpurp</Link>

        </Flex>

      </VStack>
    </Box>
  );
};

export default SideDrawer;
