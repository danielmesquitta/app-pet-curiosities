import { TouchableOpacityProps } from "react-native";

type Appearance = "primary" | "secondary" | "tertiary";

export interface Props extends TouchableOpacityProps {
  children: string;
  appearance?: Appearance;
  icon?: string;
  iconSize?: number;
}

export interface ContainerProps {
  appearance?: Appearance;
}

export interface TextProps {
  appearance?: Appearance;
}
