import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { filterBySubCategory } from "../redux/productSlice";
import { useDispatch } from "react-redux";

export default function ProductGallery() {
  return (
    <Flex direction="column" overflow="hidden" fontFamily="'Nunito', sans-serif" w="100%">
      <Flex wrap="wrap" transition="transform 0.6s ease">
        <ProductItem
          src="https://i.pinimg.com/736x/0c/b0/67/0cb06792ac1e79cee891ba67d4026b6f.jpg"
          alt="ShoeImg"
          label="SHOP SHOES"
          category="Footwears"
          subCategory="Shoes"
        />
        <ProductItem
          src="https://i.pinimg.com/736x/56/9c/f3/569cf39c568df71ed410d911ac172edb.jpg"
          alt="BagImg"
          label="SHOP BAGS"
          category="Accessories"
          subCategory="Bags"
        />
        <ProductItem
          src="https://i.pinimg.com/736x/7a/4a/47/7a4a47e57c5679bf87ef9aa6e89b4d75.jpg"
          alt="HatImg"
          label="SHOP JACKETS"
          category="Clothing"
          subCategory="Jackets"
        />
        <ProductItem
          src="https://i.pinimg.com/736x/da/2a/f8/da2af8f9d93a7cea71165b5ee87a2bf9.jpg"
          alt="ShadeImg"
          label="SHOP EYEWEARS"
          category="Accessories"
          subCategory="Eyewears"
        />
      </Flex>
    </Flex>
  );
}

function ProductItem({
  src,
  alt,
  label,
  category,
  subCategory,
}: {
  src: string;
  alt: string;
  label: string;
  category: string;
  subCategory: string;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubCategoryClick = (category: string, subCategory: string) => {
    dispatch(filterBySubCategory({ category, subCategory }));
    navigate(`/category/${category}/${subCategory}`);
  };

  return (
    <Flex
      flex={{ base: "50%", lg: 1 }}
      maxW="50%"
      align="center"
      direction="column"
      justify="center"
      p="2px 5px 8px 5px"
      transition="transform 0.5s ease"
      _hover={{ transform: "scale(1.07)" }}
      _focus={{ transform: "scale(1.15)" }}
      cursor="pointer"
      borderWidth="1px"
      borderColor="#e2e6e9"
      bg="#e3e7eb82"
      onClick={() => handleSubCategoryClick(category, subCategory)}
    >
      <Box w="100%" h={{ base: "180px", md: "220px", lg: "250px", xl: "300px", "2xl": "350px" }} bg="#ddd">
        <Image src={src} alt={alt} w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box p="5px">
        <Text fontSize={{ base: "14px", md: "15px", lg: "17px" }} cursor="pointer">
          {label}
        </Text>
      </Box>
    </Flex>
  );
}
