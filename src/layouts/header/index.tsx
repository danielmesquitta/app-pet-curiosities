import { Container, SubTitle, Title } from "./styles";
import { Props } from "./types";

export function Header({ title, subtitle, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
