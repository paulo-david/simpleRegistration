import EndpointData from "./styles";

type Props = {
  title: string;
  form: JSX.Element;
  children?: JSX.Element;
};

const EndpointBox = ({ title, form, children }: Props) => {
  return (
    <EndpointData>
      <h2>{title}</h2>
      <section className="data">{form}</section>
      {children}
    </EndpointData>
  );
};

export default EndpointBox;
