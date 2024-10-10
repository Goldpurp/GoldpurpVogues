import { Flex, Link as ChakraLink } from "@chakra-ui/react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const NavLinks = () => {
  // const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate(); 

  const links = [
    { name: "Home", route: "/" }, 
    { name: "Collections", route: "/collection" },
    { name: "Brands", route: "#" },
    { name: "Blog", route: "#" },
  ];

  const handleLinkClick = (link: { name: string; route: string; }) => {
    // setActiveLink(link.name);
    navigate(link.route); 
  };

  return (
    <Flex fontSize="20px" fontWeight="500" gap={"40px"} align="center">
      {links.map((link) => (
        <ChakraLink
          key={link.name}
          // color={activeLink === link.name ? "#2d6a4f" : ""}
          // borderBottom={activeLink === link.name ? "4px solid #2d6a4f" : "none"}
          _hover={{
            // color: "#2d6a4f",
            opacity: "0.6",
            textDecoration: "none",
            // textDecorationColor: "#2d6a4f",
          }}
          onClick={() => handleLinkClick(link)}
        >
          {link.name}
        </ChakraLink>
      ))}
    </Flex>
  );
};

export default NavLinks;
