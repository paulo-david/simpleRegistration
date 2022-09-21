import "./App.css";
import { useForm } from "react-hook-form";
import EndpointBox from "./components/EndpointBox";

import store from "./features/store";
import { Client, createClient } from "./features/clients/clientsSlice";

const App = () => {
  const { register, handleSubmit } = useForm();

  // const dispatch = useAppDispatch;

  const onSubmit = (data: any) => {
    console.log(data);
    // dispatch({ type: 'createClient', {} })
    const cli = { ...data } as Client;
    store.dispatch(createClient(cli))
  };

  const formCreateClient = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="full-name">full name:</label>
      <input type="text" id="full-name" {...register("full_name")} />

      <label htmlFor="email">email:</label>
      <input type="email" id="email" {...register("email")} />

      <label htmlFor="telefone">telefone:</label>
      <input type="tel" id="telefone" {...register("telephone")} />

      <button type="submit">Send</button>
    </form>
  );

  return (
    <div className="App">
      <EndpointBox
        title="Create client"
        form={formCreateClient}
        response={{ oi: "asdf" }}
      ></EndpointBox>
    </div>
  );
};

export default App;
