import { colors } from "@/theme";
import styled, { css } from "styled-components/native";
import { CardProps } from "./types";

const backgroundOptions = {
  primary: colors.primary._200,
  success: colors.status.success._100,
  error: colors.status.error._100,
};

const borderOptions = {
  primary: colors.primary._200,
  success: colors.status.success._200,
  error: colors.status.error._200,
};

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.TouchableOpacity<CardProps>`
  flex: 1;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  padding: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 8px;
  border-width: 2px;
  border-color: ${({ appearance }) => borderOptions[appearance || "primary"]};
  background-color: ${({ appearance }) =>
    backgroundOptions[appearance || "primary"]};
  ${({ type }) =>
    type === "image" &&
    css`
      height: 200px;
      align-items: center;
    `}
`;

export const CardImage = styled.Image`
  width: 100%;
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
`;

export const CardTextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: start;
`;
