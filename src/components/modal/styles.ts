import { Icon as IconComponent } from "@/components/icon";
import { colors } from "@/theme";
import styled, { css } from "styled-components/native";
import { ContentProps } from "./types";

export const Header = styled.View`
  height: 72px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors.primary._100};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary._200};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary._600};
`;

export const Icon = styled(IconComponent).attrs({
  color: colors.primary._600,
})``;

export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
`;

export const Content = styled.View<ContentProps>`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary._100};
  ${({ hasFooter }) =>
    !hasFooter &&
    css`
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    `}
`;

export const Footer = styled.View`
  height: 72px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top-width: 3px;
  border-color: ${({ theme }) => theme.colors.primary._200};
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.primary._100};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
