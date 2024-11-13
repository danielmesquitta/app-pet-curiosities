import { HomeHeader } from "@/layouts/home-header";
import { Wrapper } from "@/layouts/wrapper";
import { ImageQuiz } from "@/screens/quiz/image";

export default function Quiz() {
  return (
    <Wrapper>
      <HomeHeader />

      <ImageQuiz />
    </Wrapper>
  );
}
