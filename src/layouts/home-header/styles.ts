import { FontAwesome6 } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.primary._100};
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._500};
`;

export const Icon = styled(FontAwesome6)`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary._500};
`;
