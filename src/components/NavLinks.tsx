import {
  Box,
  Flex,
  Link as ChakraLink,
  useRadioGroup,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const NavTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", route: "/" },
    { name: "Collections", route: "/collection" },
    { name: "Brands", route: "#" },
    { name: "Blog", route: "#" },
  ];

  useEffect(() => {
    const currentTabIndex = links.findIndex(
      (link) => link.route === location.pathname
    );
    setSelectedTab(currentTabIndex === -1 ? 0 : currentTabIndex); 
  }, [location.pathname, links]);

  const handleLinkClick = (linkIndex: number, route: string) => {
    setSelectedTab(linkIndex);
    navigate(route);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "tabs",
    defaultValue: "0",
  });

  const group = getRootProps();

  return (
    <Center>
      <Flex
        {...group}
        backgroundColor="#f1f7ee79"
        boxShadow="0 0 1px rgba(163, 235, 210, 0.111), 0 6px 12px rgba(158, 226, 203, 0.15)"
        padding="0.75rem"
        borderRadius="full"
        position="relative"
        width="fit-content"
      >
        {links.map((link, index) => {
          const radio = getRadioProps({ value: String(index) });
          const isActive = selectedTab === index;

          return (
            <Flex
              as="label"
              key={link.name}
              align="center"
              justify="center"
              height="30px"
              width="100px"
              fontSize="0.8rem"
              fontWeight="700"
              color={isActive ? "#3a5a40" : "black"}
              cursor="pointer"
              position="relative"
              zIndex="2"
              {...radio}
            >
              <ChakraLink
                onClick={() => handleLinkClick(index, link.route)}
                _hover={{
                  opacity: "0.6",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </ChakraLink>
            </Flex>
          );
        })}

        <MotionBox
          position="absolute"
          height="30px"
          width="100px"
          backgroundColor="#98c9a3b1"
          borderRadius="full"
          zIndex="1"
          transition="0.25s ease-out"
          animate={{
            transform: `translateX(${selectedTab * 100}%)`,
          }}
        />
      </Flex>
    </Center>
  );
};

export default NavTabs;
