import { Box, Flex, Heading, keyframes } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

export default function DecorativeText() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      px={4}
    >
      <Flex
        align="center"
        justify="center"
        margin="10px 0"
      >
        <Line />
        <StyledText>New Arrivals</StyledText>
        <Line />
      </Flex>
    </Flex>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Line = () => (
  <Box
    width="70px"
    height="4px"
    margin="0 10px"
    bgGradient="linear(to-r, #252422, #a39379)"
    css={css`
      animation: ${fadeIn} 5s ease-out;
    `}
  />
);

interface StyledTextProps {
  children: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({ children }) => (
  <Heading
    as="h1"
    fontSize={{ base: "38px", sm: "55px", md: "75px", lg: "90px" }}
    bgGradient="linear(to-r, #252422 10%, #a39379 100%)"
    bgClip="text"
    css={css`
      animation: ${fadeIn} 2s ease-out;
    `}
    textAlign="center"
  >
    {children}
  </Heading>
);

