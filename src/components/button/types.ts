import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

type Appearance = "primary" | "secondary" | "tertiary";

export interface Props extends TouchableOpacityProps {
  children: string;
  appearance?: Appearance;
  icon?: React.ComponentProps<typeof FontAwesome6>["name"];
  iconSize?: number;
}

export interface ContainerProps {
  appearance?: Appearance;
}

export interface TextProps {
  appearance?: Appearance;
  disabled?: boolean;
}
