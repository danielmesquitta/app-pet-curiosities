import React from "react";
import { ScrollView, ViewProps } from "react-native";
import { Container } from "./styles";

export const Wrapper = ({ children, ...rest }: ViewProps) => {
  return (
    <Container enabled {...rest}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {children}
      </ScrollView>
    </Container>
  );
};
