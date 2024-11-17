import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 12px;
  padding-top: 0;
  background-color: ${({ theme }) => theme.colors.primary._200};
`;

export const Footer = styled.View`
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
`;
