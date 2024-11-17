import { TouchableOpacityProps } from "react-native";

export type Appearance = "primary" | "success" | "error";

export interface CardProps extends TouchableOpacityProps {
  appearance?: Appearance;
  type?: "image" | "text";
}

export interface Item {
  id: string;
  text?: string;
  image?: any;
  isSelected?: boolean;
}
