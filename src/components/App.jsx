// import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import ContactForm from './ContactForm/ContactForm';
// import { filterValue } from 'redux/contacts/filtersSlice';
// import { deleteContact, fetchContacts } from 'redux/contacts/operations';
// import Loader from './Loader/Loader';

// export default function App() {
//   const filter = useSelector(state => state.filter);
//   const contactsList = useSelector(state => state.contacts);

//   const dispatch = useDispatch();
//   const isLoading = useSelector(state => state.contacts.isLoading);
//   const error = useSelector(state => state.contacts.error);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const changeFilter = eve => {
//     dispatch(filterValue(eve.currentTarget.value));
//   };

//   const getFilteredOutContacts = () => {
//     const normalizeFilter = filter.toLowerCase();

//     return contactsList.contacts.items.filter(person =>
//       person.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   const deletContact = contactsId => {
//     dispatch(deleteContact(contactsId));
//   };

//   const filteredOutContactsList = getFilteredOutContacts();

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <ContactForm />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />

//       {isLoading && !error && <Loader />}
//       {!isLoading && (
//         <ContactList
//           itemList={filteredOutContactsList}
//           onDeleteClick={deletContact}
//         />
//       )}
//     </div>
//   );
// }

import { lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { Register } from '../pages/Register';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';
import { getCurrentUser } from 'redux/authOperations';
import { PrivateRoute, PublicRoute } from 'routes';
import { renewError } from 'redux/authSlice';

const Contacts = lazy(() =>
  import('../pages/Contacts').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

function App() {
  const [currentPath, setCurrentPath] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(renewError());
  }, [currentPath, dispatch]);

  const handleCurrentPath = path => {
    setCurrentPath(path);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Register setPath={handleCurrentPath} />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Login setPath={handleCurrentPath} />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
