import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { TouchableOpacityProps } from "react-native";

type Appearance = "primary" | "secondary" | "tertiary";

type Size = "small" | "medium";

export interface Props extends TouchableOpacityProps {
  children: string;
  appearance?: Appearance;
  size?: Size;
  icon?: ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;
}

export interface ContainerProps {
  appearance?: Appearance;
  size?: Size;
}

export interface TextProps {
  appearance?: Appearance;
  size?: Size;
  disabled?: boolean;
}
