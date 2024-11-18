import { Container as ContainerLayout } from "@/layouts/container";
import styled from "styled-components/native";

export const Container = styled(ContainerLayout)`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary._100};
  gap: 20px;
`;

export const Content = styled.View`
  flex: 1;
`;
