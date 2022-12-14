import { useAppSelector as useSelector } from "../../features/hooks";

import List from "./styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ClientData = () => {
  const contact = useSelector((state) => state.contact.contact);

  return (
    <List>
      <SyntaxHighlighter language="javascript" style={docco}>
        {JSON.stringify(contact, null, 2)}
      </SyntaxHighlighter>
    </List>
  );
};

export default ClientData;
