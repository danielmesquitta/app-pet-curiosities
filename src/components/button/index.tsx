import React from "react";

import { Container, Icon, Text } from "./styles";
import { Props } from "./types";

export function Button({
  icon,
  size = "medium",
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
      size={size}
      {...rest}
    >
      {icon && <Icon {...icon} />}
      <Text appearance={appearance} disabled={disabled} size={size}>
        {children}
      </Text>
    </Container>
  );
}
