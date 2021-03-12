import styled from "styled-components";

type BaceButtonProps = {
  isSolid?: boolean;
};

const BaceButton = styled.button<BaceButtonProps>`
  color: ${(props) => (props.isSolid ? "#fff" : "#6A63DD")};
  background-color: ${(props) => (props.isSolid ? "#6A63DD" : "#6A63DD1a")};
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
`;
export default BaceButton;
