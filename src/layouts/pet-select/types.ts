import { TouchableOpacityProps } from "react-native";

export interface Pet {
  id: string;
  breed: string;
  image: any;
  selected?: boolean;
}

export interface Props {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export interface CardProps extends TouchableOpacityProps {
  selected?: boolean;
}
