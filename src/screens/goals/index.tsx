import { Button } from "@/components/button";
import { Select } from "@/components/select";
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
    text: "I'm a busy person<br/>1 min / day",
  },
  {
    id: "1",
    text: "I have some time<br/>3 min / day",
  },
  {
    id: "2",
    text: "I'm a pet lover<br/>5 min / day",
  },
  {
    id: "3",
    text: "I'm passionate about pets<br/>10 min / day",
  },
];

export function Goals() {
  const { progress } = useLocalSearchParams();

  const { setProgress } = useOnboarding();

  const [choice, setBreed] = useState<Item | null>(null);

  useEffect(() => {
    setProgress(Number(progress));
  }, []);

  return (
    <Container>
      <OnboardingHeader
        title="Set your goal"
        subtitle="How much time will you spend learning more about your pet?"
      />

      <Select
        numColumns={1}
        items={data}
        onSelect={setBreed}
        style={{ marginTop: "20%" }}
      />

      <Footer>
        <FooterContent>
          <FooterText>{!choice && "Choose an option to continue"}</FooterText>
        </FooterContent>

        <Link disabled={!choice} href="/home" asChild>
          <Button disabled={!choice} style={{ flex: 1 }}>
            Continue
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}
