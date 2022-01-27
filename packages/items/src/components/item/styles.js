import styled from "styled-components";
import { rem } from "polished";

export const Item = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${rem("16px")};
  margin: 8px 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: solid 1px rgb(250, 250, 250);
`;

export const Image = styled.img`
  text-align: center;
  flex: 1;
  display: block;
  max-width: 200px;
  width: 100%;
  height: auto;
  flex-grow: 1;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  margin-top: 16px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${rem("16px")};
  font-weight: ${(props) => props.theme.font.medium};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 120px;
  flex-grow: 1;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${rem("14px")};
  font-weight: ${(props) => props.theme.font.bold};
  margin-top: 16px;
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 16px;
  flex-grow: 1;
`;