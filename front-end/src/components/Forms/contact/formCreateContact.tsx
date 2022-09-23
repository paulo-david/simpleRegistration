import { useForm } from "react-hook-form";
import { useAppSelector as useSelector } from "../../../features/hooks"

import EndpointBox from "../../EndpointBox";

import store from "../../../features/store";
import { Client } from "../../../features/clients/clientsSlice";
import { createContact } from "../../../features/contacts/contactsSlice";

const FormCreateClient = () => {
  const lst = useSelector((state) => state.client.client_list);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    store.dispatch(createContact(data));
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="full-name">full name:</label>
      <input type="text" id="full-name" required {...register("full_name")} />

      <label htmlFor="email">email:</label>
      <input type="email" id="email" required {...register("email")} />

      <label htmlFor="telefone">telefone:</label>
      <input type="tel" id="telefone" required {...register("telephone")} />

      <label htmlFor="client_id_select">client:</label>

      <select id="client_id_select" required {...register("client")}>
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

  return <EndpointBox title="Create contact" form={form}></EndpointBox>;
};

export default FormCreateClient;
