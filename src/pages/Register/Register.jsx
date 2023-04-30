import { NameLabel, FormInput, FormButton } from './Register.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <NameLabel>Name</NameLabel>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
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
      <FormButton type="submit">Register</FormButton>
    </form>
  );
};
