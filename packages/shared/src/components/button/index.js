import styled from "styled-components";
import { rem } from "polished";

const Button = styled.button`
  background: ${(props) => props.theme.colors.green};
  border: 0;
  border-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  box-shadow: none;
  padding: ${rem("16px")};
  font-weight: ${(props) => props.theme.font.medium};
  font-size: ${rem("16px")};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: 0;
  text-shadow: none;
  font-family: Roboto;
  cursor: pointer;
  width: 100%
`;

export default Button