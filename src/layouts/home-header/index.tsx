import { colors } from "@/src/theme";
import { Container, Content, FontAwesomeIcon, Icon, Text } from "./styles";

export function HomeHeader() {
  return (
    <Container>
      <Content>
        <FontAwesomeIcon
          color={colors.status.warning._200}
          size={20}
          name="coins"
        />
        <Text>5250</Text>
      </Content>

      <Content>
        <Icon color={colors.status.warning._200} size={20} name="star" />
        <Text>800 XP</Text>
      </Content>
    </Container>
  );
}
