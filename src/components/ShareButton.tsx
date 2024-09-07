import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useClipboard,
  useToast,
  DrawerCloseButton,
  Box,
  Input,
  IconButton,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest, FaSnapchatGhost, FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const ShareDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const currentUrl = window.location.href;
  const { onCopy } = useClipboard(currentUrl);
  const toast = useToast();

  const placement = useBreakpointValue({ base: "bottom", md: "right" }) as "top" | "right" | "bottom" | "left";

  const handleShare = (
    platform:
      | "facebook"
      | "twitter"
      | "pinterest"
      | "whatsapp"
      | "snapchat"
      | "instagram"
      | "copy"
  ) => {
    const url = encodeURIComponent(currentUrl);
    const text = encodeURIComponent(
      "found a beautiful vogue you'd like to shop from"
    );
    const shareUrls: Record<typeof platform, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`,
      whatsapp: `https://wa.me/?text=${text} ${url}`,
      snapchat: `https://www.snapchat.com/scan?attachmentUrl=${url}`,
      instagram: `https://www.instagram.com/?url=${url}`,
      copy: "",
    };

    if (platform === "copy") {
      onCopy();
      toast({
        title: "URL copied to clipboard!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
    } else {
      toast({
        title: `Cannot share to ${platform}.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement={placement} onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent
        h={{ base: "45%", md: "100%" }}
        borderRadius={{ base: "20px 20px 0px 0px", md: "0px" }}
      >
        <DrawerCloseButton size="lg" mt={1} />
        <DrawerHeader fontWeight={"400"}>share:</DrawerHeader>
        <DrawerBody justifyContent={"center"} overflowX={"auto"} px={12}>
          <VStack spacing={4} align="stretch">
            <VStack
              spacing={4}
              align="center"
              my={4}
              borderBottom={"2px solid #00000039"}
              pb={6}
            >
              <HStack spacing={4} overflowX="auto">
                <IconButton
                  aria-label="Instagram"
                  icon={<RiInstagramFill size={"27px"} />}
                  variant="outline"
                  onClick={() => handleShare("instagram")}
                />
                <IconButton
                  aria-label="Pinterest"
                  icon={<FaPinterest size={"25px"} />}
                  variant="outline"
                  onClick={() => handleShare("pinterest")}
                />
                <IconButton
                  aria-label="WhatsApp"
                  icon={<IoLogoWhatsapp size={"25px"} />}
                  variant="outline"
                  onClick={() => handleShare("whatsapp")}
                />
                <IconButton
                  aria-label="Twitter"
                  icon={<FaXTwitter size={"25px"} />}
                  variant="outline"
                  onClick={() => handleShare("twitter")}
                />
                <IconButton
                  aria-label="Snapchat"
                  icon={<FaSnapchatGhost size={"25px"} />}
                  variant="outline"
                  onClick={() => handleShare("snapchat")}
                />
                <IconButton
                  aria-label="Facebook"
                  icon={<FaFacebook size={"25px"} />}
                  variant="outline"
                  onClick={() => handleShare("facebook")}
                />
              </HStack>
            </VStack>

            <Box w="100%" mt={5}>
              <Input value={currentUrl} isReadOnly />
              <Button
                mt={2}
                w="full"
                colorScheme="green"
                onClick={() => handleShare("copy")}
              >
                Copy URL
              </Button>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const ShareButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="none" onClick={onOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          color="black"
          width={"20px"}
          height={"20px"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </Button>
      <ShareDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ShareButton;
