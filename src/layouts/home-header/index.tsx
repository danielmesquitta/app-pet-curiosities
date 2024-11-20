import { colors } from "@/theme";
import { Container, Content, Icon, Text } from "./styles";

export function HomeHeader() {
  return (
    <Container>
      <Content style={{ justifyContent: "flex-start" }}>
        <Icon color={colors.primary._500} size={20} name="dog" />
        <Text>Shih Tzu</Text>
      </Content>

      <Content style={{ justifyContent: "center" }}>
        <Icon color={colors.status.error._300} size={20} name="fire" />
        <Text>365</Text>
      </Content>

      <Content style={{ justifyContent: "flex-end" }}>
        <Icon color={colors.status.warning._200} size={20} name="coins" />
        <Text>5.2k</Text>
      </Content>
    </Container>
  );
}
