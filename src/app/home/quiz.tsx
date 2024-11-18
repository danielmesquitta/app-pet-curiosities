import { HomeHeader } from "@/layouts/home-header";
import { Wrapper } from "@/layouts/wrapper";
import { Quiz as QuizScreen } from "@/screens/quiz";

export default function Quiz() {
  return (
    <Wrapper>
      <HomeHeader />

      <QuizScreen />
    </Wrapper>
  );
}
