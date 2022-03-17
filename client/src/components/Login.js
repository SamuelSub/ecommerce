import React from 'react';
import { Box, Heading, Stack, Input, Button } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box m='8rem' align='center'>
      <Heading m='4rem'>Login</Heading>
      <Stack spacing={5}  m='auto' w='20rem'>
        <Input placeholder='Email Address' variant='flushed'></Input>
        <Input placeholder='Password' variant='flushed'></Input>
        <Button>Log In</Button>
      </Stack>
    </Box>
  )
}

export default Login