import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Icon,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function FAQ() {
  const faqData = [
    {
      question: "What is GoldPurp's Vogue?",
      answer:
        "GoldPurp's Vogue is the premier quick-to-market apparel and lifestyle brand, dedicated to delivering the latest and most sought-after fashion items to customers around the globe.",
    },
    {
      question: "Where is GoldPurp's Vogue located?",
      answer: "We are based in Lagos, Nigeria.",
    },
    {
      question: "What types of collections do you offer?",
      answer:
        "We offer collections for women, men, curve, and kids. We cater to anyone who has an affinity for fashion, regardless of shape, personal style, or gender.",
    },
    {
      question: "How often do you introduce new styles?",
      answer:
        "We introduce 1,000+ new arrivals to our site every week! We are always finding innovative ways to improve and deliver the most coveted styles at a moment’s notice.",
    },
    {
      question: "How does Your Vogue engage the community?",
      answer:
        "We make our customers part of the conversation from concept to delivery. By staying ahead of the fashion curve and engaging with our community every day, we ensure that we deliver what our customers need as fast as possible.",
    },
    {
      question: "How has GoldPurp's Vogue revolutionized fashion?",
      answer:
        "We've revolutionized the fashion industry by offering a wide range of sizes and styles, many of which are often ignored by other retailers. Our dedication to inclusivity and affordability has set us apart.",
    },
    {
      question: "What is the mission of GoldPurp's Vogue?",
      answer:
        "Our mission is to make affordable fashion accessible to customers around the world, ensuring that everyone feels confident and included.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container maxW="800px" py={6}>
      <Heading as="h1" fontSize={{ base: "24px", md: "28px" }} textAlign="center" mb={6}>
        Frequently Asked Questions
      </Heading>
      <VStack spacing={4}>
        {faqData.map((item, index) => (
          <Box
            key={index}
            w="full"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            overflow="hidden"
          >
            <Flex
              justify="space-between"
              align="center"
              bg="gray.100"
              p={4}
              cursor="pointer"
              onClick={() => handleToggle(index)}
            >
              <Text fontSize={{ base: "13px", md: "16px" }} fontWeight="bold">
                {item.question}
              </Text>
              <Icon
                as={AddIcon}
                boxSize={5}
                transform={openIndex === index ? "rotate(45deg)" : "rotate(0)"}
                transition="transform 0.2s"
              />
            </Flex>
            {openIndex === index && (
              <Box p={4} bg="white">
                <Text fontSize={{ base: "14px", md: "16px" }} lineHeight="1.5">
                  {item.answer}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
