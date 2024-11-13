import { colors } from "@/theme";
import { useState } from "react";
import {
  Container,
  Content,
  Footer,
  FooterLeft,
  FooterLeftIcons,
  FooterLeftText,
  Icon,
  Title,
} from "./styles";
import { Props } from "./types";

export function CuriosityCard({ title, content, ...rest }: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);

  function handleLike() {
    setIsDisLiked(false);
    setIsLiked((prev) => !prev);
  }

  function handleDisLike() {
    setIsLiked(false);
    setIsDisLiked((prev) => !prev);
  }

  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Footer>
        <FooterLeft>
          <FooterLeftIcons>
            <Icon
              size={30}
              onPress={handleLike}
              color={isLiked ? colors.status.info._200 : undefined}
              name={isLiked ? "thumbs-up" : "thumbs-up-outline"}
            />
            <Icon
              size={30}
              onPress={handleDisLike}
              color={isDisLiked ? colors.status.error._200 : undefined}
              name={isDisLiked ? "thumbs-down" : "thumbs-down-outline"}
              style={{ marginRight: "auto" }}
            />
          </FooterLeftIcons>

          <FooterLeftText>10 likes | 5 dislikes</FooterLeftText>
        </FooterLeft>

        <Icon size={30} name="refresh" />
      </Footer>
    </Container>
  );
}
