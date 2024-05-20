import { Route, Routes } from "react-router-dom";
import GDPRInfo from "./GDPR/GDPRInfo";
import Main from "./Main";

export default function AppRouts() {
  return (
    <Routes>
      <Route index element={<Main />} />

      <Route path="/GDPR" element={<GDPRInfo />} />
    </Routes>
  );
}
