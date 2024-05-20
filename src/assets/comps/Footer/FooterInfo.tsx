import {
  faMapLocation,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLinks from "./FooterLinks";

export default function FooterInfo() {
  return (
    <div className="footer-info absolute w-full left-0">

      <div className="grid lg:flex justify-center items-center lg:items-stretch lg:justify-around h-fit w-full bg-white bg-opacity-10 backdrop-blur-3xl rounded-full glass mb-20">
        <div className="my-12 flex flex-col items-start justify-between">
          <div>
            <img
              src="..\Images\pickyLogoImgFixed.png"
              alt="Picky logo Image"
              width={150}
            />
          </div>
          <div>
            <FooterLinks
              iconSize="sm"
              gap={2}
              displayIcons={{ WhatsApp: true, LinkedIn: false, Email: true }}
            />
          </div>
          <a
            href="/GDPR"
            className="min-w-fit h-fit flex gap-2 items-center hover:scale-110 duration-200"
          >
            <div className="my-auto rounded-lg">
              <img
                src="..\Images\GDPRImg1.png"
                alt="GDPRImg logo"
                width={150}
                className="my-auto"
              />
            </div>
          </a>
        </div>

        <div className="my-12 text-start">
          <h2>About Us</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapLocation} /> ISRAEL
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Zikhron Yaakov
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </li>
          </ul>
        </div>

        <div className="my-12 text-start">
          <h2>INFO3</h2>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright grid justify-center gap-5 lg:gap-0 lg:flex text-white w-full lg:justify-between absolute py-3 text-center font-bold">

        <div className="h-full w-full flex justify-center gap-3">
          <a href="../../PrivacyAndTermsPdf/PrivacyPolicy.pdf" target="_blank">
            <h3>Privacy & Policy</h3>
          </a>

          <h3>|</h3>

          <a
            href="../../PrivacyAndTermsPdf/Terms_of_USE_EULA.pdf"
            target="_blank"
          >
            <h3>Terms Of Use</h3>
          </a>
        </div>

        <h3 className="h-full w-full">
          Powered By: <a href="https://www.linkedin.com/in/nitai-daud/" target="_blank"> Nitai Daud </a>
        </h3>

        <h3 className="h-full w-full">2024 Picky. All Rights Reserved</h3>
      </div>

    </div>
  );
}
