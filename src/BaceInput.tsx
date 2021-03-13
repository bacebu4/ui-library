import styled from "styled-components";

const BaceInput = styled.input`
  color: #343434;
  background-color: #a4a2c11a;
  flex: 1;
  font-family: inherit;
  font-size: 1rem;
  border: 0;
  padding: 12px 16px;
  border-radius: 16px;
  outline: 0;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a4a2c1;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a4a2c1;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #a4a2c1;
  }
`;

export default BaceInput;
