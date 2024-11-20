import { FlatListProps } from "react-native";
import { Item, ParentAppearance } from "../types";

export interface SelectItemProps {
  item: Item;
  onSelect: (items: Item) => void;
  appearance?: ParentAppearance;
}

export interface Props extends Partial<FlatListProps<Item>> {
  search?: string;
  items: Item[];
  onSelect: (items: Item[]) => void;
  appearance?: ParentAppearance;
}
