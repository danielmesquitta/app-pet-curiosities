import { Button } from "@/components/button";
import { AuthHeader } from "@/layouts/auth-header";
import { Wrapper } from "@/layouts/wrapper";
import { Link } from "expo-router";
import React from "react";
import { Container, Content, Form, SubTitle } from "./styles";

export function SocialSignIn() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <AuthHeader />

          <Form>
            <SubTitle>Join a community of pet lovers!</SubTitle>

            <Link href="/onboarding/paywall" asChild>
              <Button onPress={() => {}}>Get started</Button>
            </Link>

            <Link href="/home" asChild>
              <Button appearance="secondary" onPress={() => {}}>
                I already have an account
              </Button>
            </Link>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
}
