import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Props } from "./types";

export const StyledContainer = styled.KeyboardAvoidingView<Props>`
  flex: 1;
  padding-top: ${StatusBar.currentHeight || 0}px;
  background: ${({ background }) => background || "transparent"};
`;
