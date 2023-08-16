import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Signup = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate=useNavigate()

    const handleClick = () => setShow(!show);

    const submitHandler = async () => {
        setLoading(true);
        if (!username || !email || !password) {
            toast({
                title: "Please fill the all fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            setLoading(false);
            return;
        }

        // request to register the data
        try {
            const userData = {
                username: username,
                email: email,
                password: password
            };
            console.log(userData);
            const response = await axios.post('http://localhost:8000/user/api/register', userData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:8000'
                }
            });

            console.log(response.data);

            toast({
                title: 'Registration is successful',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });

            setLoading(false);
            navigate('/signinpage');
        } catch (error) {
            console.log(error.message);

            toast({
                title: 'Error Occurred!',
                // description: error.response.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });

            setLoading(false);
        }
    };

    return (
        <div>
            <VStack
                spacing={"5px"}
                color={'black'}
            >
                {/* Username */}
                <FormControl id="username" isRequired>
                    <FormLabel>Usename</FormLabel>
                    <Input
                        placeholder='Enter your Username'
                        onChange={(e) => setUserName(e.target.value)}
                    ></Input>
                </FormControl>

                {/* email */}
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        placeholder='Enter your Email'
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                </FormControl>

                {/* password */}
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </Input>
                        <InputRightElement
                            width={'4.5rem'}
                        >
                            <Button
                                h="1.75rem"
                                size='sm'
                                onClick={handleClick}
                            >
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button
                    colorScheme='teal'
                    width={'100%'}
                    style={{ marginTop: 15 }}
                    onClick={submitHandler}
                    isLoading={loading}
                >
                    Sign Up
                </Button>
            </VStack>
        </div>
    );
}

export default Signup