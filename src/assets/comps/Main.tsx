import PickyLogo from "./introduction/PickyLogo";
import IntroductionInfo from "./introduction/IntroductionInfo";
import Navbar from "./Header/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <PickyLogo />
      <IntroductionInfo />
    </>
  );
}
