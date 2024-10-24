import { useState } from "react";
import { FlatList } from "react-native";
import { Card, CardImage, CardText, Container } from "./styles";
import { Pet, Props } from "./types";

const Item = ({ item }: { item: Pet }) => {
  return (
    <Card selected={item.selected} activeOpacity={0.7}>
      <CardImage source={item.image} />
      <CardText>{item.breed}</CardText>
    </Card>
  );
};

export function PetSelect(props: Props) {
  const [pets, setPets] = useState(props.pets);

  return (
    <Container>
      <FlatList
        data={pets}
        numColumns={3}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
