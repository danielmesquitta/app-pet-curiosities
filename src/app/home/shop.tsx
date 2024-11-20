import { HomeHeader } from "@/layouts/home-header";
import { Wrapper } from "@/layouts/wrapper";
import { Shop as ShopScreen } from "@/screens/shop";

export default function Shop() {
  return (
    <Wrapper>
      <HomeHeader />

      <ShopScreen />
    </Wrapper>
  );
}
