import { Icon as IconComponent } from "@/components/icon";
import { colors } from "@/theme";
import styled from "styled-components/native";
import { RankingPositionCardProps } from "./types";

export const Container = styled.View`
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
`;

export const Icon = styled(IconComponent)``;

const cardBackgroundOptions = {
  promotion: colors.status.success._100,
  demotion: colors.status.error._100,
  locked: "transparent",
};

const mineCardBackgroundOptions = {
  promotion: colors.status.success._200,
  demotion: colors.status.error._200,
  locked: colors.primary._200,
};

export const RankingPositionCard = styled.View<RankingPositionCardProps>`
  flex-direction: row;
  height: 70px;
  margin-bottom: 4px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({ zone }) => mineCardBackgroundOptions[zone]};
  background-color: ${({ theme, isCurrentUser, zone }) =>
    isCurrentUser
      ? mineCardBackgroundOptions[zone]
      : cardBackgroundOptions[zone]};
`;

export const RankingPositionCardImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  object-fit: cover;
`;

export const RankingPositionCardPlace = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const RankingPositionCardName = styled.Text`
  width: 50%;
  line-height: 22px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const RankingPositionCardXP = styled.Text`
  line-height: 22px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LeaguesContainer = styled.View`
  margin-bottom: 20px;
`;

export const LeagueCard = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary._200};
  border-color: ${({ theme }) => theme.colors.primary._300};
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
  max-width: 56px;
  max-height: 56px;
  object-fit: contain;
`;
