import { useSelector } from 'react-redux';
import {
  selectContact,
  selectStatusFilter,
} from '../../redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactLi, ContactUl } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const contactFilter = useSelector(selectStatusFilter);

  const getVisibleContacts = () => {
    const normilizeFilter = contactFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  return (
    <ContactUl>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactLi key={id}>
          <ContactItem id={id} contact={name} number={number} />
        </ContactLi>
      ))}
    </ContactUl>
  );
};
