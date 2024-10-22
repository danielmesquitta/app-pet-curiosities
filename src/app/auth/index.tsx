import { Button } from "@/src/components/button";
import { AuthHeader } from "@/src/layouts/auth-header";
import { Wrapper } from "@/src/layouts/wrapper";
import { Link } from "expo-router";
import React from "react";
import { Container, Content, Form, SubTitle } from "./styles";

export default function SignIn() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <AuthHeader />

          <Form>
            <SubTitle>Join a community of pet lovers!</SubTitle>

            <Link href="/home" asChild>
              <Button icon="google" onPress={() => {}}>
                Continue with Google
              </Button>
            </Link>
            <Link href="/home" asChild>
              <Button
                icon="apple"
                iconSize={25}
                appearance="secondary"
                onPress={() => {}}
              >
                Continue with Apple
              </Button>
            </Link>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  );
}
