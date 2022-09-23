import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

interface Contact {
  id?: string;
  full_name?: string;
  email?: string;
  telephone?: string;
  client?: string;
}

interface ContactDetail {
  req_contact_id: string;
  req_data?: Contact;
}

const createContact = createAsyncThunk(
  "contacts/create",
  async (contact: Contact, thunkAPI) => {
    const response = await api.post("contacts/", contact);
    return response.data;
  }
);

// const getClient = createAsyncThunk(
//   "clients/get",
//   async (clientDetail: ClientDetail, thunkAPI) => {
//     const response = await api.get(`clients/${clientDetail.req_client_id}/`);
//     return response.data;
//   }
// );

// const updateClient = createAsyncThunk(
//   "clients/update",
//   async (clientDetail: ClientDetail, thunkAPI) => {
//     const response = await api.patch(
//       `clients/${clientDetail.req_client_id}/`,
//       clientDetail.req_data
//     );
//     return response.data;
//   }
// );

// const deleteClient = createAsyncThunk(
//   "clients/delete",
//   async (clientDetail: ClientDetail, thunkAPI) => {
//     await api.delete(`clients/${clientDetail.req_client_id}/`);
//   }
// );

// const listClients = createAsyncThunk("clients/list", async (thunkAPI) => {
//   const response = await api.get("clients/");
//   return response.data;
// });

interface ContactsState {
  contact: {};
  contact_list: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  contact: {},
  contact_list: [],
  loading: "idle",
} as ContactsState;

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.contact = action.payload;
    });
    // builder.addCase(getClient.fulfilled, (state, action) => {
    //   state.client = action.payload;
    // });
    // builder.addCase(updateClient.fulfilled, (state, action) => {
    //   state.client = action.payload;
    // });
    // builder.addCase(deleteClient.fulfilled, (state, action) => {
    //   state.client = {};
    // });
    // builder.addCase(listClients.fulfilled, (state, action) => {
    //   state.client_list = action.payload;
    // });
  },
});

export type { Contact, ContactDetail };

export default contactsSlice.reducer;
// export { createContact, getClient, updateClient, deleteClient, listClients };
export { createContact };
