import { Box, Flex, VStack,Text, Icon } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'


const Footer = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false)
    
    const handleScoll= ()=> {
    if (window.scrollY > 100) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    }

    const
        handleScrollToTop = () => {
        window.scrollTo({top:0,behavior:'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScoll);
        return () => {
            window.addEventListener('scroll',handleScoll)
        }
    })
    return (
        <div>
            <Box
                as='footer'
                p={4}
                fontSize={'20px'}
                fontWeight={'bold'}
                bg={'#22A699'}
                color={'white'}
                height={'200px'}
            >
                <Flex
                    justify={'center'}
                    align={'center'}
                    p={4}
                    flexDirection={{base:'column',md:'row'}}
                >
                    {/* Website name and contact information */}
                    <VStack
                        spacing={2}
                        textAlign={{base:"center",md:'left'}}
                    >
                        
                        {/* name of website */}
                        <Text
                            // fontSize={'lg'}
                            fontSize={'20px'}
                            fontWeight={'bold'}
                        >
                            KhanaKazana
                        </Text>

                        {/* contact number */}

                        <Flex
                            align={'center'}>
                            <Icon
                                as={FiPhoneCall}
                                boxSize={4}
                                mr={1}
                            />
                            <Text
                            >Phone: +91 9175329907</Text>
                        </Flex>
                        <Flex align="center">
                            <Icon as={FaEnvelope} boxSize={4} mr={1} />
                            <Text>Email: dilipsanap@gmail.com</Text>
                        </Flex>
                    </VStack>

                    {/* Scroll to top arrow */}

                    {showScrollToTop && (
                        <Box
                            position="fixed"
                            bottom="20px"
                            right="20px"
                            zIndex="999"
                            cursor="pointer"
                            onClick={handleScrollToTop}
                            bg="teal.500"
                            color="white"
                            borderRadius="50%"
                            p={3}
                            boxShadow="lg"
                        >
                            <Icon
                                as={AiOutlineArrowUp}
                                boxSize={8}
                            />
                        </Box>
                    )}
                </Flex>
            </Box>
        </div>
    );
}

export default Footer