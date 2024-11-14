import React from "react";

import { Container, Icon, Text } from "./styles";
import { Props } from "./types";

export function Button({
  icon,
  iconSize = 20,
  children,
  appearance,
  disabled,
  ...rest
}: Props) {
  return (
    <Container
      appearance={appearance}
      disabled={disabled}
      activeOpacity={0.7}
      {...rest}
    >
      {icon && <Icon size={iconSize} name={icon} />}
      <Text appearance={appearance} disabled={disabled}>
        {children}
      </Text>
    </Container>
  );
}
