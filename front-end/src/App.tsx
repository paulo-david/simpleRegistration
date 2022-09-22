import "./App.css";

import ClientList from "./components/ClientList";

import FormCreateClient from "./components/Forms/formCreateClient";
import FormUpdateClient from "./components/Forms/formUpdateClient";
import FormDeleteClient from "./components/Forms/formDeleteClient";
import FormGetClient from "./components/Forms/formGetClient";

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
