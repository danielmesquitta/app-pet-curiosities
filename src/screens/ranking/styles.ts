import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { RankingPositionCardProps } from "./types";

export const Container = styled.View`
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme, color }) => color || theme.colors.primary._500};
`;

export const RankingPositionCard = styled.View<RankingPositionCardProps>`
  flex-direction: row;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme, isCurrentUser }) =>
    isCurrentUser ? theme.colors.primary._100 : "transparent"};
`;

export const RankingPositionCardImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  object-fit: cover;
`;

export const RankingPositionCardPlace = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const RankingPositionCardName = styled.Text`
  width: 50%;
  line-height: 22px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const RankingPositionCardXP = styled.Text`
  line-height: 22px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LeaguesContainer = styled.View`
  margin-bottom: 20px;
`;

export const LeagueCard = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary._100};
  border-color: ${({ theme }) => theme.colors.primary._200};
  height: 96px;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-width: 2px;
`;

export const LeagueCardImage = styled.Image`
  width: 100%;
  max-width: 64px;
  max-height: 64px;
  object-fit: contain;
`;

export const LeaguesHeader = styled.View`
  margin-bottom: 32px;
`;

export const LeaguesHeaderTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const LeaguesHeaderText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
