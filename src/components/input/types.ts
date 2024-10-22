import { TextInput, TextInputProps } from "react-native";

export interface Props extends TextInputProps {
  name: string;
  icon?: string;
  value?: string;
}

export interface InputProps extends TextInput {}

export interface ContainerProps {
  isFocused: boolean;
}

export interface IconProps {
  isFocused: boolean;
  isFilled: boolean;
}

export interface ForwardRef {
  focus: () => void;
}
