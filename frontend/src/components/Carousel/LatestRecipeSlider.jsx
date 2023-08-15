import React, { useState } from 'react';
import { Box, Flex, Button, Icon, Image, Center, Heading } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const recipesData = [
  { id: 1, name: 'Recipe 1', chef: 'Chef A', image: '/path/to/recipe1.jpg' },
  { id: 2, name: 'Recipe 2', chef: 'Chef B', image: '/path/to/recipe2.jpg' },
  { id: 3, name: 'Recipe 3', chef: 'Chef C', image: '/path/to/recipe3.jpg' },
  { id: 4, name: 'Recipe 4', chef: 'Chef D', image: '/path/to/recipe4.jpg' },
  // ... Add more recipe data here ...
];

const LatestRecipeSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const showLeftArrow = currentIndex > 0;
    const showRightArrow = currentIndex < recipesData.length - 4;

    return (
        <Box>
            <Heading as="h2" textAlign="center" mb={4}>
                Our Latest Recipes
            </Heading>
            <Center>
                <Box w="100%">
                    <Flex align="center" justify="space-between">
                        {showLeftArrow && (
                            <Button variant="ghost" onClick={handlePrev}>
                                <Icon as={FaChevronLeft} />
                            </Button>
                        )}
                        <Flex overflowX="auto" w={'80%'} justifyContent={'space-around'}>
                            {recipesData.slice(currentIndex, currentIndex + 4).map((recipe) => (
                                <Box key={recipe.id} p={2}>
                                    <Center flexDirection="column" alignItems="center">
                                        <Image src={recipe.image} alt={recipe.name} rounded="full" boxSize="150px" mx="auto" />
                                        <Heading as="h3" size="md" textAlign="center" mt={2}>{recipe.name}</Heading>
                                        <Box textAlign="center" mt={1}>{recipe.chef}</Box>
                                    </Center>
                                </Box>
                            ))}
                        </Flex>
                        {showRightArrow && (
                            <Button variant="ghost" onClick={handleNext}>
                                <Icon as={FaChevronRight} />
                            </Button>
                        )}
                    </Flex>
                </Box>
            </Center>
        </Box>
    );
};
export default LatestRecipeSlider;
