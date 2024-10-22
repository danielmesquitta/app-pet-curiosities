import { Button } from "@/src/components/button";
import Input from "@/src/components/input";
import { Wrapper } from "@/src/components/wrapper";
import { Link } from "expo-router";
import React from "react";
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
