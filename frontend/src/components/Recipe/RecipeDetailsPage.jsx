import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Badge, Box, Button, Container, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { FcLikePlaceholder } from 'react-icons/fc'
import { RiHeartPulseFill } from 'react-icons/ri'
import { FcAlarmClock } from 'react-icons/fc'
import { IoLeafSharp } from 'react-icons/io5'
import{LuSquareDot} from 'react-icons/lu'
import { GiWheat } from 'react-icons/gi'
import{LuIndianRupee} from 'react-icons/lu'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const [nutrients, setNutrients] = useState({})
    const navigate = useNavigate();
    // get a nutrints by id
     useEffect(() => {
        const fetchNutrients = async () => {
            const response = await axios.get(`http://localhost:8000/recipe/${id}/nutrients`);
            setNutrients(response.data);
        }
        fetchNutrients()
    },[id])
    // fetching the recipe by id
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/recipe/${id}`);
            setRecipe(response.data);
        }
        fetchData()
    }, [id]);

    const handleSave =async () => {
        try {
            const token=JSON.parse(localStorage.getItem('userInfo'))
            const data = {
                id: recipe.id,
                title: recipe.title,
                image:recipe.image
            }
            const response = await axios.post('', {
                data
            }, {
                'Content-type': 'Application/json',
                'Authorization':`Bearet ${token}`
            })
        } catch (error) {
            console.log('Error save the recipe:', error.message);
        }
        navigate('/recipe/save')
    }

    console.log(recipe);
    console.log(nutrients);
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Container
                    maxW={'xxl'}
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
                            fontSize="2xl"
                            mb={4}
                        >
                            {recipe.title}
                        </Heading>

                        {/* Image of dish */}
                        <Box position="relative" width="100%">
                            <Image
                                src={recipe.image}
                                alt={recipe.title}
                                boxSize={'500px'}
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
                                <Flex align={'center'}>
                                    <Icon as={FcLikePlaceholder} boxSize={4} mr={'auto'} />
                                    {recipe.aggregateLikes} Likes
                                </Flex>
                                
                            </Badge>
                        </Box>
                    </Stack>

                    {/* Save the recipe button */}
                    <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                // boxShadow="md"
                                bg="white"
                                height={'100px'}
                                maxW={'auto'}
                                p={4}
                        display="flex"
                        mt={'10'}
                                alignItems="center"
                                justifyContent="center"
                    >
                        <Button
                            width={'50%'}
                            margin={'auto'}
                            colorScheme='teal'
                            fontWeight={'bold'}
                            onClick={handleSave}
                        >
                            Save to Favorite
                        </Button>
                    </Box>
                    {/* Information- Health , time to prepare, vegan gluten ,veg/Non-veg, cost*/}
                    <Box
                        mt={10}
                    >
                        
                        <SimpleGrid columns={{ base: 2, sm: 3, md: 3 }} spacing={4}>
                            {/* Health */}
                            
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                boxShadow="md"
                                bg="white"
                                height={'100px'}
                                maxW={'auto'}
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex direction="column" alignItems="center" textAlign="center">
                                    <Icon as={RiHeartPulseFill} color="red.500" boxSize={7} />
                                    <Text fontSize="lg" fontWeight="bold" mt={2}>
                                        Health
                                    </Text>
                                    {recipe.healthScore}
                                </Flex>
                            </Box>
                            
                            {/* preparation time */}
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                boxShadow="md"
                                bg="white"
                                height={'100px'}
                                maxW={'auto'}
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex direction="column" alignItems="center" textAlign="center">
                                    <Icon as={FcAlarmClock} color="green.500" boxSize={7} />
                                    <Text fontSize="lg" fontWeight="bold" mt={2}>
                                        Time
                                    </Text>
                                    <Text fontSize="md">
                                        {recipe.readyInMinutes} mins
                                    </Text>
                                </Flex>
                            </Box>

                            {/* Vegan */}
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                boxShadow="md"
                                bg="white"
                                height={'100px'}
                                maxW={'auto'}
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex direction="column" alignItems="center" textAlign="center">
                                    <Icon as={IoLeafSharp} color="green.500" boxSize={7} />
                                    <Text fontSize="lg" fontWeight="bold" mt={2}>
                                        Vegan
                                    </Text>
                                    <Text fontSize="md">
                                        {recipe.vegan ? 'Yes' : 'No'}
                                    </Text>
                                </Flex>
                            </Box>

                            {/* Gluten free */}
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                boxShadow="md"
                                bg="white"
                                height={'100px'}
                                maxW={'auto'}
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex direction="column" alignItems="center" textAlign="center">
                                    <Icon as={GiWheat} color="green.500" boxSize={7} />
                                    <Text fontSize="lg" fontWeight="bold" mt={2}>
                                        Gluten free
                                    </Text>
                                    <Text fontSize="md">
                                        {recipe.vegan ? 'Yes' : 'No'}
                                    </Text>
                                </Flex>
                            </Box>

                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                boxShadow="md"
                                bg="white"
                                height={'100px'}
                                maxW={'auto'}
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex direction="column" alignItems="center" textAlign="center">
                                    <LuSquareDot
                                        color={recipe.vegetarian ? 'green' : 'red'}
                                        size={30}
                                    />
                                    <Text fontSize="lg" fontWeight="bold" mt={2}>
                                        {recipe.vegetarian ? 'Veg' : 'Non-Veg'}
                                    </Text>
                                </Flex>
                            </Box>
                            {/*Cost per serving*/}
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                boxShadow="md"
                                bg="white"
                                height={'100px'}
                                maxW={'auto'}
                                p={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Flex direction="column" alignItems="center" textAlign="center">
                                    <Icon as={LuIndianRupee} color="green.500" boxSize={7} />
                                    <Text fontSize="lg" fontWeight="bold" mt={2}>
                                        Cost
                                    </Text>
                                    <Text fontSize="md">
                                        {recipe.pricePerServing}
                                    </Text>
                                </Flex>
                            </Box>
                        </SimpleGrid>
                    </Box>
                    


                    {/* nuttrients per serving */}
                    <Box width={'90%'} margin={'auto'} mt={10}>
  <Text fontSize="xl" fontWeight="bold" mb={4}>
    Nutrients per Serving:
  </Text>
  <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={4}>
    {/* Calories */}
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg" fontWeight="bold">
        Calories
      </Text>
      <Text fontSize="md">{nutrients.calories
} kcal</Text>
    </Box>
    
    {/* Fat */}
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg" fontWeight="bold">
        Fat
      </Text>
      <Text fontSize="md">{nutrients.fat} </Text>
    </Box>
    
    {/* Carbs */}
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg" fontWeight="bold">
        Carbs
      </Text>
      <Text fontSize="md">{nutrients.carbs} </Text>
    </Box>
    
    {/* Proteins */}
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg" fontWeight="bold">
        Proteins
      </Text>
      <Text fontSize="md">{nutrients.protein} </Text>
                            </Box>

  </SimpleGrid>
                    </Box>
                    

                    {/* Ingredients */}
                    <Box
                        width={'90%'}
                        margin={'auto'}
                    >
                        <Text fontSize="xl" fontWeight="bold" mt={10} mb={'6'}>
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
                    {/* Ingrediants box end */}
                    
                    <Box
                        width={'90%'}
                        margin={'auto'}
                    >
                        <Text fontSize="xl" fontWeight="bold" mt={10} mb={'6'}>
                            Cooking Instructions:
                        </Text>
                        <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing={4}>
                            {recipe.analyzedInstructions && recipe.analyzedInstructions[0].steps.map((step) => (
                                <Box
                                    key={step.id}
                                    p={2}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    boxShadow="md"
                                    bg="white"
                                >
                                    <Flex align="center" mb={2}>
                                        <Icon as={MdCheckCircle} color="green.500" boxSize={5} mr={2} />
                                        <Text fontSize="md" fontWeight="semibold">
                                            Step: {step.number}
                                        </Text>
                                    </Flex>
                                    <Text fontSize="sm">
                                        {step.step}
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