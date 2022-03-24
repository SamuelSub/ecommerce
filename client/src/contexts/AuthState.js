import React from 'react';
import { authContext } from './authContext';

const AuthState = props => {

  const register = async (registerData) => {
    
    const req = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    });

    const res = await req.json();

    return { token: res.token, uesr: res.user}
  }

  const login = async (loginData) => {

    const req = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    const res = await req.json();

    return { token: res.token, uesr: res.user}
  }

  return (
    <authContext.Provider value={{
      register,
      login
    }}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState