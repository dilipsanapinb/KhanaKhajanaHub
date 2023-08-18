import React, { useEffect, useState } from 'react'
import {
    Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Input, InputGroup, InputRightElement,
    useDisclosure,
    Link as ChakraLink,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi"
import { HamburgerIcon } from '@chakra-ui/icons';
import axios from 'axios';
import RecipeSearchResult from '../components/Recipe/RecipeSearchResult'
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [recipes,setRecipes]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition>0)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])
    
    // handle Search
    const handleSearch =async () => {
    try {
         const response = await axios.get('http://localhost:8000/recipe/api/recipes/search', {
        params: { query: searchInput }, // Pass the search query to the backend
      });

        const recipesData = response.data.recipes
;
        console.log(recipesData
);
      setRecipes(recipesData);
    } catch (error) {
         console.error('Error searching recipes:', error);
    }
    }
    console.log(recipes);
    return (
        <Flex
            as={'nav'}
            alignItems={'center'}
            justifyContent={'space-between'}
            paddingY={'1rem'}
            width={'100%'}
            margin={'auto'}
            marginBottom={'10px'}
            backgroundColor={'orange'}
            position={isSticky ? 'sticky' : 'static'}
            top={'0'}
            zIndex={'999'}
        >
            {/* left Navbar */}
            <Flex
            className='navbar-left'
            >
                <Link
                    to='/'
                    className='logo'
                >
                    <Box
                        fontSize={'3xl'}
                        fontWeight={'bold'}
                        fontStyle={'italic'} 
                        color={'white'}
                        marginLeft={'20px'}
                    >
                        KhanaKhazana
                    </Box>
                </Link>
            </Flex>

            {/* MIddle Navbar */}
            <Flex
                className='navbar-middle'
                alignItems={'center'}
                width={'60%'}
            >
                <InputGroup
                    maxW={'600px'}
                    mar='2rem'
                >
                    <Input
                        type='text'
                        placeholder='Search'
                        borderRadius={'4px'}
                        bg={'white'}
                        size={'md'}
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                            handleSearch();
                        }
                        }
                    >
                    </Input>
                    <InputRightElement
                        // pointerEvents={'none'}
                        cursor={'pointer'}
                    >
                        <BiSearch
                            color='gray.500'
                            
                            style={{cursor:'pointer'}}
                        ></BiSearch>
                    </InputRightElement>
                </InputGroup>
            </Flex>

            {/* Display search results */}
        <RecipeSearchResult recipes={recipes} isOpen={searchInput !== ''} />
            {/* Right Navbar */}

            <Flex className='navbar-right'>
                <IconButton
                    display={'flex'}
                    alignContent={'center'}
                    textAlign={'center'}
                    as={'button'}
                    className='hamburger'
                    icon={<HamburgerIcon />}
                    variant={'unstyled'}
                    fontSize={'1.5rem'}
                    marginRight={'10px'}
                    backgroundColor={'white'}
                    color={'orange'}
                    onClick={onOpen}
                />

                    {/* Drawer */}
                    <Drawer
                        placement='right'
                        onClose={onClose}
                        isOpen={isOpen}
                    >
                        <DrawerOverlay />
                            <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                                Menu
                            </DrawerHeader>
                            <DrawerBody>
                                <ChakraLink
                                    as={Link}
                                    to={'signinpage'}
                                    className='dropdown-button'
                                    display={'block'}
                                    mb={'0.5rem'}
                                >
                                    <Button
                                        className='dropdown'
                                        display={'block'}
                                        mb={'0.5rem'}
                                    >
                                        SignIn
                                    </Button>
                                </ChakraLink>
                                <Button
                                        className='dropdown'
                                        display={'block'}
                                        mb={'0.5rem'}
                                >
                                    More
                                </Button>
                            </DrawerBody>
                            </DrawerContent>
                    </Drawer>
                
            </Flex>

        </Flex>
    );
}

export default Navbar