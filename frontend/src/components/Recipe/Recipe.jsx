import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Heading, Box, Center, Image, Text, Button, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [totalPages,setTotalPages]=useState(1)
    useEffect(() => {
        
        fetchRecipe()
    }, [currentPage]);
    const fetchRecipe = async () => {
            try {
                const response = await axios.get(`https://khanakhazana-yqj7.onrender.com/recipe/?page=${currentPage}&pageSize=10`);
                const { recipes: fetchedRecipes, totalCount } = response.data;
                setRecipes(fetchedRecipes);
                setTotalPages(Math.ceil(totalCount / 10));
                
            } catch (error) {
                console.log('Error fetching recipe:', error);
            }
    }
    // console.log(recipes);

    const handleView = (recipeId) => {
        navigate(`/recipe/${recipeId}`)
    }
    return (
        <Container
            maxW="xxl"
            py={8}
            // border={'1px solid'}
            width='90%'
            margin={'auto'}>
            {/* Saved Recipes Button */}
            <Flex justifyContent="flex-end" mb={4}>
    <Button colorScheme="teal" onClick={() => navigate("/recipe/save")}>
      Saved Recipes
    </Button>
  </Flex>
            <Heading as="h1" textAlign="center" mb={8}>
                Explore Delicious Recipes
            </Heading>

            {/* After mapping the data of recipes appended to page */}

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
          bg="gray.300"
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
      <Flex justify="center" alignItems="center" mt={3}>
        <Button
          colorScheme="teal"
          size="sm"
          px={4}
          py={2}
          letterSpacing="wider"
          fontWeight="semibold"
          rounded="full"
          onClick={() => {
            handleView(recipe.id);
          }}
        >
          View Recipe
        </Button>
        {/* <Text fontSize="sm" color="gray.600">
          {recipe.time} mins
        </Text> */}
      </Flex>
    </Box>
  ))}
</SimpleGrid>


            {/* Mapping and appending data ended */}
            
            {/* Pagination buttons and pagination */}
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