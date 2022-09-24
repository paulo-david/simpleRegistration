import styled from "styled-components";

interface Props {
  theme?: string;
}

const EndpointData = styled.section<Props>`
  background-color: ${(props) => props.theme};
  border-radius: 10px;

  width: 90%;
  margin: 0 auto;

  h2 {
    text-align: left;

    margin: 5px 0;

    padding-left: 10px;
    padding-top: 10px;
  }

  .data {
    display: flex;
    justify-content: space-around;

    form {
      display: flex;
      flex-direction: column;

      label {
        text-align: left;
      }

      input,
      button,
      select {
        margin-bottom: 8px;
        background-color: white;

        height: 25px;
        border: 1px solid black;
        border-radius: 4px;
      }

      button {
        width: 65px;
        align-self: center;

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default EndpointData;
