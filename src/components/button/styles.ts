import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ContainerProps, TextProps } from "./types";

const backgroundOptions = {
  primary: colors.primary._500,
  secondary: colors.primary._300,
  tertiary: "transparent",
};

const heightOptions = {
  small: 50,
  medium: 60,
};

const fontSizeOptions = {
  small: 16,
  medium: 18,
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  height: ${({ size }) => heightOptions[size || "medium"]}px;
  padding-left: 20px;
  padding-right: 20px;
  background: ${({ appearance, disabled }) =>
    disabled ? colors.gray._100 : backgroundOptions[appearance || "primary"]};
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ theme, disabled }) =>
    disabled ? colors.gray._200 : theme.colors.primary._600};
  text-decoration: ${({ appearance }) =>
    appearance === "tertiary" ? "underline" : "none"};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ size }) => fontSizeOptions[size || "medium"]}px;
`;

export const Icon = styled(Ionicons)`
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.primary._600};
`;
