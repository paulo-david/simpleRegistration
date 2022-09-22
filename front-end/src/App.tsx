import "./App.css";
import ClientList from "./components/ClientList";

import FormCreateClient from "./components/Forms/formCreateClient";
import FormUpdateClient from "./components/Forms/formUpdateClient";
import FormDeleteClient from "./components/Forms/formDeleteClient";

const App = () => {
  return (
    <div className="App">
      <FormCreateClient></FormCreateClient>
      <FormUpdateClient></FormUpdateClient>
      <FormDeleteClient></FormDeleteClient>
      <ClientList></ClientList>
    </div>
  );
};

export default App;
