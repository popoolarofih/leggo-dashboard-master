import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Link,
} from '@chakra-ui/react';
import {
  MdEmail,
} from 'react-icons/md';
import { BsPerson,} from 'react-icons/bs';
import React from 'react';
import {FaGoogle, FaLinkedin, FaTwitter} from 'react-icons/fa'
type Props = {}

function Index({}: Props) {
  return (
    <Container bg="white" maxW="full" fontFamily="poppins" mt={0} centerContent overflow="hidden">
      <Flex>
        <Flex
          bg="#CE4912"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5}}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>                  
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Image boxSize='350px' objectFit='cover' src='/Mobile login-pana.png' alt='sign' />
                    </VStack>
                    <Text color="black" marginLeft="2rem" fontWeight="bold">
                    Create an account with us for free
                    </Text>
                    
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" boxShadow='xl' rounded='md' borderRadius="lg">
                  <Box m={8} color="Black">
                    <VStack spacing={5}>
                    <Heading>Sign Up</Heading>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          width="22rem"
                          bg="#CE4912"
                          color="white"
                          _hover={{}}>
                          Sign Up
                        </Button>
                      </FormControl>
                      <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                   <Link href='#'>
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#CE4912' }}
                      icon={<FaGoogle size="28px" />}
                    />
                    </Link> 
                    <Link href='#'> 
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#CE4912' }}
                      icon={<FaTwitter size="28px" />}
                    />
                    </Link>
                    <Link href='#'>
                    <IconButton
                      aria-label="google"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#CE4912' }}
                      icon={<FaLinkedin size="28px" />}
                    />
                    </Link>
                    
                  </HStack>
                  <Text fontSize="12px">Already have an account? Sign in using the above buttons.</Text>
                
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </Container>

  );
}

export default Index