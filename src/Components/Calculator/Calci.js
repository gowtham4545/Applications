import { useState } from 'react';
import './Calci.scss';
import { Button, Container, Text } from '@chakra-ui/react';

function Calci() {

    const [text, changeText] = useState('');

    const stack = [];


    const equate = () => {
        try {
            let ans = eval(text);
            changeText(ans);
            stack.push(text + '\t=\t' + ans)
        }
        catch (err) {
            changeText('ERROR');
            setTimeout(() => changeText(''), 5000);
        }
    }

    return (
        <Container className={`calci`} centerContent maxW={'100vw'} >
            <Text className={`heading`} fontSize={'50px'} fontFamily={'Poppins'}>Calculator</Text>

            <Container className='container' minW={'500px'} border={'2px'} borderRadius={'20px'} centerContent>


                <Text className='text' width={'450px'} fontSize={'30px'} textAlign={'left'} height={'80px'} borderRadius={'20px'} >{text}</Text>

                <div className='buttons'>
                    <Button className='button' color={'red'} onClick={() => changeText('')}>AC</Button>
                    <Button className='button' onClick={() => changeText(text + '(')}>&#40;</Button>
                    <Button className='button' onClick={() => changeText(text + ')')}>&#41;</Button>
                    <Button className='button' onClick={() => changeText(text + '/')}>&#247;</Button>
                    <Button className='button' onClick={() => changeText(text + '7')}>7</Button>
                    <Button className='button' onClick={() => changeText(text + '8')}>8</Button>
                    <Button className='button' onClick={() => changeText(text + '9')}>9</Button>
                    <Button className='button' onClick={() => changeText(text + '*')}>&#215;</Button>
                    <Button className='button' onClick={() => changeText(text + '4')}>4</Button>
                    <Button className='button' onClick={() => changeText(text + '5')}>5</Button>
                    <Button className='button' onClick={() => changeText(text + '6')}>6</Button>
                    <Button className='button' onClick={() => changeText(text + '-')}>&#45;</Button>
                    <Button className='button' onClick={() => changeText(text + '1')}>1</Button>
                    <Button className='button' onClick={() => changeText(text + '2')}>2</Button>
                    <Button className='button' onClick={() => changeText(text + '3')}>3</Button>
                    <Button className='button' onClick={() => changeText(text + '+')}>&#43;</Button>
                    <Button className='button' onClick={() => changeText(text + '**')}>**</Button>
                    <Button className='button' onClick={() => changeText(text + '0')}>0</Button>
                    <Button className='button' onClick={() => changeText(text + '.')}>&#46;</Button>
                    <Button id='submit' className='button' onClick={equate}>&#61;</Button>
                </div>
            </Container>

            {/* <Container>
                <Text>History</Text>
                <Container>
                    {
                        return for(let index = 0; index < stack.length; index++) {
                            
                            
                        }
                    }
                </Container>
            </Container> */}

        </Container>
    )
}

export default Calci
