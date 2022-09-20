import styled from "styled-components";

const EndpointData = styled.section`
  background-color: pink;
  border-radius: 10px;

  width: 90%;
  margin: 0 auto;

  h2 {
    text-align: left;
    padding-left: 30px;
    padding-top: 30px;
  }

  .data {
    display: flex;
    justify-content: space-around;

    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      
      label {
        text-align: left;
      }
      
      input, button {
        margin-bottom: 7px;
        background-color: white;

        height: 25px;
        border: 1px solid black;
        border-radius: 4px;
      }
    }
  }
`;

export default EndpointData;
