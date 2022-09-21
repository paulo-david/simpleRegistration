import EndpointData from "./styles";

type Props = {
  title: string;
  form: JSX.Element;
};

const EndpointBox = ({ title, form }: Props) => {
  return (
    <EndpointData>
      <h2>{title}</h2>
      <section className="data">{form}</section>
    </EndpointData>
  );
};

export default EndpointBox;
