import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const AppBreadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const routesMap: Record<string, { label: string; path: string }> = {
    products: { label: "Products", path: "/" },
    categories: { label: "Categories", path: "/category/:category" },
    collections: { label: "Collections", path: "/collection" },
    
  };

  return (
    <Box p={3} pt={0} color={"#000"}>
      <Breadcrumb separator="/" fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment: string, index) => {
          const isLast = index === pathSegments.length - 1;
          const routeConfig = routesMap[segment.toLowerCase()];

          const label = routeConfig?.label || decodeURIComponent(segment).replace(/-/g, " ");
          const pathTo = routeConfig?.path || `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <BreadcrumbItem key={pathTo} isCurrentPage={isLast}>
              <BreadcrumbLink
                as={RouterLink}
                to={pathTo}
                color={isLast ? "gray.600" : "blue.500"}
                noOfLines={1}
                _hover={{ textDecoration: isLast ? "none" : "underline" }}
              >
                {label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Box>
  );
};
