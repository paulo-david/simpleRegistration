import "./App.css";
import ClientList from "./components/ClientList";

import FormCreateClient from "./components/Forms/formCreateClient";

const App = () => {
  return (
    <div className="App">
      <FormCreateClient></FormCreateClient>
      <ClientList></ClientList>
    </div>
  );
};

export default App;
