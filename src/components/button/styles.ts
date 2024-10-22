import { colors } from "@/src/theme";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ContainerProps, TextProps } from "./types";

const backgroundOptions = {
  primary: colors.primary._400,
  secondary: colors.primary._200,
  tertiary: "transparent",
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  height: 60px;
  background: ${({ appearance }) => backgroundOptions[appearance || "primary"]};
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.primary._500};
  text-decoration: ${({ appearance }) =>
    appearance === "tertiary" ? "underline" : "none"};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const Icon = styled(FontAwesome6)`
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.primary._500};
`;
