import { HomeHeader } from "@/layouts/home-header";
import { Wrapper } from "@/layouts/wrapper";
import { Profile as ProfileScreen } from "@/screens/profile";

export default function Profile() {
  return (
    <Wrapper>
      <HomeHeader />

      <ProfileScreen />
    </Wrapper>
  );
}
