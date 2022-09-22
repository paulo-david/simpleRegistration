import { useForm } from "react-hook-form";
import EndpointBox from "../EndpointBox";

import store from "../../features/store";
import { createClient } from "../../features/clients/clientsSlice";

const FormCreateClient = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    store.dispatch(createClient(data));
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="full-name">full name:</label>
      <input type="text" id="full-name" required {...register("full_name")} />

      <label htmlFor="email">email:</label>
      <input type="email" id="email" required {...register("email")} />

      <label htmlFor="telefone">telefone:</label>
      <input type="tel" id="telefone" required {...register("telephone")} />

      <button type="submit">Send</button>
    </form>
  );

  return <EndpointBox title="Create client" form={form}></EndpointBox>;
};

export default FormCreateClient;
