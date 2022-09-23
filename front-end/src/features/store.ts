import { configureStore } from "@reduxjs/toolkit";

import clientsReducer from "./clients/clientsSlice";
import contactReducer from "./contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    client: clientsReducer,
    contact: contactReducer,
  },
});

export default store;
