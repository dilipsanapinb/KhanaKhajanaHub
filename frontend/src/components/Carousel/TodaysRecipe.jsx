import React from 'react'
import { Flex,Box, Image, Heading ,Text} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { FcLike } from 'react-icons/fc';
const TodaysRecipe = () => {
   return (
        <Box
            position="relative"
            background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.services.kitchenstories.io/QBPLS1fW-VLhTUB2_ZOWjVf-k3E=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2961-final-photo_new.jpg') center/cover"
           height="500px"
           
           width='80%'
           m={'auto'}
           cursor='pointer'
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={8}
            borderRadius="10px"
        >
            <Box textAlign="center" color="white">
                <Heading as="h2" fontSize="3xl" mb={2}>
                    Today's Recipe
                </Heading>
                <Image
                    src="https://images.services.kitchenstories.io/QBPLS1fW-VLhTUB2_ZOWjVf-k3E=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2961-final-photo_new.jpg"
                    alt="Today's Recipe"
                   boxSize="300px"
                   
                    mx="auto"
                    borderRadius="10px"
                    mb={2}
                />
                <Heading as="h3" fontSize="xl" mb={1}>
                    Creamy Kohlrabi with Nutmeg
                </Heading>
               <p>Xueci Cheng</p>
               
               {/* Flex for Like and Enthusiastic Eaters */}
               <Flex
                   align="center"
                   justifyContent="center"
                   mt={4}
                   background={''}
               >
                   <Icon as={FcLike} w={6} h={6} color="red.500" />
                   
                    <Text ml={2}>
                        <Text as="span"  textDecoration="underline">
                            1.1k
                        </Text>{' '}
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
}

export default TodaysRecipe