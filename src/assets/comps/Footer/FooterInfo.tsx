import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLinks from "./FooterLinks";
import DownloadBtn from "./DownloadBtn";

export default function FooterInfo() {
  return (
    <div className="footer-info absolute w-full left-0">
      <div className="grid lg:flex justify-center items-center lg:items-stretch lg:justify-around h-fit w-11/12 mx-auto bg-white bg-opacity-10 backdrop-blur-3xl rounded-full glass my-20 gap-20 lg:gap-0">
        <div className="my-12 w-full lg:w-2/5 flex flex-col items-center justify-between gap-3">
          <div>
            <img
              src="..\Images\pickyLogoImgFixed.png"
              alt="Picky logo Image"
              width={150}
            />
          </div>

          <a href="/GDPR" className="min-w-fit h-fit flex gap-2 items-center">
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

        <div className="my-12 w-full lg:w-2/5 grid lg:justify-start lg:items-center gap-5 text-center lg:ms-20">
          <h2>Contact Us</h2>
          <div className="grid gap-6">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="text-xs font-bold"> Zichron Yaakov, ISRAEL</span>
            </div>
            <div>
              <FooterLinks
                iconSize="sm"
                gap={2}
                displayIcons={{
                  WhatsApp: true,
                  LinkedIn: false,
                  Email: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 2xl:w-1/5 text-balance flex flex-col justify-center lg:text-start lg:items-start gap-5 lg:gap-0">
          <div className="w-fit">
            <p className="font-semibold lg:text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi, quia!M Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div>
            <DownloadBtn />
          </div>
        </div>
      </div>

      <div className="footer-copyright grid justify-center gap-5 lg:gap-0 lg:flex text-white w-full lg:justify-between absolute py-3 text-center font-bold">
        <div className="h-full w-full flex justify-center gap-3">
          <a href="../../PrivacyAndTermsPdf/PrivacyPolicy.pdf" target="_blank">
            <h3>Privacy & Policy</h3>
          </a>

          <a
            href="../../PrivacyAndTermsPdf/Terms_of_USE_EULA.pdf"
            target="_blank"
          >
            <h3>Terms Of Use</h3>
          </a>
        </div>

        {/* <iframe src='https://my.spline.design/futuristicmapinterface-c5f1295287515a3aade1f9a6a7c980d5/' frameBorder='0' width='500000' height='100%'></iframe> */}

        <h3 className="h-full w-full">
          Powered By:{" "}
          <a href="https://www.linkedin.com/in/nitai-daud/" target="_blank">
            Nitai Daud{" "}
          </a>
        </h3>

        <h3 className="h-full w-full">2024 Picky. All Rights Reserved</h3>
      </div>
    </div>
  );
}
