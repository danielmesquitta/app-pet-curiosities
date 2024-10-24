import React from "react";

import { Container, Icon, Text } from "./styles";
import { Props } from "./types";

export const Button: React.FC<Props> = ({
  icon,
  iconSize = 20,
  children,
  appearance,
  disabled,
  ...rest
}) => (
  <Container appearance={appearance} disabled={disabled} {...rest}>
    {icon && <Icon size={iconSize} name={icon} />}
    <Text appearance={appearance} disabled={disabled}>
      {children}
    </Text>
  </Container>
);
