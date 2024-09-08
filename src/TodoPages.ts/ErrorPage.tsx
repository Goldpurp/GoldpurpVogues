import { Box, Button, Container, Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Logo from "/icon/gpLogo1.png";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";


export default function ErrorPage() {
  const refreshPage = () => {
    window.location.reload();
  };

  const navigate = useNavigate()


  return (
    <Container maxW="full" p={4} pt={"80px"} bg={"#f0fff11a"}>
      <Flex direction="column" align="center">
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={{ base: "180px", md: "150px", lg: "180px" }}
          h={"100px"}
          mb={4}
        >
          <Image
            src={Logo}
            alt="logo"
            cursor="pointer"
            w="100%"
            h="100%"
            objectFit="contain"
            boxSize={"90%"}
          onClick={()=> navigate(Routes.home)}

          />
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-evenly" w="full">
          <Box textAlign="center" p={4}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
              Ooops!
            </Heading>
            <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="600">
              We're not sure how you got here... but you may be lost.
            </Text>

            <Heading as="h2" fontSize={{ base: "md", md: "lg" }} mt={6}>
              Possible Reasons
            </Heading>

            <UnorderedList textAlign="left" mt={2} ml={4} fontSize={{ base: "sm", md: "md" }}>
              <ListItem>The address may have been typed incorrectly</ListItem>
              <ListItem>It may be broken or outdated</ListItem>
            </UnorderedList>

            <Text fontSize={{ base: "sm", md: "md" }} mt={6}>
              Check the address and try again
            </Text>

            <Flex mt={6} gap={4} justifyContent="center">
              <Button leftIcon={<IoReturnUpBackOutline />} variant="outline" onClick={()=> navigate(Routes.home)}
> 
                Go back
              </Button>
              <Button onClick={refreshPage} variant="outline">
                Retry
              </Button>
            </Flex>
          </Box>

          <Box display={{ base: "none", md: "block" }} mt={{ base: 8, md: 0 }}>
            <Image alt="error" src="https://i.pinimg.com/564x/b6/fb/60/b6fb607c97c60df5717d7deac06ad72c.jpg" boxSize={{ base: "250px", md: "450px" }} />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
