import { TextInput, TextInputProps } from "react-native";
import { IconProps } from "../icon/types";

export interface Props extends TextInputProps {
  name: string;
  icon?: IconProps;
  value?: string;
}

export interface InputProps extends TextInput {}

export interface ContainerProps {
  isFocused: boolean;
}

export interface StyledIconProps {
  isFocused: boolean;
  isFilled: boolean;
}

export interface ForwardRef {
  focus: () => void;
}
