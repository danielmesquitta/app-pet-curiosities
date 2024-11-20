import { Container as ContainerLayout } from "@/layouts/container";
import { CuriosityCard as CuriosityCardLayout } from "@/layouts/curiosity-card";
import { Header } from "@/layouts/header";
import { HomeHeader } from "@/layouts/home-header";
import { FlatList } from "react-native";
import { Container } from "./styles";

const data = [
  {
    id: "0",
    title: "O que é a Liga?",
    content:
      "A Liga é um sistema de classificação que separa os jogadores em diferentes níveis de acordo com a quantidade de experiência que eles possuem.",
  },
  {
    id: "1",
    title: "Como subir de Liga?",
    content:
      "Para subir de Liga, você precisa acumular experiência. Quanto mais experiência você tiver, mais rápido você subirá de Liga.",
  },
  {
    id: "2",
    title: "Como ganhar experiência?",
    content:
      "Você pode ganhar experiência jogando partidas. Quanto mais partidas você jogar, mais experiência você ganhará.",
  },
  {
    id: "3",
    title: "O que é a Liga?",
    content:
      "A Liga é um sistema de classificação que separa os jogadores em diferentes níveis de acordo com a quantidade de experiência que eles possuem.",
  },
  {
    id: "4",
    title: "Como subir de Liga?",
    content:
      "Para subir de Liga, você precisa acumular experiência. Quanto mais experiência você tiver, mais rápido você subirá de Liga.",
  },
  {
    id: "5",
    title: "Como ganhar experiência?",
    content:
      "Você pode ganhar experiência jogando partidas. Quanto mais partidas você jogar, mais experiência você ganhará.",
  },
  {
    id: "6",
    title: "O que é a Liga?",
    content:
      "A Liga é um sistema de classificação que separa os jogadores em diferentes níveis de acordo com a quantidade de experiência que eles possuem.",
  },
];

function CuriosityCard({ item }: { item: (typeof data)[0] }) {
  return (
    <CuriosityCardLayout
      title={item.title}
      content={item.content}
      type="simplified"
    />
  );
}

export function History() {
  return (
    <ContainerLayout>
      <HomeHeader />

      <Container>
        <Header
          title="History"
          subtitle="Here, you'll find every tip, trick, fun fact, and curiosity you've ever come across about your pet."
        />

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={CuriosityCard}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </ContainerLayout>
  );
}
