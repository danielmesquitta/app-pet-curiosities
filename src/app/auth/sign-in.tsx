import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { AuthHeader } from "@/src/layouts/auth-header";
import { Wrapper } from "@/src/layouts/wrapper";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Container, Content, Footer, Form, SubTitle } from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Container>
        <Content>
          <AuthHeader />

          <Form>
            <SubTitle>Access your account</SubTitle>
            <Input
              value={email}
              onChangeText={setEmail}
              icon="envelope"
              placeholder="E-mail"
              name="email"
            />
            <Input
              value={password}
              onChangeText={setPassword}
              icon="lock"
              placeholder="Password"
              name="password"
            />
            <Button onPress={() => {}}>Login</Button>
          </Form>
        </Content>

        <Footer>
          <SubTitle>Don't have an account?</SubTitle>
          <Link href="/auth/sign-up" asChild>
            <Button appearance="secondary" onPress={() => {}}>
              Create account
            </Button>
          </Link>
        </Footer>
      </Container>
    </Wrapper>
  );
}
