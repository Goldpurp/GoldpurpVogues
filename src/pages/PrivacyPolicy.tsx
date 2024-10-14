import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <Box maxW="800px" mx="auto" p="20px" fontFamily="Arial, sans-serif" pt={"60px"} bg={"#f0fff11a"}>
      <Flex alignItems="center" justifyContent={"center"}>
        <Heading as="h1" fontSize="20px">
        Privacy Policy
        </Heading>
      </Flex>

      <Box my="20px">
        <Heading as="h2" fontSize="1.8em" mb="15px">
          Introduction
        </Heading>
        <Text fontSize="1em" lineHeight="1.6" mb="15px">
          Welcome to GoldPurp's Vogue. We value your privacy and are committed to protecting your
          personal information. This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your information when you visit our website and shop for fashion items.
        </Text>
      </Box>

      <Box mb="20px">
        <Heading as="h2" fontSize="1.8em" mb="15px">
          Information We Collect
        </Heading>
        <Text fontSize="1em" lineHeight="1.6" mb="15px">
          When you make a purchase or create an account on GoldPurp's Vogue, we collect personal
          information such as your name, email address, shipping address, and payment details. We
          also gather information about your browsing behavior and preferences through cookies and
          other tracking technologies.
        </Text>
      </Box>

      <Box mb="20px">
        <Heading as="h2" fontSize="1.8em" mb="15px">
          How We Use Your Information
        </Heading>
        <Text fontSize="1em" lineHeight="1.6" mb="15px">
          We use the information collected to process your orders, manage your account, and provide
          you with a personalized shopping experience. Additionally, we may use your data to send
          you promotional offers, updates about new arrivals, and other marketing materials, with
          your consent where required.
        </Text>
      </Box>

      <Box mb="20px">
        <Heading as="h2" fontSize="1.8em" mb="15px">
          Data Security
        </Heading>
        <Text fontSize="1em" lineHeight="1.6" mb="15px">
          At GoldPurp's Vogue, we take reasonable measures to protect your personal information from
          unauthorized access and misuse. Despite our efforts, no data transmission over the internet
          or electronic storage is completely secure, so we cannot guarantee absolute security.
        </Text>
      </Box>

      <Box mb="20px">
        <Heading as="h2" fontSize="1.8em" mb="15px">
          Your Rights
        </Heading>
        <Text fontSize="1em" lineHeight="1.6" mb="15px">
          You have the right to access, correct, or delete your personal information. If you wish
          to exercise these rights or have any concerns about our data practices, please contact us
          at [Your Contact Information].
        </Text>
      </Box>

      <Box mb="20px">
        <Heading as="h2" fontSize="1.8em" mb="15px">
          Changes to This Policy
        </Heading>
        <Text fontSize="1em" lineHeight="1.6" mb="15px">
          We may update this Privacy Policy periodically to reflect changes in our practices or legal
          obligations. We will notify you of any significant changes by posting the revised policy
          on our website.
        </Text>
      </Box>

      <Box mb="20px">
        <Heading as="h2" fontSize="1.8em" mb="15px">
          Contact Us
        </Heading>
        <Text fontSize="1em" lineHeight="1.6" mb="15px">
          If you have any questions or concerns about this Privacy Policy or how we handle your
          personal information, please reach out to us at [Your Contact Information].
        </Text>
      </Box>
    </Box>
  );
}
