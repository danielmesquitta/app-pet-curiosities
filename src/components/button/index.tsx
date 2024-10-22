import React from "react";

import { Container, Text } from "./styles";
import { Props } from "./types";

export const Button: React.FC<Props> = ({ children, appearance, ...rest }) => (
  <Container appearance={appearance} {...rest}>
    <Text appearance={appearance}>{children}</Text>
  </Container>
);
