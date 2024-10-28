import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme, color }) => color || theme.colors.primary._500};
`;

export const Card = styled.View`
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

export const CardImage = styled.Image`
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

export const RankingContainer = styled.View``;
