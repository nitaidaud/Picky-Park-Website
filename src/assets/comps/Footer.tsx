// import FooterLinks from "./Footer/FooterLinks";
import { useTranslation } from "react-i18next";
import { Employee } from "../models/Employee";
import FooterInfo from "./Footer/FooterInfo";
import PersonalInfo from "./Footer/PersonalInfo";
// import PrivacyAndTerms from "./Footer/PrivacyAndTerms";

export default function Footer() {
  const {t} = useTranslation()
  const team: Employee[] = [
    {
      // name: "Noam Cohen",
      // role: "Founder & CEO",
      name: t("ourTeam.noam.name"),
      role: t("ourTeam.noam.role"),
      image: "/Images/profilePic/noamPic.jpg",
      linkedIn: "https://www.linkedin.com/in/noamcohenn/",
    },
    {
      // name: "Nitai Daud",
      // role: "Software Developer",
      name: t("ourTeam.nitai.name"),
      role: t("ourTeam.nitai.role"),
      image:
        "https://media.licdn.com/dms/image/D4D03AQEylbfXyhuWRw/profile-displayphoto-shrink_200_200/0/1719038456904?e=1728518400&v=beta&t=_3bphE5Jh4fQed23JQZec4Yr68OUWRw0iURVkdrP5LU",
      linkedIn: "https://www.linkedin.com/in/nitai-daud/",
    },
    {
      // name: "Omer Levin",
      // role: "Product Leader",
      name: t("ourTeam.omer.name"),
      role: t("ourTeam.omer.role"),
      image: "/Images/profilePic/omerPic.jpg",
      linkedIn: "https://www.linkedin.com/in/omer-levin-990548222/",
    },
  ];

  return (
    <div className="mx-auto">
      <PersonalInfo team={team} />
      <FooterInfo />
    </div>
  );
}
