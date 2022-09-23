import React, { useEffect, useState } from "react";
import { useAppSelector as useSelector } from "../../../features/hooks"

import EndpointBox from "../../EndpointBox";
import ClientData from "../../ClientData";

import store from "../../../features/store";
import {
  Client,
  ClientDetail,
  getClient,
  listClients,
} from "../../../features/clients/clientsSlice";
import { Contact } from "../../../features/contacts/contactsSlice";

const FormGetClient = () => {
  const lst = useSelector((state) => state.client.client_list);
  const client: Client = useSelector((state) => state.client.client);
  const contact: Contact = useSelector((state) => state.contact.contact);

  useEffect(() => {
    store.dispatch(listClients());

    setValue(client.id || "");
  }, [client, contact]);

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);

    const req_body: ClientDetail = {
      req_client_id: event.target.value,
    };

    store.dispatch(getClient(req_body));
  };

  const form = (
    <form>
      <label htmlFor="client_id_select">client_id:</label>
      <select
        id="client_id_select"
        required
        value={value}
        onChange={handleChange}
      >
        <option value="">--Select a client--</option>
        {lst.map((cli: Client) => (
          <option value={cli.id} key={cli.id}>{`${
            cli.full_name
          } (${cli.id?.slice(0, 7)})`}</option>
        ))}
      </select>
    </form>
  );

  return (
    <EndpointBox title="Get client" form={form}>
      <ClientData></ClientData>
    </EndpointBox>
  );
};

export default FormGetClient;
