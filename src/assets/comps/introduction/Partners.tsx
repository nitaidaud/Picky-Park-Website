import { useEffect } from "react";
import PartnerImg from "./PartnerImg";

export default function Partners() {
  const partners = [
    "../Partners/Logos/AppleLogo.png",
    "../Partners/Logos/GoogleLogo.png",
    "../Partners/Logos/appwrite.png",
    "../Partners/Logos/EDA2.png",
    "../Partners/Logos/OpenAI.png",
  ];

  useEffect(() => {
    const owl = $(".owl-carousel");
    owl.owlCarousel({
      responsive: {
        0: {
          items: 1,
        },

        480: {
          items: 1,
        },

        768: {
          items: 2,
        },

        938: {
          items: 3,
        },
      },
      loop: true,
      lazyLoad: true,
      autoplay: true,
      // autoplayTimeout: 1000,
      autoplaySpeed: 1000,
      slideTransition: "linear",
      fluidSpeed: true,
      rewind: false,
      autoplayHoverPause: true,
    });
  }, []);

  return (
    <div className="min-h-full">
      <h2 className="uppercase text-3xl font-semibold">Our Partners</h2>
      <div className="owl-carousel owl-theme owl-loaded owl-drag mt-11 snap-center">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            {partners.map((partner) => {
              return <PartnerImg partner={partner} key={partner} />;
            })}
          </div>
        </div>
        <div className="owl-nav disabled"></div>
      </div>
    </div>
  );
}
