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
          color={activeLink === link ? "#008000" : "inherit"}
          borderBottom={activeLink === link ? "4px solid #008000" : "none"}
          _hover={{
            color: "#008000",
            textDecoration: "none",
            textDecorationColor: "#008000",
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
