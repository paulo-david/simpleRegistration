import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector as useSelector } from "../../features/hooks";

import EndpointBox from "../EndpointBox";

import store from "../../features/store";
import {
  Client,
  ClientDetail,
  getClient,
  listClients,
} from "../../features/clients/clientsSlice";

const FormGetClient = () => {
  const lst = useSelector((state) => state.client.client_list);
  const client = useSelector((state) => state.client.client);

  useEffect(() => {
    store.dispatch(listClients());
  }, [client]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const req_body: ClientDetail = {
      req_client_id: data.client_id,
    };

    store.dispatch(getClient(req_body));
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="client_id_select">client_id:</label>
      <select id="client_id_select" required {...register("client_id")}>
        <option value="">--Select a client--</option>
        {lst.map((cli: Client) => (
          <option value={cli.id} key={cli.id}>{`${
            cli.full_name
          } (${cli.id?.slice(0, 7)})`}</option>
        ))}
      </select>

      <button type="submit">Send</button>
    </form>
  );

  return <EndpointBox title="Get client" form={form}></EndpointBox>;
};

export default FormGetClient;
