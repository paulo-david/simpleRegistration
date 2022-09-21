import { useEffect, useState } from "react";
import { listClients } from "../../features/clients/clientsSlice";
import store from "../../features/store";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import List from "./styles";

const ClientList = () => {
  const [lst, setLst] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await store.dispatch(listClients());
      setLst(store.getState().client.client_list);
    }

    fetchData();
  }, []);

  return (
    <List>
      <SyntaxHighlighter language="javascript" style={dark}>
        {JSON.stringify(lst, null, 2)}
      </SyntaxHighlighter>
    </List>
  );
};

export default ClientList;
