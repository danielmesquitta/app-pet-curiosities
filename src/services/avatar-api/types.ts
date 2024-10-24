export type TopType =
  | "NoHair"
  | "Hijab"
  | "Turban"
  | "LongHairBigHair"
  | "LongHairBob"
  | "LongHairBun"
  | "LongHairCurly"
  | "LongHairCurvy"
  | "LongHairDreads"
  | "LongHairFro"
  | "LongHairNotTooLong"
  | "LongHairMiaWallace"
  | "LongHairStraight"
  | "LongHairStraight2"
  | "LongHairStraightStrand"
  | "ShortHairDreads01"
  | "ShortHairDreads02"
  | "ShortHairFrizzle"
  | "ShortHairShaggyMullet"
  | "ShortHairShortCurly"
  | "ShortHairShortFlat"
  | "ShortHairShortRound"
  | "ShortHairShortWaved"
  | "ShortHairSides"
  | "ShortHairTheCaesar"
  | "ShortHairTheCaesarSidePart";

export type AccessoriesType =
  | "Blank"
  | "Kurt"
  | "Prescription01"
  | "Prescription02"
  | "Round"
  | "Sunglasses"
  | "Wayfarers";

export type HairColor =
  | "Auburn"
  | "Black"
  | "Blonde"
  | "BlondeGolden"
  | "Brown"
  | "BrownDark"
  | "Platinum"
  | "Red";

export type FacialHairType =
  | "Blank"
  | "BeardMedium"
  | "BeardLight"
  | "BeardMajestic"
  | "MoustacheFancy"
  | "MoustacheMagnum";

export type ClotheType =
  | "CollarSweater"
  | "Hoodie"
  | "Overall"
  | "ShirtCrewNeck"
  | "ShirtScoopNeck"
  | "ShirtVNeck";

export type ClotheColor =
  | "Black"
  | "Blue01"
  | "Blue02"
  | "Blue03"
  | "Gray01"
  | "Gray02"
  | "Heather"
  | "PastelBlue"
  | "PastelGreen"
  | "PastelOrange"
  | "PastelRed"
  | "PastelYellow"
  | "Pink"
  | "Red"
  | "White";

export type EyeType =
  | "Close"
  | "Default"
  | "Happy"
  | "Hearts"
  | "Side"
  | "Squint"
  | "Wink";

export type EyebrowType =
  | "Angry"
  | "AngryNatural"
  | "Default"
  | "DefaultNatural"
  | "FlatNatural"
  | "RaisedExcited"
  | "RaisedExcitedNatural"
  | "SadConcerned"
  | "SadConcernedNatural"
  | "UnibrowNatural"
  | "UpDown"
  | "UpDownNatural";

export type MouthType =
  | "Concerned"
  | "Default"
  | "Disbelief"
  | "Eating"
  | "Grimace"
  | "Sad"
  | "ScreamOpen"
  | "Serious"
  | "Smile"
  | "Tongue"
  | "Twinkle";

export type SkinColor = "Pale" | "Light" | "Brown" | "DarkBrown" | "Black";

export type GetAvatarParams = {
  topType: TopType;
  accessoriesType: AccessoriesType;
  hairColor: HairColor;
  facialHairType: FacialHairType;
  facialHairColor?: HairColor;
  clotheType: ClotheType;
  clotheColor: ClotheColor;
  eyeType: EyeType;
  eyebrowType: EyebrowType;
  mouthType: MouthType;
  skinColor: SkinColor;
};
