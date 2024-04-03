import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Stack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            My Website
          </Heading>
        </Flex>

        <Stack direction="row" spacing={4} align="center">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Stack>
      </Flex>

      {/* Hero section */}
      <Flex padding={20} align="center" justify="center" direction="column" bg="gray.50">
        <Heading as="h1" size="2xl" mb={6} textAlign="center">
          Welcome to my awesome website!
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="600px">
          This is a sample website built with React, Chakra UI and react-icons. Feel free to look around!
        </Text>
        <Button colorScheme="blue" size="lg" mt={8}>
          Get Started
        </Button>
      </Flex>

      {/* Features section */}
      <Flex padding={20} justify="center" bg="white">
        <Stack spacing={8} maxW="1000px">
          <Heading as="h2" size="xl" textAlign="center">
            Features
          </Heading>
          <Flex justify="space-between">
            <Box maxW="300px" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGljb258ZW58MHx8fHwxNzEyMTAzNjE1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web development" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Web Development
              </Heading>
              <Text>We build modern, responsive websites using the latest web technologies.</Text>
            </Box>
            <Box maxW="300px" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpY29ufGVufDB8fHx8MTcxMjEwMzYxNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mobile apps" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Mobile Apps
              </Heading>
              <Text>Cross-platform mobile apps for iOS and Android built with React Native.</Text>
            </Box>
            <Box maxW="300px" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwaWNvbnxlbnwwfHx8fDE3MTIxMDM2MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Consulting" />
              <Heading as="h3" size="lg" mt={4} mb={4}>
                Consulting
              </Heading>
              <Text>Expert advice and consulting services to help grow your business.</Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>

      {/* Footer */}
      <Flex as="footer" padding="2rem" bg="gray.100" justify="center">
        <Stack direction="row" spacing={4}>
          <Link href="https://github.com">
            <Icon as={FaGithub} boxSize={6} />
          </Link>
          <Link href="https://twitter.com">
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://linkedin.com">
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Index;
