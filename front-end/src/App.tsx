import "./App.css";
import ClientList from "./components/ClientList";

import FormCreateClient from "./components/Forms/formCreateClient";
import FormUpdateClient from "./components/Forms/formUpdateClient";
import FormDeleteClient from "./components/Forms/formDeleteClient";
import FormGetClient from "./components/Forms/formGetClient";

const App = () => {
  return (
    <div className="App">
      
      <FormCreateClient></FormCreateClient>
      <FormUpdateClient></FormUpdateClient>
      <FormDeleteClient></FormDeleteClient>
      <FormGetClient></FormGetClient>
      <ClientList></ClientList>
    </div>
  );
};

export default App;
