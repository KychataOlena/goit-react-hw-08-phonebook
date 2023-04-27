import { NameLabel, FormInput, FormButton } from './Login.styled';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <NameLabel>Email</NameLabel>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <NameLabel>Password</NameLabel>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <FormButton type="submit">Log In</FormButton>
    </form>
  );
};
