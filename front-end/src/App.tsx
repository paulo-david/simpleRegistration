import "./App.css";
import ClientList from "./components/ClientList";

import FormCreateClient from "./components/Forms/formCreateClient";
import FormUpdateClient from "./components/Forms/formUpdateClient";

const App = () => {
  return (
    <div className="App">
      <FormCreateClient></FormCreateClient>
      <FormUpdateClient></FormUpdateClient>
      <ClientList></ClientList>
    </div>
  );
};

export default App;
