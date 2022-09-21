import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

interface Client {
  full_name: string;
  email: string;
  telephone: string;
}

const createClient = createAsyncThunk(
  "clients/create",
  async (client: Client, thunkAPI) => {
    const response = await api.post("clients/", client);
    return response.data;
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
    builder.addCase(listClients.fulfilled, (state, action) => {
      state.client_list = action.payload;
    });
  },
});

export default clientsSlice.reducer;
export { createClient, listClients };
export type { Client };
