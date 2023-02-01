import { createSelector } from '@reduxjs/toolkit';

const selectPrimaryContacts = state => {
  return state.contacts;
};

const selectFilter = state => state.filter;

const selectContacts = state => {
  const filteredValue = selectFilter(state);
  return state.contacts.items.filter(item =>
    item.name.toLowerCase().includes(filteredValue)
  );
};

const selectIsLoading = createSelector([selectPrimaryContacts], contacts => {
  return contacts.isLoading;
});

const selectError = createSelector([selectPrimaryContacts], contacts => {
  return contacts.error;
});

const selectUser = state => state.auth.user;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectIsgettingCurrent = state => state.auth.isGettingCurrent;

const selectAuthError = state => state.auth.error;

export {
  selectPrimaryContacts,
  selectFilter,
  selectContacts,
  selectIsLoading,
  selectError,
  selectUser,
  selectIsLoggedIn,
  selectIsgettingCurrent,
  selectAuthError,
};
