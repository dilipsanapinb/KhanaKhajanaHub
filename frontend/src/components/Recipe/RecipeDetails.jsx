import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Badge, Box, Container, Flex, Heading, Icon, Image, List, ListIcon, ListItem, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Navbar from '../Navbar';
import Footer from '../Footer';
const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const [ingredient, setIngredient] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/recipe/${id}`);
            setRecipe(response.data);
            
        }
        fetchData()
    }, [id]);
    console.log(recipe);
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Container
                    maxW={'xl'}
                    py={8}
                    width={'90%'}
                    margin={'auto'}
                >
                    {/* Banner Start */}
                    <Stack
                        spacing={4}
                        alignItems={'center'}
                    >
                        {/* heading of dish */}
                        <Heading
                            as={'h1'}
                            textAlign={'center'}
                            mb={4}
                        >
                            {recipe.title}
                        </Heading>

                        {/* Image of dish */}
                        <Box position="relative" width="100%">
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            boxSize={'400px'}
                            borderRadius={'10px'}
                            mx={'auto'}
                        />
                        {/* Badgeof dish */}
                        <Badge
                            colorScheme="teal"
                            fontSize="sm"
                            fontWeight="semibold"
                            position={'absolute'}
                            bottom="0"
                            right="20"
                            m={2}
                            p={1}
                            zIndex="1"
                        >
                            
                            {recipe.aggregateLikes} Likes
                        </Badge>
                        </Box>
                    </Stack>
                    <Stack
                        mt={4}
                        spacing={2}
                    >
                        <Text fontSize="lg">
                            <strong>Health Score:</strong> {recipe.healthScore}
                        </Text>
                        <Text fontSize="lg">
                            <strong>Ready in Minutes:</strong> {recipe.readyInMinutes}
                        </Text>
                        <Text fontSize="lg">
                            <strong>Vegan:</strong> {recipe.vegan ? 'Yes' : 'No'}
                        </Text>
                        <Text fontSize="lg">
                            <strong>Gluten-Free:</strong> {recipe.glutenFree ? 'Yes' : 'No'}
                        </Text>
                        <Text fontSize="lg">
                            <strong>Vegetarian:</strong> {recipe.vegetarian ? 'Yes' : 'No'}
                        </Text>
                        <Text fontSize="lg">
                            <strong>Price Per Serving:</strong> {recipe.pricePerServing}
                        </Text>

                    </Stack>
                    {/* Ingredients */}
                    <Box
                        width={'120%'}
                        margin={'auto'}
                    >
                        <Text fontSize="xl" fontWeight="bold" mt={6}>
                            Ingredients:
                        </Text>
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
                            {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient) => (
                                <Box
                                    key={ingredient.id}
                                    p={2}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    boxShadow="md"
                                    bg="white"
                                >
                                    <Flex align="center" mb={2}>
                                        <Icon as={MdCheckCircle} color="green.500" boxSize={5} mr={2} />
                                        <Text fontSize="md" fontWeight="semibold">
                                            {ingredient.name}
                                        </Text>
                                    </Flex>
                                    <Text fontSize="sm">
                                        Amount: {ingredient.original}
                                    </Text>
                                    <Text fontSize="sm">
                                        Unit: {ingredient.unit}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Container>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
        
    )
};

export default RecipeDetails