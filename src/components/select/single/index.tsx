import { useEffect, useMemo, useState } from "react";
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

function SelectItem({
  item,
  onSelect,
  quiz,
  appearance: parentAppearance,
}: SelectItemProps) {
  function handleSelect() {
    onSelect(item);
  }

  const appearance = useMemo(() => {
    const isAnsweredQuiz = quiz && quiz.isAnswered;
    if (!isAnsweredQuiz) {
      if (item.isSelected) {
        return "success";
      }
      return "primary";
    }

    const isCorrect = item.id === quiz.correctId;
    if (isCorrect) {
      return "success";
    }
    if (item.isSelected) {
      return "error";
    }
    return "primary";
  }, [item.id, item.isSelected, quiz]);

  const texts = item.text?.split("<br/>") || [];

  return (
    <Card
      type={item.image ? "image" : "text"}
      appearance={appearance}
      activeOpacity={0.7}
      onPress={handleSelect}
      parentAppearance={parentAppearance}
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

export function Select({
  items: defaultItems,
  onSelect,
  search,
  quiz,
  appearance,
  ...props
}: Props) {
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    onSelect(items.find((item) => item.isSelected) || null);
  }, [items, onSelect]);

  function handleSelect(item: Item) {
    if (quiz?.isAnswered) {
      return;
    }

    setItems((prev) =>
      prev.map((prevItem) => ({
        ...prevItem,
        isSelected: prevItem.id === item.id ? !prevItem.isSelected : false,
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
          <SelectItem
            item={item}
            onSelect={handleSelect}
            quiz={quiz}
            appearance={appearance}
          />
        )}
        keyExtractor={(item) => item.id}
        style={{ marginLeft: -8, marginRight: -8 }}
      />
    </Container>
  );
}
