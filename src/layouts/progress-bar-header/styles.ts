import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { ProgressProps } from "./types";

export const Container = styled.View`
  width: ${Dimensions.get("window").width - 32}px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary._200};
`;

export const Progress = styled.View<ProgressProps>`
  width: ${({ progress }) => `${progress}%`};
  height: 4px;
  background-color: ${({ theme }) => theme.colors.status.success._200};
`;
