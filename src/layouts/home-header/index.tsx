import { colors } from "@/theme";
import { Container, Content, FontAwesomeIcon, Icon, Text } from "./styles";

export function HomeHeader() {
  return (
    <Container>
      <Content>
        <Icon color={colors.status.warning._200} size={20} name="flame" />
        <Text>365</Text>
      </Content>

      <Content>
        <FontAwesomeIcon
          color={colors.status.warning._200}
          size={20}
          name="coins"
        />
        <Text>5.2k</Text>
      </Content>

      <Content>
        <Icon color={colors.status.warning._200} size={20} name="star" />
        <Text>1.5k</Text>
      </Content>
    </Container>
  );
}
