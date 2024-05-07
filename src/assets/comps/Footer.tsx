import FooterLinks from "./Footer/FooterLinks";
import PersonalInfo from "./Footer/PersonalInfo";
import PrivacyAndTerms from "./Footer/PrivacyAndTerms";

export default function Footer() {
  return (
    <div className="max-w-xl m-auto">
      <PrivacyAndTerms />
      <PersonalInfo />
      <FooterLinks />
    </div>
  );
}
