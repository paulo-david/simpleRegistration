import { useAppSelector as useSelector } from "../../features/hooks";

import List from "./styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ClientList = () => {
  const lst = useSelector((state) => state.client.client_list);

  return (
    <List>
      <SyntaxHighlighter language="javascript" style={dark}>
        {JSON.stringify(lst, null, 2)}
      </SyntaxHighlighter>
    </List>
  );
};

export default ClientList;
