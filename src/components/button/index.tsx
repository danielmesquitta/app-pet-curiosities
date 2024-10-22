import React from "react";

import { Container, Icon, Text } from "./styles";
import { Props } from "./types";

export const Button: React.FC<Props> = ({
  icon,
  iconSize = 20,
  children,
  appearance,
  ...rest
}) => (
  <Container appearance={appearance} {...rest}>
    {icon && <Icon size={iconSize} name={icon} />}
    <Text appearance={appearance}>{children}</Text>
  </Container>
);
