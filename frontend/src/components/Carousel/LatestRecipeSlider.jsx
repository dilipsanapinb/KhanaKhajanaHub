import React, { useState } from 'react';
import { Box, Flex, Button, Icon, Image, Center, Heading, useBreakpointValue,Text } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const recipesData = [
    {
        id: 1,
        name: 'Crispy salmon rice bowl',
        chef: 'Harrier Richard',
        image: 'https://images.services.kitchenstories.io/7hLzn7VETe3N24Ex84T2FdT3iko=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R3013-final-photo-1.jpg'
    },
    {
        id: 2,
        name: 'Glass potatoes',
        chef: 'Harrier Richard',
        image: 'https://images.services.kitchenstories.io/8HwpRg4k5lIhNSwXaWLkdChGiZI=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R3012-final-photo-4.jpg'
    },
    {
        id: 3,
        name: 'Easy cheesy beakfast',
        chef: 'Carolon',
        image: 'https://images.services.kitchenstories.io/T393jhUpuPTFEKcgZBMkLqHsPZc=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R3011-final-photo.jpg'
    },
    {
        id: 4,
        name: 'Eggplant Unagi(Japanese)',
        chef: 'Marco Hartz',
        image: 'https://images.services.kitchenstories.io/CjkCo1bqoE58zmHgU9gxzFAyQYA=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R3009-final-photo-3.jpg'
    },
    {
        id: 5,
        name: 'Limoncello',
        chef: 'Martina Tom',
        image:'https://images.services.kitchenstories.io/j4e_DIoQVZwyB2L77NO5K9ZsXlU=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2996-final-photo-1.jpg'
    },
    {
        id: 6,
        name: 'Pani puri',
        chef: 'Sanjeev Kapoor',
        image:'https://moonrice.net/wp-content/uploads/2023/04/PaniPuri-7.jpg'
    },
    {
        id: 7,
        name: 'Misal Pav',
        chef: 'Ranvir Brar',
        image:'https://smithakalluraya.com/wp-content/uploads/2014/05/misal-pav-recipe-1.jpg'
    },
    {
        id: 8,
        name: 'Butten Chicken',
        chef: 'Vokas Khanna',
        image:'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--750x750.jpg'
  },
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
     const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
        >
            <Box
            
                width={'80%'}
            m={'auto'}>
                <Heading
                    as="h3"
                    textAlign="left" mb={4}>
            Our Latest Recipes
        </Heading>
            </Box>
            
            <Flex
                align="center"
                justify="center"
                mb={4}
                maxWidth={'80%'}
                m={'auto'}>
            {showLeftArrow && (
                <Button variant="ghost" onClick={handlePrev}>
                    <Icon as={FaChevronLeft} />
                </Button>
            )}
                <Flex
                    w={'100%'}
                    justifyContent={'space-around'}>
                {recipesData.slice(currentIndex, currentIndex + (isMobile ? 2 : 4)).map((recipe) => (
                    <Box
                        key={recipe.id}
                        p={2}
                        width={isMobile ? '100%' : 'auto'}
                        mb={4}
                        // textAlign="center" // Center the content
                    >
                        <Image
                            src={recipe.image}
                            alt={recipe.name}
                            boxSize="300px"
                            borderRadius='10px'
                            mx="auto"
                        />
                        <Heading as="h3" size="md" mt={2} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                            
                            <Box maxWidth="170px"
                            overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap"
                            > 
                                    {recipe.name}
                                </Box>
                        </Heading>
                        <Box mt={1}>{recipe.chef}</Box>
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
    );
};
export default LatestRecipeSlider;
