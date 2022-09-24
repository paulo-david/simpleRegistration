import { useAppSelector as useSelector } from "../../features/hooks";

import List from "./styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ClientList = () => {
  const lst = useSelector((state) => state.contact.contact_list);

  return (
    <List>
      <SyntaxHighlighter language="javascript" style={docco}>
        {JSON.stringify(lst, null, 2)}
      </SyntaxHighlighter>
    </List>
  );
};

export default ClientList;
