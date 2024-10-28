import { colors } from "@/src/theme";
import { useState } from "react";
import { Container, Content, Footer, Icon, Title } from "./styles";
import { Props } from "./types";

export function CuriosityCard({ title, content, ...rest }: Props) {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Footer>
        <Icon size={30} name="refresh" />
        {isLiked ? (
          <Icon color={colors.status.error._200} size={30} name="heart" />
        ) : (
          <Icon size={30} name="heart-outline" />
        )}
      </Footer>
    </Container>
  );
}
