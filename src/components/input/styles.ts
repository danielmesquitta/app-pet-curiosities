import { Icon as IconComponent } from "@/components/icon";
import { TextInput as RNTextInput, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { ContainerProps, StyledIconProps } from "./types";

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
    isFocused ? theme.colors.primary._400 : theme.colors.primary._200};
`;

export const TextInput = styled(RNTextInput)`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(IconComponent)<StyledIconProps>`
  margin-right: 16px;
  color: ${({ theme, isFocused, isFilled }) =>
    isFocused || isFilled ? theme.colors.primary._400 : theme.colors.gray._100};
`;
