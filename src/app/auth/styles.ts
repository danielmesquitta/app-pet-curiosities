import { StatusBar } from "react-native";
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
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
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

export const SelectPetContainer = styled.View`
  flex: 1;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary._100};
  padding-top: ${StatusBar.currentHeight || 0}px;
`;

export const SelectPetFooter = styled.View`
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const SelectPetForm = styled.View`
  padding: 8px;
  padding-bottom: 16px;
`;

export const SelectPetFooterContent = styled.View`
  justify-content: center;
  width: 50%;
`;

export const SelectPetFooterTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const SelectPetFooterText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
