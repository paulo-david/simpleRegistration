import { useEffect, useState } from "react";
import { listClients } from "../../features/clients/clientsSlice";
import store from "../../features/store";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import List from "./styles";

const ClientList = () => {
  const [lst, setLst] = useState("");

  useEffect(() => {
    async function fetchData() {
      await store.dispatch(listClients());
      console.log(store.getState().client.client_list);

      setLst(JSON.stringify(store.getState().client.client_list, null, 2));
    }
    fetchData();
  }, []);

  return (
    <List>
      <SyntaxHighlighter language="javascript" style={dark}>
        {lst}
      </SyntaxHighlighter>
    </List>
  );
};

export default ClientList;
