import { Container } from "@/layouts/container";
import React from "react";
import { ScrollView } from "react-native";
import { Props } from "./types";

export const Wrapper = ({
  children,
  scrollViewProps,
  enabled = true,
  ...rest
}: Props) => {
  return (
    <Container enabled={enabled} {...rest}>
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
