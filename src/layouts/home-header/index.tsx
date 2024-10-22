import { Container, Content, Icon, Text } from "./styles";

export function HomeHeader() {
  return (
    <Container>
      <Content>
        <Icon size={20} name="fire-flame-simple" />
        <Text>104</Text>
      </Content>

      <Content>
        <Icon size={20} name="star" />
        <Text>5250</Text>
      </Content>

      <Content>
        <Icon size={20} name="dice" />
        <Text>0</Text>
      </Content>
    </Container>
  );
}
