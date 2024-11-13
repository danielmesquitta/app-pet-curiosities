import { HomeHeader } from "@/src/layouts/home-header";
import { Wrapper } from "@/src/layouts/wrapper";
import { ImageQuiz } from "@/src/screens/quiz/image";

export default function Quiz() {
  return (
    <Wrapper>
      <HomeHeader />

      <ImageQuiz />
    </Wrapper>
  );
}
