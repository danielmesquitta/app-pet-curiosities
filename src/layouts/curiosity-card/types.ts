import { ViewProps } from "react-native";

export interface Props extends ViewProps {
  title: string;
  content: string;
}

export interface IconProps extends ViewProps {
  color?: string;
}
