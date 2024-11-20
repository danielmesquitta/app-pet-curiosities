import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { Item } from "@/components/select/types";
import { Header } from "@/layouts/header";
import { colors } from "@/theme";
import { useState } from "react";
import { negativeFeedbacks, positiveFeedbacks } from "./data";
import { Container, Footer, FooterContent, FooterText, Icon } from "./styles";

const imageData: Item[] = [
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

const textData: Item[] = [
  {
    id: "0",
    text: "Banana",
  },
  {
    id: "1",
    text: "Eggs",
  },
  {
    id: "2",
    text: "Chocolate",
  },
  {
    id: "3",
    text: "Carrot",
  },
];

export function Quiz() {
  const [answer, setAnswer] = useState<Item | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [random, setRandom] = useState(Math.random());

  const quiz = {
    correctId: "2",
    isAnswered,
  };

  function handleAnswer() {
    setIsAnswered(true);
    setIsCorrect(answer?.id === quiz.correctId);
  }

  function handleNext() {}

  return (
    <Container>
      <Header
        title="Quiz"
        subtitle="Which image corresponds to the Shih Tzu breed?"
      />

      {random > 0.5 ? (
        <Select
          appearance="secondary"
          scrollEnabled={false}
          numColumns={2}
          items={imageData}
          onSelect={setAnswer}
          quiz={quiz}
        />
      ) : (
        <Select
          appearance="secondary"
          scrollEnabled={false}
          items={textData}
          onSelect={setAnswer}
          quiz={quiz}
        />
      )}

      <Footer>
        <FooterContent>
          {!answer && <FooterText>Choose your answer</FooterText>}
          {isAnswered && isCorrect && (
            <>
              <Icon
                name="check"
                version="FontAwesome"
                size={25}
                color={colors.status.success._300}
              />
              <FooterText color={colors.status.success._300}>
                {
                  positiveFeedbacks[
                    Math.floor(Math.random() * positiveFeedbacks.length)
                  ]
                }
              </FooterText>
            </>
          )}
          {isAnswered && !isCorrect && (
            <>
              <Icon
                name="close"
                version="FontAwesome"
                size={25}
                color={colors.status.error._300}
              />
              <FooterText color={colors.status.error._300}>
                {
                  negativeFeedbacks[
                    Math.floor(Math.random() * negativeFeedbacks.length)
                  ]
                }
              </FooterText>
            </>
          )}
        </FooterContent>

        <Button
          onPress={isAnswered ? handleNext : handleAnswer}
          disabled={!answer}
          style={{ flex: 1 }}
        >
          {isAnswered ? "Next" : "Answer"}
        </Button>
      </Footer>
    </Container>
  );
}
