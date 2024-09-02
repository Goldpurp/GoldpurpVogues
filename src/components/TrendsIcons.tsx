import { Box, Button, Heading, Stack } from "@chakra-ui/react";

export default function TrendsIcons() {
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Heading
          as="h3"
          fontSize={{ base: "35px", md: "45px", lg: "52px" }}
          ml="20px"
          mt={"10px"}
          fontWeight="lighter"
          fontFamily="'Jomhuria', sans-serif"
        >
          Latest Trends
        </Heading>
        <Stack
          direction="row"
          spacing="10px"
          overflowX="auto"
          textAlign="start"
          flexWrap="nowrap"
          justifyContent="flex-start"
          m="10px 20px 20px 20px"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Button
            variant="outline"
            borderRadius={"20px"}
            fontSize={{ base: "10px", md: "13px" }}
            p={{ base: "5px 15px", md: "12px 18px" }}
          >
            Best Sellers
          </Button>
          <Button
             variant="outline"
             borderRadius={"20px"}
             fontSize={{ base: "10px", md: "13px" }}
             p={{ base: "5px 15px", md: "12px 18px" }}
          >
            Sale
          </Button>
          <Button
             variant="outline"
             borderRadius={"20px"}
             fontSize={{ base: "10px", md: "13px" }}
             p={{ base: "5px 15px", md: "12px 18px" }}
          >
            Graphics
          </Button>
          <Button
          variant="outline"
          borderRadius={"20px"}
          fontSize={{ base: "10px", md: "13px" }}
          p={{ base: "5px 15px", md: "12px 18px" }}
          >
            Jeans
          </Button>
        </Stack>
      </Box>
    </>
  );
}
