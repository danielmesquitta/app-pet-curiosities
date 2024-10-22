import { Button } from "@/src/components/button";
import Input from "@/src/components/input";
import { Wrapper } from "@/src/components/wrapper";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Footer,
  Form,
  Header,
  SubTitle,
  Title,
} from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Container>
        <Content>
          <Header>
            <Image
              style={{
                width: 200,
                height: 200,
              }}
              source={require("@/assets/images/logo.png")}
            />
            <Title>Pet Daily Curiosities</Title>
            <SubTitle>Know a bit more about your pet each day</SubTitle>
          </Header>

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
