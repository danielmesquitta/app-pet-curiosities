import styled from "styled-components/native";
import { ProgressProps } from "./types";

export const Container = styled.View`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary._300};
`;

export const Progress = styled.View<ProgressProps>`
  width: ${({ progress }) => `${progress}%`};
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.status.success._200};
`;
