import { Icon as IconComponent } from "@/components/icon";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary._100};
`;

export const HeaderContainer = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.primary._200};
  padding-bottom: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  gap: 16px;
  padding-bottom: 20px;
`;

export const Picture = styled.Image`
  object-fit: cover;
  width: 72px;
  height: 72px;
  border-radius: 99px;
`;

export const HeaderContent = styled.View`
  gap: 4px;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._600};
`;

export const HeaderSubTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary._600};
`;

export const FollowsContainer = styled.View`
  flex-direction: row;
  gap: 32px;
`;

export const StatisticsContainer = styled.View`
  padding: 20px 0;
`;

export const StatisticsTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._600};
  margin-bottom: 20px;
`;

export const StatisticsCard = styled.View`
  background-color: ${({ theme }) => theme.colors.primary._200};
  padding: 20px 12px;
  border-radius: 8px;
  margin: 4px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-color: ${({ theme }) => theme.colors.primary._300};
  border-width: 1px;
`;

export const StatisticsCardIcon = styled(IconComponent)``;

export const StatisticsCardContent = styled.View``;

export const StatisticsCardTitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._600};
`;

export const StatisticsCardText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary._600};
`;
