import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contactsOperations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import {
  ContactItem,
  ContactItemWrapper,
  DeleteBtn,
  List,
} from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <List>
        {items.length > 0
          ? items.map(item => {
              const { id, name, number } = item;
              return (
                <ContactItem key={id}>
                  <ContactItemWrapper>
                    {name}: {number}
                  </ContactItemWrapper>
                  <DeleteBtn
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </DeleteBtn>
                </ContactItem>
              );
            })
          : null}
      </List>
    </>
  );
}
