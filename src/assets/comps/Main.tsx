import PickyLogo from "./introduction/PickyLogo";
import IntroductionInfo from "./introduction/IntroductionInfo";
import Navbar from "./Header/Navbar";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Introduction from "./Introduction";
import Footer from "./Footer";
import FirstSlide from "./introduction/FirstSlide";

export default function Main() {
  return (
    <>
      <Navbar />
      {/* <PickyLogo /> */}
      <FirstSlide />
      <IntroductionInfo />

      <LazyLoadComponent visibleByDefault={true}>
        <Introduction />
      </LazyLoadComponent>

      <LazyLoadComponent visibleByDefault={true}>
        <Footer />
      </LazyLoadComponent>
    </>
  );
}
