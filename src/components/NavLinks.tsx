import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const links = ["Home", "Collections", "Brands", "Blog"];

  return (
    <Flex
      fontSize="20px"
      fontWeight="500"
      gap={"40px"}
      align="center"
    >
      {links.map((link) => (
        <ChakraLink
          key={link}
          href={`#${link.toLowerCase()}`}
          color={activeLink === link ? "#2d6a4f" : "inherit"}
          borderBottom={activeLink === link ? "4px solid #2d6a4f" : "none"}
          _hover={{
            color: "#2d6a4f",
            textDecoration: "none",
            textDecorationColor: "#2d6a4f",
          }}
          onClick={() => setActiveLink(link)}
        >
          {link}
        </ChakraLink>
      ))}
    </Flex>
  );
};

export default NavLinks;
