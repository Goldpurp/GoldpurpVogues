import { useState } from "react";
import { Button, useDisclosure, Flex, Heading } from "@chakra-ui/react";
import ReusableDrawer from "./ReusableDrawer";
import Cart from "../pages/Cart";
import CheckoutPage from "./Checkout";

const MyComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerContent, setDrawerContent] = useState<
    "cart" | "details" | "payment"
  >("cart");

  const handleContentChange = (content: "cart" | "details" | "payment") => {
    setDrawerContent(content);
  };

  const renderHeader = () => {
    switch (drawerContent) {
      case "cart":
        return (
          <Flex alignItems="center">
            <Heading as="h1" fontSize="25px">
              Cart
            </Heading>
          </Flex>
        );
      case "details":
        return (
          <Flex alignItems="center">
            <Heading as="h1" fontSize="25px">
              Details
            </Heading>
          </Flex>
        );
      case "payment":
        return (
          <Flex alignItems="center">
            <Heading as="h1" fontSize="25px">
              Payment
            </Heading>
          </Flex>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <ReusableDrawer
        isOpen={isOpen}
        onClose={onClose}
        headerContent={renderHeader()} // Ensure this prop matches the ReusableDrawer's type
      >
        {drawerContent === "cart" && <Cart/>}
        {drawerContent === "details" && <CheckoutPage/>}
        {drawerContent === "payment" && <p>This is the Payment content.</p>}

        <Flex mt={4}>
          <Button onClick={() => handleContentChange("cart")}>Cart</Button>
          <Button onClick={() => handleContentChange("details")} ml={2}>
            Details
          </Button>
          <Button onClick={() => handleContentChange("payment")} ml={2}>
            Payment
          </Button>
        </Flex>
      </ReusableDrawer>
    </>
  );
};

export default MyComponent;
