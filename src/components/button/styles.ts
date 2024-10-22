import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ContainerProps, TextProps } from "./types";

export const Container = styled(TouchableOpacity)<ContainerProps>`
  height: 60px;
  background: ${({ theme, appearance }) =>
    appearance == "secondary"
      ? theme.colors.primary._200
      : theme.colors.primary._400};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ theme, appearance }) =>
    appearance == "secondary"
      ? theme.colors.primary._500
      : theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;
