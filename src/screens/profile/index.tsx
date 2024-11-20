import { Button } from "@/components/button";
import { colors } from "@/theme";
import { FlatList } from "react-native";
import {
  Container,
  FollowsContainer,
  Header,
  HeaderContainer,
  HeaderContent,
  HeaderSubTitle,
  HeaderTitle,
  Picture,
  StatisticsCard,
  StatisticsCardContent,
  StatisticsCardIcon,
  StatisticsCardText,
  StatisticsCardTitle,
  StatisticsContainer,
  StatisticsTitle,
} from "./styles";

const data = [
  {
    id: "0",
    title: "365",
    content: "Day streak",
  },
  {
    id: "1",
    title: "36.5k",
    content: "Total XP",
  },
  {
    id: "2",
    title: "5.2k",
    content: "Gold",
  },
  {
    id: "3",
    title: "Emerald",
    content: "League",
  },
];

export function Profile() {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Picture source={{ uri: "https://i.pravatar.cc/295" }} />
          <HeaderContent>
            <HeaderTitle>Daniel Mesquita</HeaderTitle>
            <HeaderSubTitle>@danielmesquitta</HeaderSubTitle>
          </HeaderContent>
        </Header>
        <FollowsContainer>
          <Button appearance="tertiary">95 following</Button>
          <Button appearance="tertiary">205 followers</Button>
        </FollowsContainer>
        <Button
          icon={{ name: "user-plus", size: 16 }}
          size="small"
          appearance="primary"
        >
          Add friends
        </Button>
      </HeaderContainer>

      <StatisticsContainer>
        <StatisticsTitle>Statistics</StatisticsTitle>

        <FlatList
          data={data}
          numColumns={2}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={Statistics}
          keyExtractor={(item) => item.id}
          style={{ marginLeft: -4, marginRight: -4 }}
        />
      </StatisticsContainer>
    </Container>
  );
}

function Statistics({ item }: { item: (typeof data)[0] }) {
  const iconOptions = {
    "0": "fire",
    "1": "star",
    "2": "coins",
    "3": "trophy",
  };

  const iconColors = {
    "0": colors.status.error._300,
    "1": colors.primary._400,
    "2": colors.status.warning._200,
    "3": colors.primary._500,
  };

  return (
    <StatisticsCard>
      <StatisticsCardIcon
        version={item.id === "1" ? "FontAwesome" : "FontAwesome6"}
        name={iconOptions[item.id as keyof typeof iconOptions]}
        color={iconColors[item.id as keyof typeof iconColors]}
        size={40}
      />

      <StatisticsCardContent>
        <StatisticsCardTitle>{item.title}</StatisticsCardTitle>
        <StatisticsCardText>{item.content}</StatisticsCardText>
      </StatisticsCardContent>
    </StatisticsCard>
  );
}
