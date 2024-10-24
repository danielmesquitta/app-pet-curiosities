import styled from "styled-components/native";

export const Container = styled.View`
  padding: 8px;
  padding-top: 20px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
