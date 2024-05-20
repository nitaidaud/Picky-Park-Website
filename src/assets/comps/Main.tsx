import PickyLogo from "./introduction/PickyLogo";
import IntroductionInfo from "./introduction/IntroductionInfo";
import Navbar from "./Header/Navbar";
import Partners from "./introduction/Partners";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Introduction from "./Introduction";
import Footer from "./Footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <PickyLogo />
      <IntroductionInfo />
      <Partners />

      <LazyLoadComponent visibleByDefault={true}>
        <Introduction />
      </LazyLoadComponent>

      <LazyLoadComponent visibleByDefault={true}>
        <Footer />
      </LazyLoadComponent>
    </>
  );
}
