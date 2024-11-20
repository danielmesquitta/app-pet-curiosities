import { TouchableOpacityProps } from "react-native";

export type Appearance = "primary" | "success" | "error";

export type ParentAppearance = "primary" | "secondary";

export interface CardProps extends TouchableOpacityProps {
  appearance?: Appearance;
  parentAppearance?: ParentAppearance;
  type?: "image" | "text";
}

export interface Item {
  id: string;
  text?: string;
  image?: any;
  isSelected?: boolean;
}
