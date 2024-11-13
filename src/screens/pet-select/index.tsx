import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Item } from "@/components/select/types";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Container,
  Footer,
  FooterContent,
  FooterText,
  FooterTitle,
  Form,
  Header,
  HeaderSubTitle,
  HeaderTitle,
} from "./styles";

const data: Item[] = [
  {
    id: "0",
    text: "beagle",
    image: require("@assets/images/pets/dogs/beagle.png"),
  },
  {
    id: "1",
    text: "chihuahua",
    image: require("@assets/images/pets/dogs/chihuahua.png"),
  },
  {
    id: "2",
    text: "english springer spaniel",
    image: require("@assets/images/pets/dogs/english-springer-spaniel.png"),
  },
  {
    id: "3",
    text: "pit bull",
    image: require("@assets/images/pets/dogs/pit-bull.png"),
  },
  {
    id: "4",
    text: "saint bernard",
    image: require("@assets/images/pets/dogs/saint-bernard.png"),
  },
  {
    id: "5",
    text: "border collie",
    image: require("@assets/images/pets/dogs/border-collie.png"),
  },
  {
    id: "6",
    text: "corgi",
    image: require("@assets/images/pets/dogs/corgi.png"),
  },
  {
    id: "7",
    text: "french bulldog",
    image: require("@assets/images/pets/dogs/french-bulldog.png"),
  },
  {
    id: "8",
    text: "pomeranian",
    image: require("@assets/images/pets/dogs/pomeranian.png"),
  },
  {
    id: "9",
    text: "shih tzu",
    image: require("@assets/images/pets/dogs/shih-tzu.png"),
  },
  {
    id: "10",
    text: "boxer",
    image: require("@assets/images/pets/dogs/boxer.png"),
  },
  {
    id: "11",
    text: "dachshund",
    image: require("@assets/images/pets/dogs/dachshund.png"),
  },
  {
    id: "12",
    text: "german shepherd",
    image: require("@assets/images/pets/dogs/german-shepherd.png"),
  },
  {
    id: "13",
    text: "poodle",
    image: require("@assets/images/pets/dogs/poodle.png"),
  },
  {
    id: "14",
    text: "siberian husky",
    image: require("@assets/images/pets/dogs/siberian-husky.png"),
  },
  {
    id: "15",
    text: "bulldog",
    image: require("@assets/images/pets/dogs/bulldog.png"),
  },
  {
    id: "16",
    text: "dalmatian",
    image: require("@assets/images/pets/dogs/dalmatian.png"),
  },
  {
    id: "17",
    text: "golden retriever",
    image: require("@assets/images/pets/dogs/golden-retriever.png"),
  },
  {
    id: "18",
    text: "pug",
    image: require("@assets/images/pets/dogs/pug.png"),
  },
  {
    id: "19",
    text: "staffordshire terrier",
    image: require("@assets/images/pets/dogs/staffordshire-terrier.png"),
  },
  {
    id: "20",
    text: "cavalier king charles spaniel",
    image: require("@assets/images/pets/dogs/cavalier-king-charles-spaniel.png"),
  },
  {
    id: "21",
    text: "english cocker spaniel",
    image: require("@assets/images/pets/dogs/english-cocker-spaniel.png"),
  },
  {
    id: "22",
    text: "great dane",
    image: require("@assets/images/pets/dogs/great-dane.png"),
  },
  {
    id: "23",
    text: "rottweiler",
    image: require("@assets/images/pets/dogs/rottweiler.png"),
  },
  {
    id: "24",
    text: "yorkshire terrier",
    image: require("@assets/images/pets/dogs/yorkshire-terrier.png"),
  },
];

export function PetSelect() {
  const [pet, setPet] = useState<Item | null>(null);
  const [search, setSearch] = useState("");

  function handleSearch(text: string) {
    setSearch(text);
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Choose your pet</HeaderTitle>
        <HeaderSubTitle>
          Select the pet breed you want to know more about!
        </HeaderSubTitle>
      </Header>

      <Form>
        <Input
          icon="search"
          name="search"
          placeholder="Search for a pet breed"
          value={search}
          onChangeText={handleSearch}
        />
      </Form>

      <Select numColumns={2} items={data} onSelect={setPet} search={search} />

      <Footer>
        <FooterContent>
          {pet && <FooterTitle>Your pet:</FooterTitle>}
          <FooterText>{pet?.text || "Choose a pet to continue"}</FooterText>
        </FooterContent>

        <Link disabled={!pet} href="/home" asChild>
          <Button disabled={!pet} style={{ flex: 1 }}>
            Continue
          </Button>
        </Link>
      </Footer>
    </Container>
  );
}
