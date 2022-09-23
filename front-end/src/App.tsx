import "./App.css";

import ClientList from "./components/ClientList";

import FormCreateClient from "./components/Forms/client/formCreateClient";
import FormUpdateClient from "./components/Forms/client/formUpdateClient";
import FormDeleteClient from "./components/Forms/client/formDeleteClient";
import FormGetClient from "./components/Forms/client/formGetClient";

import FormCreateContact from "./components/Forms/contact/formCreateContact";
import FormUpdateContact from "./components/Forms/contact/formUpdateContact";
import FormDeleteContact from "./components/Forms/contact/formDeleteContact";
import FormGetContact from "./components/Forms/contact/formGetContact";

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

      <div className="requests">
        <section className="column1">
          <FormCreateContact></FormCreateContact>
          <FormUpdateContact></FormUpdateContact>
          <FormDeleteContact></FormDeleteContact>
        </section>
        <section className="column2">
          <FormGetContact></FormGetContact>
        </section>
      </div>

    </div>
  );
};

export default App;
