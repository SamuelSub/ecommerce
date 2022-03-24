import React, { useContext } from 'react';
import { Box, Heading, Stack, Input, Button } from '@chakra-ui/react';
import { authContext } from '../contexts/authContext';

const Login = () => {

  const { login } = useContext(authContext)

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    if(data) {
      login(data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  }

  return (
    <Box m='8rem' align='center'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Heading m='4rem'>Login</Heading>
        <Stack spacing={5}  m='auto' w='20rem'>
          <Input placeholder='Email Address' variant='flushed' name='email'></Input>
          <Input placeholder='Password' variant='flushed' name='password'></Input>
          <Button type='submit'>Log In</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default Login