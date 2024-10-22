import { TouchableOpacityProps } from "react-native";

export interface Props extends TouchableOpacityProps {
  children: string;
  appearance?: "primary" | "secondary";
}

export interface ContainerProps {
  appearance?: "primary" | "secondary";
}

export interface TextProps {
  appearance?: "primary" | "secondary";
}
