import EndpointData from "./styles";

type Props = {
  title: string;
  form: JSX.Element;
  theme?: string;
  children?: JSX.Element;
};

const EndpointBox = ({ title, form, children, theme }: Props) => {
  return (
    <EndpointData theme={theme || "pink"} >
      <h2>{title}</h2>
      <section className="data">{form}</section>
      {children}
    </EndpointData>
  );
};

export default EndpointBox;
