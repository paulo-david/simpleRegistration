import { useAppSelector as useSelector } from "../../features/hooks";

import List from "./styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ClientData = () => {
  const contact = useSelector((state) => state.contact.contact);

  return (
    <List>
      <SyntaxHighlighter language="javascript" style={dark}>
        {JSON.stringify(contact, null, 2)}
      </SyntaxHighlighter>
    </List>
  );
};

export default ClientData;
