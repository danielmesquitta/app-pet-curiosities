import axios from "axios";
import { GetAvatarParams } from "./types";

const api = axios.create({
  baseURL: "https://avataaars.io",
});

export const getAvatarURL = async ({
  accessoriesType,
  clotheColor,
  clotheType,
  eyeType,
  eyebrowType,
  facialHairType,
  hairColor,
  mouthType,
  skinColor,
  topType,
  facialHairColor,
}: GetAvatarParams) => {
  let url = `/?avatarStyle=Transparent&topType=${topType}&accessoriesType=${accessoriesType}&hairColor=${hairColor}&facialHairType=${facialHairType}&clotheType=${clotheType}&clotheColor=${clotheColor}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;

  if (facialHairType !== "Blank") {
    url += `&facialHairColor=${facialHairColor || hairColor}`;
  }

  return api.get(url);
};
