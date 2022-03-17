import React from 'react';
import { Input, Box, Button, Stack, Heading } from '@chakra-ui/react';

const Register = () => {
  return (
    <Box m='8rem' align='center'>
      <Heading m='4rem'>Register</Heading>
      <Stack spacing={5}  m='auto' w='20rem'>
        <Input placeholder='First Name' variant='flushed'></Input>
        <Input placeholder='Last Name' variant='flushed'></Input>
        <Input placeholder='Email Address' variant='flushed'></Input>
        <Input placeholder='Password' variant='flushed'></Input>
        <Input placeholder='Retype Password' variant='flushed'></Input>
        <Button>Sign Up</Button>
      </Stack>
    </Box>
  )
}

export default Register