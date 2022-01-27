import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.whiteSoft};
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export default Wrapper