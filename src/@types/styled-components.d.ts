import * as theme from "@/src/theme";
import "styled-components/native";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
