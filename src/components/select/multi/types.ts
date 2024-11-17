import { FlatListProps } from "react-native";
import { Item } from "../types";

export interface SelectItemProps {
  item: Item;
  onSelect: (items: Item) => void;
}

export interface Props extends Partial<FlatListProps<Item>> {
  search?: string;
  items: Item[];
  onSelect: (items: Item[]) => void;
}
