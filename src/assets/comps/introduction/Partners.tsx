import PartnerImg from "./PartnerImg";
import googleLogo from "../../../../public/Partners/Logos/GoogleLogo.png";
import appwriteLogo from "../../../../public/Partners/Logos/appwrite.png";
import EDA2Logo from "../../../../public/Partners/Logos/EDA2.png";

export default function Partners() {
  // const partners = [
  //   // "../Partners/Logos/AppleLogo.png",
  //   "../Partners/Logos/GoogleLogo.png",
  //   "../Partners/Logos/appwrite.png",
  //   "../Partners/Logos/EDA2.png",
  //   // "../Partners/Logos/OpenAI.png",
  // ];
  const partners = [googleLogo, appwriteLogo, EDA2Logo];

  return (
    // <div className="w-full snap-start top-full">
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
