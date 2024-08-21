import { Outlet, Route, Routes } from "react-router-dom";
import GDPRInfo from "./GDPR/GDPRInfo";
import Main from "./Main";
import ContactUs from "./Contact-Us/ContactUs";
import Navbar from "./Header/Navbar";
import { useTranslation } from "react-i18next";
import AboutUs from "./AboutUs/AboutUs";
import FooterInfo from "./Footer/FooterInfo";

export default function AppRouts() {
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  return (
    <Routes>
      <Route
        element={
          <div dir={dir}>
            <Navbar />
            <Outlet />
            <div className="relative h-[160vh] lg:h-[80vh] 2xl:h-fit">
              <FooterInfo />
            </div>
          </div>
        }
      >
        <Route index element={<Main />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/GDPR" element={<GDPRInfo />} />
      </Route>
    </Routes>
  );
}
