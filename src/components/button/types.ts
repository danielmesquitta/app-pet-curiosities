import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { TouchableOpacityProps } from "react-native";

type Appearance = "primary" | "secondary" | "tertiary";

export interface Props extends TouchableOpacityProps {
  children: string;
  appearance?: Appearance;
  icon?: ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;
}

export interface ContainerProps {
  appearance?: Appearance;
}

export interface TextProps {
  appearance?: Appearance;
  disabled?: boolean;
}
