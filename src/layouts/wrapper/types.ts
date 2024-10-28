import { Props as ContainerProps } from "@/src/layouts/container/types";
import { ScrollViewProps } from "react-native";

export interface Props extends ContainerProps {
  scrollViewProps?: ScrollViewProps;
}
