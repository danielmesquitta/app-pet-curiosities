import { Image } from "react-native";
import { Container, SubTitle, Title } from "./styles";

export const AuthHeader = () => {
  return (
    <Container>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require("@/assets/images/logo.png")}
      />
      <Title>Pet Daily Curiosities</Title>
      <SubTitle>Know a bit more about your pet each day</SubTitle>
    </Container>
  );
};
