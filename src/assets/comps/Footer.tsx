// import FooterLinks from "./Footer/FooterLinks";
import FooterInfo from "./Footer/FooterInfo";
import PersonalInfo from "./Footer/PersonalInfo";
// import PrivacyAndTerms from "./Footer/PrivacyAndTerms";

export default function Footer() {
  return (
    <div className="max-w-xl m-auto animate-block">
      <PersonalInfo />
      <FooterInfo />
    </div>
  );
}
