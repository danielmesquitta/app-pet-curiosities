export type LeagueName =
  | "bronze"
  | "silver"
  | "gold"
  | "sapphire"
  | "ruby"
  | "emerald"
  | "diamond"
  | "locked";

export interface Props {
  league: LeagueName;
}

export interface LeagueProps {
  id: string;
  name: LeagueName;
  image: any;
}

export interface IconProps {
  color?: string;
}
