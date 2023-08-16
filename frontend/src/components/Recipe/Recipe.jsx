import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Container,Heading,Flex,Box,Center,Image,Text,Button,SimpleGrid} from '@chakra-ui/react'
const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages,setTotalPages]=useState(1)
    useEffect(() => {
        
        fetchRecipe()
    }, [currentPage]);
    const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/recipe/?page=${currentPage}&pageSize=10`);
                console.log(response);
                const { recipes: fetchedRecipes, totalCount } = response.data;
                setRecipes(fetchedRecipes);
                setTotalPages(Math.ceil(totalCount / 10));
                
            } catch (error) {
                console.log('Error fetching recipe:', error);
            }
    }
    console.log(recipes);
    return (
        <Container
            maxW="xxl"
            py={8}
            // border={'1px solid'}
            width='90%'
            margin={'auto'}>
            <Heading as="h1" textAlign="center" mb={8}>
                Explore Delicious Recipes
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 5 }} spacing={8}>
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
                        <Button colorScheme="teal" size="sm" mt={2} w="100%">
                            View Recipe
                        </Button>
                    </Box>
                ))}
            </SimpleGrid>
            <Center mt={8}>
                <Button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    mr={4}
                    variant="outline"
                >
                    Previous Page
                </Button>
                <Text fontSize="lg" fontWeight="semibold">
                    Page {currentPage} of {totalPages}
                </Text>
                <Button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    ml={4}
                    variant="outline"
                >
                    Next Page
                </Button>
            </Center>
        </Container>
            
        
    )
};

export default Recipe