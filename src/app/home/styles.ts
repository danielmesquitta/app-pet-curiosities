import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary._050};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  flex: 1;
  justify-content: center;
`;
