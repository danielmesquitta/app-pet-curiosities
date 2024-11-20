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

            <Link href="/onboarding" asChild>
              <Button>Get started</Button>
            </Link>

            <Link href="/home/curiosities" asChild>
              <Button appearance="secondary">I already have an account</Button>
            </Link>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
}
