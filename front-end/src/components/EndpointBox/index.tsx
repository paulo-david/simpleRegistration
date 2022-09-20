import EndpointData from "./styles";

type Props = {
  title: string;
  form: JSX.Element;
  response: object;
  // children: JSX.Element;
};

const EndpointBox = ({ title, form, response }: Props) => {
  return (
    <EndpointData>
      <h2>{title}</h2>
      <section className="data">{form}</section>
    </EndpointData>
  );
};

export default EndpointBox;
