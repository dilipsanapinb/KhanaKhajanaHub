import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Container, Heading, SimpleGrid,Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { useNavigate } from 'react-router';
const SavedRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('userInfo'));
        console.log('Token', token);
        if (token) {
            const fetchSavedRecipes = async () => {
                try {
                    const response = await axios.get('http://localhost:8000/savedrecipe/', {
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
                const response = await axios.delete(`http://localhost:8000/savedrecipe/${recipeid}/delete`, {
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
            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={8}>
                {recipes.map((recipe) => (
                    <Box
                        key={recipe.id}
                        p={4}
                        width={'100%'}
                        borderRadius="lg"
                        boxShadow="lg"
                        overflow="hidden"
                        transition="transform 0.2s"
                        _hover={{ transform: 'scale(1.05)' }}
                    >
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            boxSize="300px"
                            borderRadius='10px'
                            mx="auto"
                        />
                        <Heading as="h3" size="md" mt={2} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                            <Box
                                maxWidth={{base:'240px',md:'200px',lg:'180px'}}
                                overflow="hidden"
                                textOverflow="ellipsis"
                                whiteSpace="nowrap"
                            > 
                                    
                            {recipe.title}
                        
                                </Box>
                        </Heading>

                        {/* view the recipe details */}
                        <Button
                            colorScheme="teal"
                            size="sm"
                            mt={2} w="100%"
                            onClick={()=>{handleView(recipe.recipeid)}}
                        >
                            View Recipe
                        </Button>

                        {/* delete the recipe */}

                        <Button
        colorScheme="red"
        size="sm"
        mt={2} w="100%"
        onClick={() => { handleDelete(recipe.recipeid); }}
      >
        Delete
      </Button>
                    </Box>
                ))}
            </SimpleGrid>
            
        </Container>
    )
};

export default SavedRecipes