import PartnerImg from "./PartnerImg";

export default function Partners() {
  const partners = [
    // "../Partners/Logos/AppleLogo.png",
    "../Partners/Logos/GoogleLogo.png",
    "../Partners/Logos/appwrite.png",
    "../Partners/Logos/EDA2.png",
    "../Partners/Logos/OpenAI.png",
  ];

  return (
    <div className="partners-slide w-full absolute snap-start">
      <div className="flex flex-col justify-center items-center">
        <div>
          {/* <div>
            <h2 className="uppercase text-5xl font-semibold">Our Partners</h2>
          </div> */}
          <div>
            <div
              
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div className="owl-stage-outer flex items-center">
                <div className="owl-stage">
                  {partners.map((partner) => {
                    return <PartnerImg partner={partner} key={partner} />;
                  })}
                </div>
              </div>
              <div className="owl-nav disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
