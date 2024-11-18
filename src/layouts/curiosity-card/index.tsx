import { CuriosityCardDefault } from "./default";
import { CuriosityCardSimplified } from "./simplified";
import { Props } from "./types";

export function CuriosityCard({ type = "default", ...rest }: Props) {
  return type === "default" ? (
    <CuriosityCardDefault type={type} {...rest} />
  ) : (
    <CuriosityCardSimplified type={type} {...rest} />
  );
}
