import { Box, Button, Center, Flex, Heading, Icon,Image,Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const chefsData = [
    {
        id: 1,
        name: 'Vikas Khanna',
        image:'https://asiasociety.org/sites/default/files/styles/1200w/public/2020-08/200827_vikas_khanna_AGC.jpg'
    },
    {
        id: 2,
        name: 'Ranvir Brar',
        image:'https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1652597275542.jpg-org'
    },
    {
        id:3,
        name: 'Pankaj Bhadouria',
        image:'https://d30ny7ijak9wq4.cloudfront.net/s3fs-public/images/story/2016/06/21/pankaj.jpg'
    },
    {
        id:4,
        name: 'Sanjeev Kapoor',
        image:'https://yt3.googleusercontent.com/GVTtEiBD6Mt1FR_Y5FKgYa8mHXcJiNfzDTa991tu1LZ3OrOANZC4J1-kSMmuaEys86yY336pcg=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        id:5,
        name: 'Gardon Ramsay',
        image:'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4MTE4NTMyMDE1OTk2/gordonramsay_kitchenmaster-ftr.jpg'
    },
    {
        id:6,
        name: 'Pooja Dhingra',
        image:'https://starsunfolded.com/wp-content/uploads/2021/08/Pooja-Dhingra.jpg'
    },
    {
        id:7,
        name: 'Hari Nayak',
        image:'https://media.licdn.com/dms/image/D4E03AQGybiSc67bOuA/profile-displayphoto-shrink_800_800/0/1669957942294?e=2147483647&v=beta&t=xUxHlRRPJibB0EYdZ90qeas0AkidalgTK1v2N5s8y50'
    },
    {
        id:8,
        name: 'Garima Arora',
        image:'https://assets.entrepreneur.com/content/3x2/2000/1678351355-Hithere1.jpg?format=pjeg&auto=webp&crop=1:1'
    }
]

const ChefSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const showLeftArrow = currentIndex > 0;
    const showRightArrow = currentIndex < chefsData.length - 4;

    return (
        <Box>
        <Heading as="h2" textAlign="center" mb={4}>
        About Chefs
      </Heading>
            <Flex
                align="center" justify="center" mb={4}>
                {showLeftArrow && (
                    <Button variant="ghost" onClick={handlePrev}>
                        <Icon as={FaChevronLeft} />
                    </Button>
                )}
                
                <Flex overflowX="hidden" w={'80%'} display={'flex'} justifyContent={'space-around'}>
                    {chefsData.slice(currentIndex, currentIndex + 4).map((chef) => (
                        <Box key={chef.id} p={2}>
                            
                            <Image
                                src={chef.image}
                                alt={chef.name}
                                rounded="full"
                                boxSize="200px"
                                mx={'auto'}
                            />
                            <Box textAlign="center">{chef.name}</Box>
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

export default ChefSlider;