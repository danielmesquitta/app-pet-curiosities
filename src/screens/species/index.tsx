import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { Item } from "@/components/select/types";
import { useOnboarding } from "@/hooks/onboarding";
import { OnboardingHeader } from "@/layouts/onboarding-header";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FooterContent, FooterText, FooterTitle } from "../breeds/styles";
import { Container, Footer } from "./styles";

const data: Item[] = [
  {
    id: "0",
    text: "Cat",
    image: require("@assets/images/pets/cats/ragdoll.png"),
  },
  {
    id: "1",
    text: "Dog",
    image: require("@assets/images/pets/dogs/golden-retriever.png"),
  },
];

export function Species() {
  const { progress } = useLocalSearchParams();
  const { setProgress } = useOnboarding();

  useEffect(() => {
    setProgress(Number(progress));
  }, []);

  const [specie, setBreed] = useState<Item | null>(null);

  return (
    <Container>
      <OnboardingHeader
        title="Pick your pet"
        subtitle="Select the pet you want to know more about!"
      />

      <Select
        numColumns={2}
        items={data}
        onSelect={setBreed}
        scrollEnabled={false}
        style={{ marginTop: "20%" }}
      />

      <Footer>
        <FooterContent>
          {specie && <FooterTitle>Your pet:</FooterTitle>}
          <FooterText>
            {specie?.text || "Choose a specie to continue"}
          </FooterText>
        </FooterContent>

        <Link disabled={!specie} href="/onboarding/breeds" asChild>
          <Button disabled={!specie} style={{ flex: 1 }}>
            Continue
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}
