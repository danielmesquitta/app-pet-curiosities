import { TouchableOpacityProps } from "react-native";
import { IconProps } from "../icon/types";

type Appearance = "primary" | "secondary" | "tertiary";

type Size = "small" | "medium";

export interface Props extends TouchableOpacityProps {
  children: string;
  appearance?: Appearance;
  size?: Size;
  icon?: IconProps;
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
