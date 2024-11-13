// Breadcrumbs.tsx
import { Link, useLocation } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getBreadcrumbs = () => {
    return pathnames.map((value, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      return (
        <Box key={to} display="inline" color="gray.600">
          <Link to={to}>
            <Text as="span">{value}</Text>
          </Link>
          {index < pathnames.length - 1 && " > "}
        </Box>
      );
    });
  };

  return <Box mb={4}>{getBreadcrumbs()}</Box>;
};

export default Breadcrumbs;
