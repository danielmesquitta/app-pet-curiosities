import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { Item } from "@/components/select/types";
import { useState } from "react";
import {
  Container,
  Footer,
  FooterContent,
  FooterText,
  Header,
  HeaderSubTitle,
  HeaderTitle,
} from "./styles";

const data: Item[] = [
  {
    id: "0",
    image: require("@assets/images/pets/dogs/beagle.png"),
  },
  {
    id: "1",
    image: require("@assets/images/pets/dogs/chihuahua.png"),
  },
  {
    id: "2",
    image: require("@assets/images/pets/dogs/shih-tzu.png"),
  },
  {
    id: "3",
    image: require("@assets/images/pets/dogs/pit-bull.png"),
  },
];

export function ImageQuiz() {
  const [answer, setAnswer] = useState<Item | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  function handleAnswer() {
    setIsAnswered(true);
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Quiz</HeaderTitle>
        <HeaderSubTitle>
          Which image corresponds to the Shih Tzu breed?
        </HeaderSubTitle>
      </Header>

      <Select
        scrollEnabled={false}
        numColumns={2}
        items={data}
        onSelect={setAnswer}
        quiz={{
          correctId: "2",
          isAnswered,
        }}
      />

      <Footer>
        <FooterContent>
          {!answer && <FooterText>Choose your answer</FooterText>}
        </FooterContent>

        <Button onPress={handleAnswer} disabled={!answer} style={{ flex: 1 }}>
          {isAnswered ? "Next" : "Answer"}
        </Button>
      </Footer>
    </Container>
  );
}
