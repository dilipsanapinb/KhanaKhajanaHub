import React, { useEffect, useState } from 'react'
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
import axios from 'axios'
import { Icon } from '@chakra-ui/icons';
import { FcLike } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
const TodaysRecipe = () => {
    const [recipe, setRecipe] = useState({});
    const navigate=useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://khanakhazana-yqj7.onrender.com/recipe/650325`);
            setRecipe(response.data);
        }
        fetchData()
    }, []);
    
    const habndleNavigate = () => {
        navigate('/recipe/650325')
    }
   return (
        <Box
            position="relative"
             background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${recipe.image}) center/cover`}
           height="500px"
           
           width='80%'
           m={'auto'}
           cursor='pointer'
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={8}
           borderRadius="10px"
           onClick={habndleNavigate}
        >
            <Box textAlign="center" color="white">
                <Heading as="h2" fontSize="3xl" mb={2}>
                    Today's Recipe
                </Heading>
                <Image
                    src={recipe.image}
                    alt="Today's Recipe"
                   boxSize="300px"
                   
                    mx="auto"
                    borderRadius="10px"
                    mb={2}
                />
                <Heading as="h3" fontSize="xl" mb={1}>
                    {recipe.title}
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
                            {recipe.aggregateLikes}
                        </Text>{' '}
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
}

export default TodaysRecipe