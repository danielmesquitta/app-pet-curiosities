import { Container as ContainerLayout } from "@/src/layouts/container";
import { HomeHeader } from "@/src/layouts/home-header";
import { colors } from "@/src/theme";
import { capitalize } from "@/src/utils/capitalize";
import { useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import {
  Card,
  CardImage,
  Container,
  Icon,
  LeaguesHeader,
  LeaguesHeaderText,
  LeaguesHeaderTitle,
} from "./styles";
import { LeagueName, LeagueProps, Props } from "./types";

const screenWidth = Dimensions.get("window").width;
const innerWidth = screenWidth - 40;

const leagues: LeagueProps[] = [
  {
    id: "bronze",
    name: "bronze",
    image: require("@/assets/images/leagues/bronze.png"),
  },
  {
    id: "silver",
    name: "silver",
    image: require("@/assets/images/leagues/silver.png"),
  },
  {
    id: "gold",
    name: "gold",
    image: require("@/assets/images/leagues/gold.png"),
  },
  {
    id: "sapphire",
    name: "sapphire",
    image: require("@/assets/images/leagues/sapphire.png"),
  },
  {
    id: "ruby",
    name: "ruby",
    image: require("@/assets/images/leagues/ruby.png"),
  },
  {
    id: "emerald",
    name: "emerald",
    image: require("@/assets/images/leagues/emerald.png"),
  },
  {
    id: "diamond",
    name: "diamond",
    image: require("@/assets/images/leagues/diamond.png"),
  },
];

const League = ({ item }: { item: LeagueProps }) => {
  return (
    <Card>
      {item.image ? (
        <CardImage source={item.image} />
      ) : (
        <Icon size={64} name="lock-closed" color={colors.gray._200} />
      )}
    </Card>
  );
};

function Leagues({ league }: Props) {
  const index = leagues.findIndex(({ name }) => name === league);

  const notVisibleLeagues = new Array(leagues.length - index - 1)
    .fill("locked")
    .map((name, index) => ({
      id: name + index,
      name,
      image: null,
    })) as LeagueProps[];

  const visibleLeagues = leagues.splice(0, index + 1);

  const data = [...visibleLeagues, ...notVisibleLeagues];

  const itemWidth = 96 + 16;

  const offset =
    itemWidth * index > innerWidth / 2 - itemWidth / 2
      ? itemWidth * index - innerWidth / 2 + itemWidth / 2
      : 0;

  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={League}
      horizontal
      contentOffset={{ x: offset, y: 0 }}
      ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export function Ranking() {
  const [league, setLeague] = useState<LeagueName>("ruby");

  return (
    <ContainerLayout background={colors.primary._050}>
      <HomeHeader />

      <Container>
        <LeaguesHeader>
          <LeaguesHeaderTitle>{capitalize(league)} League</LeaguesHeaderTitle>
          <LeaguesHeaderText>
            You're 15XP from the promotion zone!
          </LeaguesHeaderText>
        </LeaguesHeader>

        <Leagues league={league} />
      </Container>
    </ContainerLayout>
  );
}
