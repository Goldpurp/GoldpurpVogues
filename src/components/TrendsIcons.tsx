import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function TrendsIcons() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  const buttonStyles = (label: string) => ({
    borderRadius: "0px",
    background: "#e7ecef5f",
    fontSize: { base: "10px", md: "13px" },
    padding: { base: "0px 15px", md: "7px 18px" },
    border: activeButton === label ? "3px solid #000" : "1px solid #7d7b7b",
  });

  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Heading
          as="h3"
          fontSize={{ base: "35px", md: "45px", lg: "52px" }}
          ml="20px"
          mt="10px"
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
          {["Best Sellers", "Sale", "Graphics", "Jeans"].map((label) => (
            <Button
              key={label}
              variant="outline"
              {...buttonStyles(label)}
              onClick={() => handleButtonClick(label)}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  );
}
