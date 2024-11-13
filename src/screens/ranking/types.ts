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

type Zone = "promotion" | "demotion" | "locked";

export interface RankingPositionProps {
  position: number;
  user: {
    avatar?: string;
    name: string;
  };
  xp: number;
  isCurrentUser?: boolean;
  zone?: Zone;
}

export interface RankingPositionCardProps {
  isCurrentUser?: boolean;
}
