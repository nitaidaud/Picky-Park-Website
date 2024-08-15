import IntroductionInfo from "./introduction/IntroductionInfo";
import Navbar from "./Header/Navbar";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Introduction from "./Introduction";
import Footer from "./Footer";
import FirstSlide from "./introduction/FirstSlide";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { "1": lang } = useTranslation();
  const dir = lang.dir();
  return (
    <div dir={dir}>
      <Navbar />
      <FirstSlide />
      <IntroductionInfo />

      <LazyLoadComponent visibleByDefault={true}>
        <Introduction />
      </LazyLoadComponent>

      <LazyLoadComponent visibleByDefault={true}>
        <Footer />
      </LazyLoadComponent>
    </div>
  );
}
