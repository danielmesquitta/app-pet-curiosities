import { Dispatch } from "react";
import { FlatListProps } from "react-native";
import { Item, ParentAppearance } from "../types";

export interface SelectItemProps {
  item: Item;
  onSelect: (item: Item) => void;
  quiz?: Quiz | null;
  appearance?: ParentAppearance;
}

interface Quiz {
  correctId: string;
  isAnswered: boolean;
}

export interface Props extends Partial<FlatListProps<Item>> {
  search?: string;
  items: Item[];
  onSelect: Dispatch<React.SetStateAction<Item | null>>;
  quiz?: Quiz;
  appearance?: ParentAppearance;
}
