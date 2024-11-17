import { Button } from "@/components/button";
import { Wrapper } from "@/layouts/wrapper";
import { colors } from "@/theme";
import * as NavigationBar from "expo-navigation-bar";
import { Link } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image } from "react-native";
import {
  Container,
  ContentContainer,
  Footer,
  FooterBoldText,
  FooterContainer,
  FooterText,
  Icon,
  ImageContainer,
  SemiCircle,
  SubTitle,
  Text,
  TextContainer,
  Title,
} from "./styles";

const imageProportion = 1.635;

export function PayWall() {
  const width = Dimensions.get("screen").width * 0.9;

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(colors.gray._000);
    return () => {
      NavigationBar.setBackgroundColorAsync(colors.primary._200);
    };
  }, []);

  return (
    <>
      <Wrapper
        style={{
          backgroundColor: colors.primary._200,
        }}
      >
        <Container>
          <ImageContainer>
            <Image
              source={require("@assets/images/paywall.png")}
              style={{
                flex: 1,
                width: width,
                height: width / imageProportion,
              }}
            />
          </ImageContainer>

          <Title>Ready to start?</Title>
          <SubTitle>No commitment, cancel anytime.</SubTitle>

          <ContentContainer>
            <TextContainer>
              <Icon size={25} name="checkmark-circle-outline" />
              <Text>Many different curiosities about your pet every day</Text>
            </TextContainer>
            <TextContainer>
              <Icon size={25} name="checkmark-circle-outline" />
              <Text>Quizzes personalized for you</Text>
            </TextContainer>
            <TextContainer>
              <Icon size={25} name="checkmark-circle-outline" />
              <Text>Ranking to compete with your friends</Text>
            </TextContainer>
            <TextContainer>
              <Icon size={25} name="checkmark-circle-outline" />
              <Text>Achievements and trophies for your progress</Text>
            </TextContainer>
          </ContentContainer>
        </Container>

        <FooterContainer>
          <SemiCircle />
          <Footer>
            <FooterText>7-day free trial, then</FooterText>
            <FooterText>
              <FooterBoldText>$19.99 per year</FooterBoldText> ($1.66 per month)
            </FooterText>

            <Link asChild href="/home">
              <Button style={{ marginTop: 20 }}>
                Start my 7-day free trial
              </Button>
            </Link>
          </Footer>
        </FooterContainer>
      </Wrapper>
    </>
  );
}
