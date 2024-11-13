import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 12px;
  padding-top: 0;
  background-color: ${({ theme }) => theme.colors.primary._100};
`;

export const Header = styled.View`
  flex: 1;
  padding: 8px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const HeaderSubTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
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

export const Form = styled.View`
  padding: 8px;
  padding-bottom: 16px;
`;

export const FooterContent = styled.View`
  justify-content: center;
  width: 50%;
`;

export const FooterTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const FooterText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
