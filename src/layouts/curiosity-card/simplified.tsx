import {
  Container,
  Content,
  Footer,
  FooterLeft,
  FooterLeftText,
  Title,
} from "./styles";
import { Props } from "./types";

export function CuriosityCardSimplified({ title, content, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Footer>
        <FooterLeft>
          <FooterLeftText>10 likes | 5 dislikes</FooterLeftText>
        </FooterLeft>
      </Footer>
    </Container>
  );
}
