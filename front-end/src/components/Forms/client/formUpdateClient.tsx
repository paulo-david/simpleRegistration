import { useForm } from "react-hook-form";
import { useAppSelector as useSelector } from "../../../features/hooks";

import EndpointBox from "../../EndpointBox";

import store from "../../../features/store";
import {
  Client,
  ClientDetail,
  updateClient,
} from "../../../features/clients/clientsSlice";

const FormUpdateClient = () => {
  const lst = useSelector((state) => state.client.client_list);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const array = Object.entries(data);
    const filtered = array.filter(
      ([key, value]) => key !== "client_id" && value !== ""
    );
    const req_data: Client = Object.fromEntries(filtered);

    const req_body: ClientDetail = {
      req_client_id: data.client_id,
      req_data,
    };

    store.dispatch(updateClient(req_body));
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="client_id_select">client_id:</label>
      <select id="client_id_select" required {...register("client_id")}>
        <option value="">--Select a client--</option>
        {lst.map((cli: Client) => (
          <option value={cli.id} key={cli.id}>
            {`${cli.full_name} (${cli.id?.slice(0, 7)})`}
          </option>
        ))}
      </select>

      <label htmlFor="full-name">full name:</label>
      <input type="text" id="full-name" {...register("full_name")} />

      <label htmlFor="email">email:</label>
      <input type="email" id="email" {...register("email")} />

      <label htmlFor="telefone">telefone:</label>
      <input type="tel" id="telefone" {...register("telephone")} />

      <button type="submit">Send</button>
    </form>
  );

  return <EndpointBox title="Update client" form={form}></EndpointBox>;
};

export default FormUpdateClient;
