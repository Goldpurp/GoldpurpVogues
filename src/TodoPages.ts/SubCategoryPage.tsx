// pages/SubCategoryPage.tsx
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const SubCategoryPage = () => {
  const { categoryName, subCategoryName } = useParams<{
    categoryName: string;
    subCategoryName: string;
  }>();

  return (
    <Box>
      <h1>{subCategoryName} in {categoryName}</h1>
      {/* Render items for this subcategory */}
    </Box>
  );
};

export default SubCategoryPage;
