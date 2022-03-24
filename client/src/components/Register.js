import React, { useContext, useState } from 'react';
import { Input, Box, Button, Stack, Heading, Alert, AlertIcon } from '@chakra-ui/react';
import { authContext } from '../contexts/authContext';

const Register = () => {

  const [registrationSuccess, setRegistrationSucess] = useState(false)
  const { register } = useContext(authContext);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      retypePassword: e.target.retypePassword.value,
    }
    
    if(data) {
      register(data)
        .then(res => setRegistrationSucess(true))
        .catch(err => console.log(err))
    }

  }

  return (
    <Box mt='10rem' align='center' >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Heading m='4rem'>Register</Heading>
        <Stack spacing={5}  m='auto' w='20rem'>
          <Input placeholder='First Name' variant='flushed' name='firstName' id='firstName' isRequired></Input>
          <Input placeholder='Last Name' variant='flushed' name='lastName' id='lastName' isRequired></Input>
          <Input placeholder='Email Address' variant='flushed' name='email' id='email' isRequired></Input>
          <Input placeholder='Password' variant='flushed' name='password' type='password' id='password' isRequired></Input>
          <Input placeholder='Retype Password' variant='flushed' name='retypePassword' type='password' id='retypePassword' isRequired></Input>
          <Button type='submit'>Sign Up</Button>
          {registrationSuccess && (
            <Alert status='success'>
              <AlertIcon />
              Registration Successfull
            </Alert>
          )}
        </Stack>
      </form>
    </Box>
  )
}

export default Register