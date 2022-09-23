import "./App.css";

import ClientList from "./components/ClientList";

import FormCreateClient from "./components/Forms/client/formCreateClient";
import FormUpdateClient from "./components/Forms/client/formUpdateClient";
import FormDeleteClient from "./components/Forms/client/formDeleteClient";
import FormGetClient from "./components/Forms/client/formGetClient";

const App = () => {
  return (
    <div className="App">
      <div className="requests">
        <section className="column1">
          <FormCreateClient></FormCreateClient>
          <FormUpdateClient></FormUpdateClient>
          <FormDeleteClient></FormDeleteClient>
        </section>

        <section className="column2">
          <FormGetClient></FormGetClient>
        </section>
      </div>

      <ClientList></ClientList>
    </div>
  );
};

export default App;
