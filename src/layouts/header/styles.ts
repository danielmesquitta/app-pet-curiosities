import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px 0;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
