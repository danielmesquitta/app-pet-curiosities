import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { IconProps } from "./types";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.primary._200};
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text<IconProps>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, color }) => color || theme.colors.primary._600};
`;

export const FontAwesomeIcon = styled(FontAwesome6)<IconProps>`
  margin-right: 8px;
  color: ${({ theme, color }) => color || theme.colors.primary._600};
`;

export const Icon = styled(Ionicons)<IconProps>`
  margin-right: 8px;
  color: ${({ theme, color }) => color || theme.colors.primary._600};
`;
