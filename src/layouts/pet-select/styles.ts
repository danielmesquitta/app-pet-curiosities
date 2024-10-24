import styled from "styled-components/native";
import { CardProps } from "./types";

export const Container = styled.View`
  flex: 1;
`;

export const Card = styled.TouchableOpacity<CardProps>`
  flex: 1;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.status.success._100 : theme.colors.primary._200};
  max-width: 33%;
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
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.status.success._200 : theme.colors.primary._200};
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
