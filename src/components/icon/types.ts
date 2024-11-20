import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { ComponentProps } from "react";

type FontAwesomeProps = ComponentProps<
  typeof FontAwesome5 | typeof FontAwesome6
>;

export interface IconProps extends FontAwesomeProps {
  version?: "FontAwesome" | "FontAwesome5" | "FontAwesome6";
  name: FontAwesomeProps["name"];
}
