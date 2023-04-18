import { NameLabel, FormInput, FormButton } from './Register.styled';
import React, { useState } from 'react';
import { selectContact } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Register = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContact);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    } else {
      setName('');
      setPhone('');
    }
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <NameLabel>Phone Number</NameLabel>
        <FormInput
          type="tel"
          name="number"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <FormButton type="submit">Add contact</FormButton>
    </form>
  );
};
