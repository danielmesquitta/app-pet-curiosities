import { colors } from "@/src/theme";
import { Container, Content, Icon, Text } from "./styles";

export function HomeHeader() {
  return (
    <Container>
      <Content>
        <Icon color={colors.status.error._200} size={20} name="flame" />
        <Text>104</Text>
      </Content>

      <Content>
        <Icon color={colors.primary._300} size={20} name="star" />
        <Text>5250</Text>
      </Content>

      <Content>
        <Icon color={colors.status.info._200} size={20} name="diamond" />
        <Text>0</Text>
      </Content>
    </Container>
  );
}
