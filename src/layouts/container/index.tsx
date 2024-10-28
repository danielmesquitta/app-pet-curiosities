import React from "react";
import { StyledContainer } from "./styles";
import { Props } from "./types";

export const Container = ({ children, ...rest }: Props) => {
  return (
    <StyledContainer enabled {...rest}>
      {children}
    </StyledContainer>
  );
};
