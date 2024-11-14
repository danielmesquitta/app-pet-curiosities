import { FlatListProps, TouchableOpacityProps } from "react-native";

export interface Item {
  id: string;
  text?: string;
  image?: any;
  isSelected?: boolean;
}

export interface SelectItemProps {
  item: Item;
  onSelect: (item: Item) => void;
  quiz?: Quiz;
}

interface Quiz {
  correctId: string;
  isAnswered: boolean;
}

export interface Props extends Partial<FlatListProps<Item>> {
  search?: string;
  items: Item[];
  onSelect: (item: Item | null) => void;
  quiz?: Quiz;
}

export type Appearance = "primary" | "success" | "error";

export interface CardProps extends TouchableOpacityProps {
  appearance?: Appearance;
  type?: "image" | "text";
}
