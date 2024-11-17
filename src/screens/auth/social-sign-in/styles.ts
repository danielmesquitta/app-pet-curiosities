import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: #f2ebdd;
  padding: 20px;
`;

export const Content = styled.View``;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 8px;
`;

export const Form = styled.View`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const Footer = styled.View`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
`;
