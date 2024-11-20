import { Icon as IconComponent } from "@/components/icon";
import styled from "styled-components/native";
import { IconProps } from "./types";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 12px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.primary._200};
`;

export const Content = styled.View`
  flex-direction: row;
  width: 30%;
  align-items: center;
`;

export const Text = styled.Text<IconProps>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, color }) => color || theme.colors.primary._600};
`;

export const Icon = styled(IconComponent)<IconProps>`
  margin-right: 8px;
  color: ${({ theme, color }) => color || theme.colors.primary._600};
  opacity: 0.7;
`;
