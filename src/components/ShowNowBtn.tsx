import { Button, Icon } from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

type shopNowBtnProps = {
  onclickBtn: () => void;
}

export default function ShopNowBtn({onclickBtn}:shopNowBtnProps) {
  return (
    <Button
      as={motion.button}
      onClick={onclickBtn}
      variant="unstyled"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize={{ base: "16px", md: "18px", lg: "20px", xl: "22px" }}
      fontWeight="600"
      color="white"
      borderBottom="1px solid #fff"
      cursor="pointer"
      transition="color 0.4s, border-color 0.4s"
      alignSelf="center"
      _hover={{ color: "#dee2e6", borderBottomColor: "#dee2e6" }}
    >
      SHOP NOW
      <Icon
        as={IoMdArrowDropright}
        ml="4px"
        fontSize={{ base: "22px", md: "23px", lg: "24px", xl: "26px" }}
        color="white"
        _hover={{ color: "#dee2e6" }}
      />
    </Button>
  );
}