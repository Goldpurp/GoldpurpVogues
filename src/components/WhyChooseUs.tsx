import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import img from "/Images/col.jpg";

const WhyChooseUs = () => {
  const imageDisplay = useBreakpointValue({
    base: "none",
    md: "none",
    lg: "block",
  });

  return (
    <Box p={4} pt={12} bg={"#f8f9fa76"}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
        <GridItem>
          <Heading as="h2" size="lg" mb={4}>
            Why Choose Us
          </Heading>
          <Text mb={8}>
            At GoldPurp's Vogue, we believe fashion is more than just
            clothing—it's a lifestyle. Our curated collections are designed to
            make you stand out, offering a perfect blend of style, comfort, and
            affordability. From the latest trends to timeless classics, every
            piece is crafted with quality and attention to detail. Shop with us
            for exclusive designs, fast delivery, and unmatched customer service
            that ensures your experience is as flawless as your style.
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Flex alignItems="left" flexDirection={"column"} textAlign={"left"}>
              <Box w={"25px"} mb={3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
              </Box>
              <Box>
                <Heading fontSize={"17px"}>Fast & Free Shipping</Heading>
                <Text fontSize={"14px"}>
                  Live a life free from worries and stress. Adapt to change and
                  seize opportunities. Embrace challenges and grow stronger.
                </Text>
              </Box>
            </Flex>
            <Flex alignItems="left" flexDirection={"column"} textAlign={"left"}>
              <Box w={"25px"} mb={3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Box>
              <Box>
                <Heading fontSize={"17px"}>Easy to Shop</Heading>
                <Text fontSize={"14px"}>
                  Embrace effortless shopping, where opportunities to save and
                  enjoy are always within reach.
                </Text>
              </Box>
            </Flex>
            <Flex alignItems="left" flexDirection={"column"} textAlign={"left"}>
              <Box w={"25px"} mb={3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Box>
              <Box>
                <Heading fontSize={"17px"}>24/7 Support</Heading>
                <Text fontSize={"14px"}>
                  We're Here Whenever You Need Us. No matter the time or day,
                  our dedicated support team is always available to assist you.
                </Text>
              </Box>
            </Flex>
            <Flex alignItems="left" flexDirection={"column"} textAlign={"left"}>
              <Box w={"25px"} mb={3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Box>
              <Box>
                <Heading fontSize={"17px"}>Hassle Free Returns</Heading>
                <Text fontSize={"14px"}>
                  Shop with Confidence. We make it easy for you to return any
                  item with a simple and straightforward process.
                </Text>
              </Box>
            </Flex>
          </Grid>
        </GridItem>
        <GridItem display={imageDisplay}>
          <Image
            src={img}
            alt="Living Room"
            borderRadius="md"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
