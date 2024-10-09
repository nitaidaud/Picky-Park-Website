import PartnerImg from "./PartnerImg";
import googleLogo from "/Partners/Logos/GoogleLogo.png";
import appwriteLogo from "/Partners/Logos/appwrite.png";
import EDA2Logo from "/Partners/Logos/EDA2.png";

export default function Partners() {
  const partners = [googleLogo, appwriteLogo, EDA2Logo];

  return (
    <div className="owl-carousel top-0 owl-theme owl-loaded owl-drag h-fit w-screen">
      <div className="owl-stage-outer min-h-fit flex items-center">
        <div className="owl-stage">
          {partners.map((partner) => {
            return <PartnerImg partner={partner} key={partner} />;
          })}
        </div>
      </div>
      <div className="owl-nav disabled"></div>
    </div>
    // </div>
  );
}
