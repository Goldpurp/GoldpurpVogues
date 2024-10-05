// pages/CategoryPage.tsx
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  return (
    <Box>
      <h1>{categoryName}</h1>
      {/* Render items for this category */}
    </Box>
  );
};

export default CategoryPage;
