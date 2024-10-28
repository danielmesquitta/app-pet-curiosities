import { Container } from "@/src/layouts/container";
import React from "react";
import { ScrollView } from "react-native";
import { Props } from "./types";

export const Wrapper = ({ children, scrollViewProps, ...rest }: Props) => {
  return (
    <Container enabled {...rest}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    </Container>
  );
};
