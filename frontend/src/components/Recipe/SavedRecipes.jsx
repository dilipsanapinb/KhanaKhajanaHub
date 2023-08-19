import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Container, Heading, SimpleGrid,Image, Flex, Icon,Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { useNavigate } from 'react-router';
import { StarIcon } from '@chakra-ui/icons';
const SavedRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('userInfo'));
        console.log('Token', token);
        if (token) {
            const fetchSavedRecipes = async () => {
                try {
                    const response = await axios.get('https://khanakhazana-yqj7.onrender.com/savedrecipe/', {
                        headers: {
                            'Content-Type': 'Application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    // console.log(response.data.allSavedRecipies);
                    setRecipes(response.data.allSavedRecipies)
                } catch (error) {
                    console.log('Error fetching savedRecipes:', error);
                }
            }
            fetchSavedRecipes();
        } else {
            console.log('Token not found in local storage');
        }
    }, []);
    console.log(recipes);
    const handleView = (recipeId) => {
        navigate(`/recipe/${recipeId}`)
    }

    // delete the recipe function
    const handleDelete = async(recipeid) => {
        try {
            const token = JSON.parse(localStorage.getItem('userInfo'));
            if (token) {
                const response = await axios.delete(`https://khanakhazana-yqj7.onrender.com/savedrecipe/${recipeid}/delete`, {
                    headers: {
                        'Content-Type': 'Application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('Response', response.data);
                
                // Update the UI
                setRecipes((prevRecipes)=>prevRecipes.filter(recipe=>recipe.recipeid!==recipeid))
            } else {
                console.log('Token not found in local storage');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container
            maxW="xxl"
            py={8}
            // border={'1px solid'}
            width='90%'
            margin={'auto'}>
            <Heading as="h1" textAlign="center" mb={8}>
                Explore Saved Recipes
            </Heading>
            {/* mapped the recipes */}

            

            {/* mapped recipes ended */}

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }} spacing={6}>
  {recipes.map((recipe) => (
    <Box
      key={recipe.id}
      p={6}
      borderRadius="xl"
      boxShadow="lg"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: 'translateY(-10px)', boxShadow: 'xl' }}
      bg="white"
    >
      <Box position="relative" borderRadius="xl" overflow="hidden">
        <Box
          bg="gray.200"
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          zIndex="-1"
        />
        <Image
          src={recipe.image}
          alt={recipe.title}
          borderRadius="xl"
          objectFit="cover"
          height="220px"
          width="100%"
        />
        <Box
          position="absolute"
          top="10px"
          right="10px"
          bg="teal.500"
          color="white"
          borderRadius="full"
          p={1}
        >
          <Icon as={StarIcon} fontSize="sm" />
        </Box>
      </Box>
      <Text
        mt={4}
        fontSize="lg"
        fontWeight="semibold"
        color="gray.800"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {recipe.title}
      </Text>
      <Flex justify="space-between" alignItems="center" mt={3}>
        <Button
          colorScheme="teal"
          size="sm"
          px={4}
          py={2}
          letterSpacing="wider"
          fontWeight="semibold"
          rounded="full"
          _hover={{ transform: 'scale(1.05)' }}
          onClick={() => {
            handleView(recipe.recipeid);
          }}
        >
          View Recipe
        </Button>
        <Button
          colorScheme="red"
          size="sm"
          px={4}
          py={2}
          letterSpacing="wider"
          fontWeight="semibold"
          rounded="full"
          _hover={{ transform: 'scale(1.05)' }}
          onClick={() => {
            handleDelete(recipe.recipeid);
          }}
        >
          Delete
        </Button>
      </Flex>
      {/* <Text fontSize="sm" color="gray.600" mt={2}>
        {recipe.time} mins
      </Text> */}
    </Box>
  ))}
</SimpleGrid>

        </Container>
    )
};

export default SavedRecipes