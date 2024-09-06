import { Box, Text, Image, Container, useBreakpointValue } from "@chakra-ui/react";
import AboutImg from "../../public/AboutUS/AboutUsImg.jpg";
import Mission from "../../public/AboutUS/MissionImg.jpg";
import Story from "../../public/AboutUS/StoryImg.jpg";
import WhyChooseUs from "./WhyChooseUs";

export default function About() {
  const imageDisplay = useBreakpointValue({ base: "none", md: "block" });

  return (
    <Box>

      <Container maxW="container.xl" py={10}>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="center" alignItems="center">
          <Box flex="0.5" display={imageDisplay}>
            <Image src={AboutImg} alt="About Us image" boxSize="500px" objectFit="cover" />
          </Box>

          <Box flex="1" px={{ base: 0, md: 10 }} textAlign="center">
            <Text fontSize={{ base: "32px", md: "44px" }} fontWeight="800" mb={4}>
              ABOUT US
            </Text>
            <Text fontSize="md">
              GoldPurp's Vogue is the premier quick-to-market apparel and lifestyle brand, dedicated to delivering the latest and most sought-after fashion items to customers around the globe. Our commitment to style and quality has made us a rising star in the fashion industry. As a Lagos-based company, we offer collections for women, men, curve, and kids. We are a pop culture phenomenon, rapidly gaining a massive social media following that includes celebrity fans and collaborators. Our name is becoming synonymous with style and trendsetting. From Tiwa Savage to Burna Boy, our fashion items are gracing the wardrobes of the biggest names. Wizkid, Davido, Yemi Alade, Teni, Falz, Mr. Eazi—GoldPurp's Vogue is making its mark in the hottest chart-topping hits, nationwide.
            </Text>
          </Box>
        </Box>
      </Container>

      <Container maxW="container.xl" py={10}>
        <Box display="flex" flexDirection={{ base: "column-reverse", md: "row" }} justifyContent="center" alignItems="center">
          <Box flex="1" px={{ base: 0, md: 10 }} textAlign="center">
            <Text fontSize={{ base: "32px", md: "44px" }} fontWeight="800" mb={4}>
              OUR MISSION
            </Text>
            <Text fontSize="md">
              Our team works around the clock to bring you the world’s hottest styles. We forecast fashion trends before anyone else and introduce 1,000+ new arrivals to our site every week! We listen to our customers and are always finding innovative ways to improve and deliver the most coveted styles at a moment’s notice. It’s our top priority to ensure that our GoldPurp's Vogue community always feels confident and included. We've revolutionized the fashion industry and dominated the market with our GoldPurp's Vogue, GoldPurp's Vogue Curve, GoldPurp's Vogue Men, and an up-and-coming GoldPurp's Vogue Kids line. We cater to anyone who has an affinity for fashion. Regardless of shape, personal style, or gender, we’re here to fit everyone. Today, GoldPurp's Vogue’s mission remains the same—making affordable fashion accessible to customers around the world.
            </Text>
          </Box>

          <Box flex="0.5" display={imageDisplay}>
            <Image src={Mission} alt="Mission image" boxSize="500px" objectFit="cover" />
          </Box>
        </Box>
      </Container>

      <Container maxW="container.xl" py={10}>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="center" alignItems="center">
          <Box flex="0.5" display={imageDisplay}>
            <Image src={Story} alt="Story image" boxSize="500px" objectFit="cover" />
          </Box>

          <Box flex="1" px={{ base: 0, md: 10 }} textAlign="center">
            <Text fontSize={{ base: "32px", md: "44px" }} fontWeight="800" mb={4}>
              THE GOLDPURP'S VOGUE STORY
            </Text>
            <Text fontSize="md">
              Founded in 2023, GoldPurp's Vogue has been the brainchild of a visionary e-commerce entrepreneur based in Lagos, Nigeria. With a keen eye for fashion and an understanding of the local market, GoldPurp's Vogue identified a missing segment by bringing trendy and stylish apparel to the forefront of the affordable fashion industry. GoldPurp's Vogue has revolutionized fashion by making customers part of the conversation from concept to delivery. By staying ahead of the fashion curve and engaging with the community every day, we ensure that we deliver what our customers need as fast as possible. Utilizing social media platforms, especially Instagram, GoldPurp's Vogue connects and relates to customers in a way that has redefined customer engagement. The success of GoldPurp's Vogue was born from these initial achievements. The company quickly grew its online presence, becoming a major identifiable brand and primary source for shoppers across Nigeria and beyond. Our collections cater to a diverse range of body types, many of which are often overlooked by retailers offering limited size options and silhouettes. Over the past year, GoldPurp's Vogue has rapidly gained a following, counting thousands of followers across all social media platforms. Today, GoldPurp's Vogue continues to provide elevated styles at affordable prices with a dedicated social media following to match.
            </Text>
          </Box>
        </Box>
      </Container>

      <WhyChooseUs/>

    </Box>
  );
}
