import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Flex, Heading,Icon,Text,Image } from '@chakra-ui/react';
import { FcLike } from 'react-icons/fc';
import ChefSlider from '../components/Carousel/ChefSlider';
import LatestRecipeSlider from '../components/Carousel/LatestRecipeSlider';
const LandingPage = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>

                {/* Banner */}
                <Box bg="gray.100" p={8}>
                    <Flex maxW="100%" mx="auto" flexDirection={{ base: 'column', md: 'row' }} height={'600px'}>
                        <Box
                            w={
                                {
                                    
                                    base: '100%',
                                    md: '70%',
                                }}
                            // border='1px solid' 
                            p={4}>
                            <Image
                                src="https://img.freepik.com/free-vector/cooking-school-banner-design_52683-83860.jpg"
                                alt="Banner"
                                width="100%"
                                height={'100%'}
                                borderRadius={'5px'}
                            />
                        </Box>
                        <Box
                            w={{ base: '100%', md: '45%' }}
                            p={4}
                            display={'flex'}
                            flexDirection={'column'}
                            textAlign={'center'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        // border={'1px solid'}
                        >
                            <Heading as="h1" fontSize="xl" textDecoration="underline" >Savoring Summer: 11 Refreshing No-Cook Recipes</Heading>
                            <Text mt={2}>by John Doe, Food Editor at KhanaKhazana</Text>
                            <Flex align="center">
                                <Icon as={FcLike} w={6} h={6} color="red.500" />
                                <Text ml={2}><Text as="span" color="#ED7B7B" textDecoration="underline">1.1k</Text> Enthusiastic Eaters Delighted</Text>
                            </Flex>
                            
                        </Box>
                    </Flex>
                </Box>

                {/* New section below the banner */}
                <Flex align="center" justify="center" py={8} bg={'gray.100'}>
                    <Box w="70%">
                        <Text
                            mt={4}
                            fontSize="xl"
                            textAlign="center"
                            fontWeight={'bold'}
                            mb={4}
                        
                        >We help you learn how to use different Indian Masalas...!</Text>
                        <Image
                            src="https://www.wondriumdaily.com/wp-content/uploads/2019/08/header-40.jpg"
                            alt="Spices"
                            mx="auto"
                            borderRadius={'5px'}
                        />
                        
                    </Box>
                </Flex>

                {/* Chef Slider */}
                <Box bg="gray.200" p={8}>
                    <ChefSlider />
                </Box>
                
                {/* Latest Recipe Slider */}
                <Box bg="gray.300" p={8}>
                    <LatestRecipeSlider />
                </Box>
                
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LandingPage