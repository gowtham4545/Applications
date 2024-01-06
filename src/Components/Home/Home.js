import { Button, Card, CardBody, CardFooter, Container, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import './Home.css';
import calci from './../Assets/Pics/calci.png'; 

function Home() {
    return (
        <div className='Home'>
            <Container maxW={'750px'} centerContent >
                <Text color={'aliceblue'} fontSize={'5xl'} fontStyle={'normal'} fontFamily={'Poppins'}>Simple Applications</Text>
                
                
                
                
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    width={'750px'}
                    marginY={'20px'}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={calci}
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading fontFamily={'Raleway'} size='md'>Calculator</Heading>

                            <Text py='2'>
                                A Simple Calculator.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                <Link href='./calculator'>
                                    Visit
                                </Link>
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>




                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    marginY={'20px'}
                    width={'750px'}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading fontFamily={'Raleway'} size='md'>Calculator</Heading>

                            <Text py='2'>
                                A Simple Calculator.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                <Link href='./calculator'>
                                    Visit
                                </Link>
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>






                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    marginY={'20px'}
                    width={'750px'}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading fontFamily={'Raleway'} size='md'>Calculator</Heading>

                            <Text py='2'>
                                A Simple Calculator.
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                <Link href='./calculator'>
                                    Visit
                                </Link>
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Container>
        </div>
    )
}

export default Home;
