// import FooterLinks from "./Footer/FooterLinks";
import { useTranslation } from "react-i18next";
import { Employee } from "../models/Employee";
import noamPic from "/Images/noamPic.jpg";
import nitaiPic from "/Images/nitaiNewProfile.jpg";
import PersonalInfo from "./Footer/PersonalInfo";
// import PrivacyAndTerms from "./Footer/PrivacyAndTerms";

export default function Footer() {
  const { t } = useTranslation();
  const team: Employee[] = [
    {
      name: t("ourTeam.noam.name"),
      role: t("ourTeam.noam.role"),
      image: noamPic,
      linkedIn: "https://www.linkedin.com/in/noamcohenn/",
    },
    {

      name: t("ourTeam.nitai.name"),
      role: t("ourTeam.nitai.role"),
      image: nitaiPic,
      linkedIn: "https://www.linkedin.com/in/nitai-daud/",
    },
  ];

  return (
    <div className="mx-auto">
      <PersonalInfo team={team} />
    </div>
  );
}
