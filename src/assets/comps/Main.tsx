import PickyLogo from "./introduction/PickyLogo";
import IntroductionInfo from "./introduction/IntroductionInfo";
import Navbar from "./Header/Navbar";
import Partners from "./introduction/Partners";

export default function Main() {
  return (
    <>
      <Navbar />
      <PickyLogo />
      <IntroductionInfo />
      <Partners />
    </>
  );
}
