import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import { PetSelect } from "@/src/layouts/pet-select";
import { Pet } from "@/src/layouts/pet-select/types";
import { SelectPetHeader } from "@/src/layouts/select-pet-header";
import { Link } from "expo-router";
import { useState } from "react";
import {
  SelectPetContainer,
  SelectPetFooter,
  SelectPetFooterContent,
  SelectPetFooterText,
  SelectPetFooterTitle,
  SelectPetForm,
} from "./styles";

const data = [
  {
    id: "0",
    breed: "beagle",
    image: require("@/assets/images/pets/dogs/beagle.png"),
  },
  {
    id: "1",
    breed: "chihuahua",
    image: require("@/assets/images/pets/dogs/chihuahua.png"),
  },
  {
    id: "2",
    breed: "english springer spaniel",
    image: require("@/assets/images/pets/dogs/english-springer-spaniel.png"),
  },
  {
    id: "3",
    breed: "pit bull",
    image: require("@/assets/images/pets/dogs/pit-bull.png"),
  },
  {
    id: "4",
    breed: "saint bernard",
    image: require("@/assets/images/pets/dogs/saint-bernard.png"),
  },
  {
    id: "5",
    breed: "border collie",
    image: require("@/assets/images/pets/dogs/border-collie.png"),
  },
  {
    id: "6",
    breed: "corgi",
    image: require("@/assets/images/pets/dogs/corgi.png"),
  },
  {
    id: "7",
    breed: "french bulldog",
    image: require("@/assets/images/pets/dogs/french-bulldog.png"),
  },
  {
    id: "8",
    breed: "pomeranian",
    image: require("@/assets/images/pets/dogs/pomeranian.png"),
  },
  {
    id: "9",
    breed: "shih tzu",
    image: require("@/assets/images/pets/dogs/shih-tzu.png"),
    selected: true,
  },
  {
    id: "10",
    breed: "boxer",
    image: require("@/assets/images/pets/dogs/boxer.png"),
  },
  {
    id: "11",
    breed: "dachshund",
    image: require("@/assets/images/pets/dogs/dachshund.png"),
  },
  {
    id: "12",
    breed: "german shepherd",
    image: require("@/assets/images/pets/dogs/german-shepherd.png"),
  },
  {
    id: "13",
    breed: "poodle",
    image: require("@/assets/images/pets/dogs/poodle.png"),
  },
  {
    id: "14",
    breed: "siberian husky",
    image: require("@/assets/images/pets/dogs/siberian-husky.png"),
  },
  {
    id: "15",
    breed: "bulldog",
    image: require("@/assets/images/pets/dogs/bulldog.png"),
  },
  {
    id: "16",
    breed: "dalmatian",
    image: require("@/assets/images/pets/dogs/dalmatian.png"),
  },
  {
    id: "17",
    breed: "golden retriever",
    image: require("@/assets/images/pets/dogs/golden-retriever.png"),
  },
  {
    id: "18",
    breed: "pug",
    image: require("@/assets/images/pets/dogs/pug.png"),
  },
  {
    id: "19",
    breed: "staffordshire terrier",
    image: require("@/assets/images/pets/dogs/staffordshire-terrier.png"),
  },
  {
    id: "20",
    breed: "cavalier king charles spaniel",
    image: require("@/assets/images/pets/dogs/cavalier-king-charles-spaniel.png"),
  },
  {
    id: "21",
    breed: "english cocker spaniel",
    image: require("@/assets/images/pets/dogs/english-cocker-spaniel.png"),
  },
  {
    id: "22",
    breed: "great dane",
    image: require("@/assets/images/pets/dogs/great-dane.png"),
  },
  {
    id: "23",
    breed: "rottweiler",
    image: require("@/assets/images/pets/dogs/rottweiler.png"),
  },
  {
    id: "24",
    breed: "yorkshire terrier",
    image: require("@/assets/images/pets/dogs/yorkshire-terrier.png"),
  },
];

const initialSelectedPet = data.find((pet) => pet.selected);

export default function SelectPet() {
  const [pet, setPet] = useState<Pet | null>(initialSelectedPet || null);

  return (
    <SelectPetContainer>
      <SelectPetHeader />

      <SelectPetForm>
        <Input
          icon="magnifying-glass"
          name="search"
          placeholder="Search for a pet breed"
        />
      </SelectPetForm>

      <PetSelect pets={data} onSelect={setPet} />

      <SelectPetFooter>
        <SelectPetFooterContent>
          {pet && <SelectPetFooterTitle>Your pet:</SelectPetFooterTitle>}
          <SelectPetFooterText>
            {pet?.breed || "Choose a pet to continue"}
          </SelectPetFooterText>
        </SelectPetFooterContent>

        <Link disabled={!pet} href="/home" asChild>
          <Button disabled={!pet} style={{ flex: 1 }}>
            Continue
          </Button>
        </Link>
      </SelectPetFooter>
    </SelectPetContainer>
  );
}
