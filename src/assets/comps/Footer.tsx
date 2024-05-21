// import FooterLinks from "./Footer/FooterLinks";
import FooterInfo from "./Footer/FooterInfo";
import PersonalInfo from "./Footer/PersonalInfo";
// import PrivacyAndTerms from "./Footer/PrivacyAndTerms";

export default function Footer() {
  return (
    <div className="max-w-xl m-auto">
      <PersonalInfo />
      <FooterInfo />
      {/* <iframe
        src="https://my.spline.design/futuristicmapinterface-c5f1295287515a3aade1f9a6a7c980d5/"
        frameBorder="0"
        width="100%"
        height="59%"
        className="absolute left-0"
      ></iframe> */}
    </div>
  );
}
