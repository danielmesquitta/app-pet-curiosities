import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { AuthHeader } from "@/src/layouts/auth-header";
import { Wrapper } from "@/src/layouts/wrapper";
import { Link } from "expo-router";
import React from "react";
import { Container, Content, Footer, Form, SubTitle } from "./styles";

export default function SignUp() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <AuthHeader />

          <Form>
            <SubTitle>Create an account</SubTitle>
            <Input icon="user" placeholder="Name" name="name" />
            <Input icon="envelope" placeholder="E-mail" name="email" />
            <Input icon="lock" placeholder="Password" name="password" />
            <Input
              icon="lock"
              placeholder="Confirm password"
              name="passwordConfirmation"
            />
            <Button onPress={() => {}}>Sign up</Button>
          </Form>
        </Content>

        <Footer>
          <SubTitle>Already registered?</SubTitle>
          <Link href="/auth" asChild>
            <Button appearance="secondary" onPress={() => {}}>
              Sign in
            </Button>
          </Link>
        </Footer>
      </Container>
    </Wrapper>
  );
}
