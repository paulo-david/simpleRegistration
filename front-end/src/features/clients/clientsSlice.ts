import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

interface Client {
  id?: string;
  full_name?: string;
  email?: string;
  telephone?: string;
  // contacts?: Array<Contact>
  created_at?: string;
}

interface ClientDetail {
  req_client_id: string;
  req_data?: Client;
}

const createClient = createAsyncThunk(
  "clients/create",
  async (client: Client, thunkAPI) => {
    const response = await api.post("clients/", client);
    return response.data;
  }
);

const getClient = createAsyncThunk(
  "clients/get",
  async (clientDetail: ClientDetail, thunkAPI) => {
    const response = await api.get(`clients/${clientDetail.req_client_id}/`);
    return response.data;
  }
);

const updateClient = createAsyncThunk(
  "clients/update",
  async (clientDetail: ClientDetail, thunkAPI) => {
    const response = await api.patch(
      `clients/${clientDetail.req_client_id}/`,
      clientDetail.req_data
    );
    return response.data;
  }
);

const deleteClient = createAsyncThunk(
  "clients/delete",
  async (clientDetail: ClientDetail, thunkAPI) => {
    await api.delete(`clients/${clientDetail.req_client_id}/`);
  }
);

const listClients = createAsyncThunk("clients/list", async (thunkAPI) => {
  const response = await api.get("clients/");
  return response.data;
});

interface ClientsState {
  client: {};
  client_list: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  client: {},
  client_list: [],
  loading: "idle",
} as ClientsState;

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createClient.fulfilled, (state, action) => {
      state.client = action.payload;
    });
    builder.addCase(getClient.fulfilled, (state, action) => {
      state.client = action.payload;
    });
    builder.addCase(updateClient.fulfilled, (state, action) => {
      state.client = action.payload;
    });
    builder.addCase(deleteClient.fulfilled, (state, action) => {
      state.client = {};
    });
    builder.addCase(listClients.fulfilled, (state, action) => {
      state.client_list = action.payload;
    });
  },
});

export type { Client, ClientDetail };

export default clientsSlice.reducer;
export { createClient, getClient, updateClient, deleteClient, listClients };
