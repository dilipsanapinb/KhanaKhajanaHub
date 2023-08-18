import { Box,Text,Link as ChakraLink } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import React,{useEffect, useRef} from 'react'

const RecipeSearchResult = ({ recipes,isOpen,onClose }) => {
    const boxRef = useRef(null);
    
    // window close click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, onClose]);
    
    if (!isOpen || recipes.length === 0) {
    return null;
  }
    return (

        <Box
            ref={boxRef}
            position={'absolute'}
            zIndex={10}
            mt={'80px'}
            top={0}
            left={0}
            width={'100%'}
            bg={'white'}
            boxShadow={'0px 4px rgba(0, 0, 0,0.1)'}
            borderRadius={'md'}
            p={'1rem'}
            >
            
            {recipes.map((recipe) => (
                <ChakraLink
                    as={RouterLink}
                    to={`/recipe/${recipe.id}`}
                    key={recipe.id}
                    mb={'0.5rem'}
                    display={'block'}
                    _hover={{ bg: 'gray.200' }}
                >
                    <Text
                    fontWeight={'bold'}
                    >
                        {recipe.title}
                    </Text>
                </ChakraLink>
            ))}
        </Box>
    )
};

export default RecipeSearchResult;