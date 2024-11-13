import { Container as ContainerLayout } from "@/src/layouts/container";
import { HomeHeader } from "@/src/layouts/home-header";
import { colors } from "@/src/theme";
import { capitalize } from "@/src/utils/capitalize";
import { useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import {
  Container,
  Icon,
  LeagueCard,
  LeagueCardImage,
  LeaguesContainer,
  LeaguesHeader,
  LeaguesHeaderText,
  LeaguesHeaderTitle,
  RankingPositionCard,
  RankingPositionCardImage,
  RankingPositionCardName,
  RankingPositionCardPlace,
  RankingPositionCardXP,
} from "./styles";
import { LeagueName, LeagueProps, Props, RankingPositionProps } from "./types";

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

const positions: RankingPositionProps[] = [
  {
    position: 1,
    user: { avatar: "https://i.pravatar.cc/280", name: "John Doe" },
    xp: 1000,
    zone: "promotion",
  },
  {
    position: 2,
    user: { avatar: "https://i.pravatar.cc/281", name: "John Doe" },
    xp: 950,
    zone: "promotion",
  },
  {
    position: 3,
    user: { avatar: "https://i.pravatar.cc/282", name: "John Doe" },
    xp: 900,
    zone: "promotion",
  },
  {
    position: 4,
    user: { avatar: "https://i.pravatar.cc/283", name: "John Doe" },
    xp: 850,
    zone: "promotion",
  },
  {
    position: 5,
    user: { avatar: "https://i.pravatar.cc/284", name: "John Doe" },
    xp: 800,
    isCurrentUser: true,
  },
  {
    position: 6,
    user: { avatar: "https://i.pravatar.cc/285", name: "John Doe" },
    xp: 750,
  },
  {
    position: 7,
    user: { avatar: "https://i.pravatar.cc/286", name: "John Doe" },
    xp: 650,
  },
  {
    position: 8,
    user: { avatar: "https://i.pravatar.cc/287", name: "John Doe" },
    xp: 600,
  },
  {
    position: 9,
    user: { avatar: "https://i.pravatar.cc/288", name: "John Doe" },
    xp: 550,
  },
  {
    position: 10,
    user: { avatar: "https://i.pravatar.cc/289", name: "John Doe" },
    xp: 500,
  },
  {
    position: 11,
    user: { avatar: "https://i.pravatar.cc/290", name: "John Doe" },
    xp: 500,
  },
  {
    position: 12,
    user: { avatar: "https://i.pravatar.cc/291", name: "John Doe" },
    xp: 500,
  },
  {
    position: 13,
    user: { avatar: "https://i.pravatar.cc/292", name: "John Doe" },
    xp: 500,
  },
  {
    position: 14,
    user: { avatar: "https://i.pravatar.cc/293", name: "John Doe" },
    xp: 500,
  },
  {
    position: 15,
    user: { avatar: "https://i.pravatar.cc/294", name: "John Doe" },
    xp: 500,
  },
  {
    position: 16,
    user: { avatar: "https://i.pravatar.cc/295", name: "John Doe" },
    xp: 400,
    zone: "demotion",
  },
  {
    position: 17,
    user: { avatar: "https://i.pravatar.cc/296", name: "John Doe" },
    xp: 300,
    zone: "demotion",
  },
  {
    position: 18,
    user: { avatar: "https://i.pravatar.cc/297", name: "John Doe" },
    xp: 200,
    zone: "demotion",
  },
  {
    position: 19,
    user: { avatar: "https://i.pravatar.cc/298", name: "John Doe" },
    xp: 100,
    zone: "demotion",
  },
];

function League({ item }: { item: LeagueProps }) {
  return (
    <LeagueCard>
      {item.image ? (
        <LeagueCardImage source={item.image} />
      ) : (
        <Icon size={64} name="lock-closed" color={colors.gray._200} />
      )}
    </LeagueCard>
  );
}

function LeagueSeparator() {
  return <View style={{ width: 16 }} />;
}

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
      ItemSeparatorComponent={LeagueSeparator}
      keyExtractor={(item) => item.id}
    />
  );
}

function RankingPosition({ item }: { item: RankingPositionProps }) {
  return (
    <RankingPositionCard isCurrentUser={item.isCurrentUser}>
      <RankingPositionCardPlace>{item.position}</RankingPositionCardPlace>
      <RankingPositionCardImage source={{ uri: item.user.avatar }} />
      <RankingPositionCardName>{item.user.name}</RankingPositionCardName>
      <RankingPositionCardXP>{item.xp} XP</RankingPositionCardXP>
    </RankingPositionCard>
  );
}

function RankingPositions() {
  return (
    <FlatList
      data={positions}
      showsVerticalScrollIndicator={false}
      renderItem={RankingPosition}
      keyExtractor={(item) => item.position.toString()}
    />
  );
}

export function Ranking() {
  const [league, setLeague] = useState<LeagueName>("ruby");

  return (
    <ContainerLayout background={colors.primary._050}>
      <HomeHeader />

      <Container>
        <LeaguesContainer>
          <LeaguesHeader>
            <LeaguesHeaderTitle>{capitalize(league)} League</LeaguesHeaderTitle>
            <LeaguesHeaderText>
              You're 15XP from the promotion zone!
            </LeaguesHeaderText>
          </LeaguesHeader>

          <Leagues league={league} />
        </LeaguesContainer>

        <RankingPositions />
      </Container>
    </ContainerLayout>
  );
}
