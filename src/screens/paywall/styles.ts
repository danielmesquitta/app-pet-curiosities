import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.View`
  margin-top: 40px;
  gap: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Text = styled.Text`
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const FooterContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SemiCircle = styled.View`
  width: 25%;
  transform: scaleX(4);
  height: 30px;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
  background-color: ${({ theme }) => theme.colors.gray._000};
  margin-top: auto;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray._000};
  padding: 20px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const FooterBoldText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary._600};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const Icon = styled(Ionicons)`
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.status.success._300};
`;
