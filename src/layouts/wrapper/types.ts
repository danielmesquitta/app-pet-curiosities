import { Props as ContainerProps } from "@/layouts/container/types";
import { ScrollViewProps } from "react-native";

export interface Props extends ContainerProps {
  scrollViewProps?: ScrollViewProps;
}
