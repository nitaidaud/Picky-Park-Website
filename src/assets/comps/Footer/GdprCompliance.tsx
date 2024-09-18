// import { LazyLoadImage } from "react-lazy-load-image-component";
import gpdrImg from "../../../../public/Images/GDPRImg.png";

export default function GdprCompliance() {
  return (
    <div className="my-16 grid gap-9">
      <p className="intro-title uppercase tracking-tight text-xl font-bold bg-clip-text">
        GDPR Compliance
      </p>

      <p className="paragraph-info text-white tracking-widest font-extralight bg-clip-text">
        Picky aligns with the General Data Protection Regulation (GDPR),
        underscoring our commitment to protecting user data in accordance with
        European data protection standards.
      </p>

      <img
        loading="lazy"
        className="w-1/2 m-auto"
        // src="..\..\Images\GDPRImg.png"
        src={gpdrImg}
        alt="GDPRImg"
      />

      <h2 className="uppercase text-xl font-black text-center">
        Transparent Policies
      </h2>

      <p className="paragraph-info text-white tracking-widest font-extralight bg-clip-text">
        Our comprehensive Privacy Policy and clear Terms of Use outline how user
        data is collected, processed, and utilized. We encourage users to review
        these documents for a thorough understanding of their rights and the
        measures we take to protect their information.
      </p>
    </div>
  );
}
