import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { IconProps } from "./types";

export function Icon({ version = "FontAwesome6", ...rest }: IconProps) {
  switch (version) {
    case "FontAwesome5":
      return <FontAwesome5 {...rest} />;
    case "FontAwesome6":
      return <FontAwesome6 {...rest} />;
    default:
      return <FontAwesome {...rest} />;
  }
}
