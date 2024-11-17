import { Button } from "@/components/button";
import { MultiSelect } from "@/components/select";
import { Item } from "@/components/select/types";
import { useOnboarding } from "@/hooks/onboarding";
import { OnboardingHeader } from "@/layouts/onboarding-header";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FooterContent, FooterText } from "../breeds/styles";
import { Container, Footer } from "./styles";

const data: Item[] = [
  {
    id: "0",
    text: "💝 Factors to consider when adopting",
  },
  {
    id: "1",
    text: "🍎 Feeding guidelines and nutrition",
  },
  {
    id: "7",
    text: "☢️ Toxic foods and substances to avoid",
  },
  {
    id: "2",
    text: "🎯 Training tips",
  },
  {
    id: "3",
    text: "⚕️ Common health issues",
  },
  {
    id: "4",
    text: "⌛ Senior pet care",
  },
  {
    id: "5",
    text: "🥎 Toys and activities",
  },
  {
    id: "6",
    text: "🌍 Traveling with your pet",
  },
  {
    id: "8",
    text: "🏛️ History and origin",
  },
];

export function Interests() {
  const { progress } = useLocalSearchParams();
  const { setProgress } = useOnboarding();

  const [interests, setInterests] = useState<Item[]>([]);

  useEffect(() => {
    setProgress(Number(progress));
  }, []);

  return (
    <Container>
      <OnboardingHeader
        title="What are your interests?"
        subtitle="Which topics would you like to learn more about your pet? We will show you content based on your preferences."
      />

      <MultiSelect
        numColumns={1}
        items={data}
        onSelect={setInterests}
        style={{ marginTop: 20 }}
      />

      <Footer>
        <FooterContent>
          <FooterText>
            {!interests.length && "Choose at least an option to continue"}
          </FooterText>
        </FooterContent>

        <Link disabled={!interests.length} href="/onboarding/goals" asChild>
          <Button disabled={!interests.length} style={{ flex: 1 }}>
            Continue
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}
