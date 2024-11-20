import { Icon } from "@/components/icon";
import { Header } from "@/layouts/header";
import { colors } from "@/theme";
import {
  Card,
  CardContent,
  CardText,
  CardTitle,
  Container,
  Section,
  SectionTitle,
} from "./styles";

export function Shop() {
  return (
    <Container>
      <Header title="Shop" subtitle="Buy some cool stuff" />

      <Section>
        <SectionTitle>Streak</SectionTitle>
        <Card>
          <Icon name="shield-halved" size={40} color={colors.gray._300} />
          <CardContent>
            <CardTitle>Streak Guard</CardTitle>
            <CardText>
              Protect your streak if you miss a day of practice. Equip up to 2
              at once
            </CardText>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Power-Ups</SectionTitle>
      </Section>

      <Section>
        <SectionTitle>Gold</SectionTitle>
      </Section>
    </Container>
  );
}
