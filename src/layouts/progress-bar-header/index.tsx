import { Container, Progress } from "./styles";
import { ProgressBarHeaderProps } from "./types";

export function ProgressBarHeader({ progress }: ProgressBarHeaderProps) {
  return (
    <Container>
      <Progress progress={progress} />
    </Container>
  );
}
