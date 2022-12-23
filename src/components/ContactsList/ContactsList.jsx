import { ContactListMarkup, ContactListItem, ContactListHeader, ContactListText, ContactListButton } from 'components/ContactsList/ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilter, selectAllContacts } from 'redux/contacts/selectors';



export const ContactList = () => {
  const dispatch = useDispatch();
  // const { contacts, filter } = useSelector(getContacts, getFilter);
  const items = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  console.log(filter);
 

  const getRequiredCard = () => {
    const normalizedFilter = filter.toLowerCase();
    
  return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCard = contactId => {
    dispatch(deleteContact(contactId));
  };
  const neeedCard = getRequiredCard();
    return (
        <ContactListMarkup>
            {neeedCard.map(({ name, number, id }) => {
                return (
                    <ContactListItem key={id}>
                        <ContactListHeader>{name}</ContactListHeader>
                        <ContactListText>{number}</ContactListText>
                        <ContactListButton type='button' onClick={() => deleteCard(id)}>Delete</ContactListButton>
                    </ContactListItem>
                );
            })}
        </ContactListMarkup>
    );
};


// ContactsList.propTypes = {
//   requiredCard: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   deleteCard: PropTypes.func.isRequired,
// };