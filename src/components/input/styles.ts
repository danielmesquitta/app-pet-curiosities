import { TextInput as RNTextInput, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { ContainerProps, IconProps } from "./types";

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => "white"};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary._300 : theme.colors.primary._100};
`;

export const TextInput = styled(RNTextInput)`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Ionicons)<IconProps>`
  margin-right: 16px;
  color: ${({ theme, isFocused, isFilled }) =>
    isFocused || isFilled ? theme.colors.primary._300 : theme.colors.gray._100};
`;
