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

const getContact = createAsyncThunk(
  "contacts/get",
  async (contactDetail: ContactDetail, thunkAPI) => {
    const response = await api.get(`contacts/${contactDetail.req_contact_id}/`);
    return response.data;
  }
);

const updateContact = createAsyncThunk(
  "contacts/update",
  async (contactDetail: ContactDetail, thunkAPI) => {
    const response = await api.patch(
      `contacts/${contactDetail.req_contact_id}/`,
      contactDetail.req_data
    );
    return response.data;
  }
);

const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactDetail: ContactDetail, thunkAPI) => {
    await api.delete(`contacts/${contactDetail.req_contact_id}/`);
  }
);

const listContacts = createAsyncThunk("contacts/list", async (thunkAPI) => {
  const response = await api.get("contacts/");
  return response.data;
});

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
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.contact = action.payload;
    });
    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.contact = action.payload;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contact = {};
    });
    builder.addCase(listContacts.fulfilled, (state, action) => {
      state.contact_list = action.payload;
    });
  },
});

export type { Contact, ContactDetail };

export default contactsSlice.reducer;
export { createContact, getContact, updateContact, deleteContact, listContacts };
