import { colors } from "@/theme";
import styled from "styled-components/native";
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
  background-color: ${({ appearance }) =>
    backgroundOptions[appearance || "primary"]};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  margin: 8px;
  padding-right: 8px;
  padding-left: 8px;
  border-width: 2px;
  border-color: ${({ appearance }) => borderOptions[appearance || "primary"]};
`;

export const CardImage = styled.Image`
  width: 100%;
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
`;

export const CardText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary._500};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;
