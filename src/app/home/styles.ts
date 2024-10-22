import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary._050};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  flex: 1;
  justify-content: center;
`;

export const HomeContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HomeTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._500};
  margin-bottom: 4px;
`;

export const HomeSubTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary._500};
  margin-bottom: 24px;
`;
