import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import {
  Card,
  CardImage,
  CardText,
  CardTextContainer,
  Container,
} from "../styles";
import { Item } from "../types";
import { Props, SelectItemProps } from "./types";

function SelectItem({ item, onSelect }: SelectItemProps) {
  function handleSelect() {
    onSelect(item);
  }

  const texts = item.text?.split("<br/>") || [];

  return (
    <Card
      type={item.image ? "image" : "text"}
      appearance={item.isSelected ? "success" : "primary"}
      activeOpacity={0.7}
      onPress={handleSelect}
    >
      {item.image && <CardImage source={item.image} />}
      {texts.length > 0 && (
        <CardTextContainer>
          {texts.map((text, index) => (
            <CardText key={index}>{text}</CardText>
          ))}
        </CardTextContainer>
      )}
    </Card>
  );
}

export function MultiSelect({
  items: defaultItems,
  onSelect,
  search,
  ...props
}: Props) {
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    onSelect(items.filter((item) => item.isSelected));
  }, [items, onSelect]);

  function handleSelect(item: Item) {
    setItems((prev) =>
      prev.map((prevItem) => ({
        ...prevItem,
        isSelected:
          prevItem.id === item.id ? !prevItem.isSelected : prevItem.isSelected,
      }))
    );
  }

  useEffect(() => {
    setItems((prev) => [
      ...defaultItems
        .filter(
          (defaultItem) =>
            !search ||
            defaultItem.text?.toLowerCase().includes(search.toLowerCase())
        )
        .map((defaultItem) => {
          const item =
            prev.find((prevItem) => prevItem.id === defaultItem.id) ||
            defaultItem;

          return {
            ...item,
            isSelected: item.isSelected || false,
          };
        }),
    ]);
  }, [search, defaultItems]);

  return (
    <Container>
      <FlatList
        {...props}
        data={items}
        renderItem={({ item }) => (
          <SelectItem item={item} onSelect={handleSelect} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
