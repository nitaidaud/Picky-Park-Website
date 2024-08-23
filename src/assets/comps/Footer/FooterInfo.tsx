import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLinks from "./FooterLinks";
import DownloadBtn from "./DownloadBtn";
import { useTranslation } from "react-i18next";

export default function FooterInfo() {
  const { t } = useTranslation();

  return (
    <div className="footer-info absolute w-full left-0">
      <div className="grid lg:flex justify-center items-center lg:items-stretch lg:justify-around h-fit w-11/12 mx-auto bg-white bg-opacity-10 backdrop-blur-3xl rounded-full glass my-20 gap-20 lg:gap-0">
        <div className="my-12 w-full  flex flex-col items-center justify-between gap-3">
          <div>
            <img
              src="..\Images\pickyLogoImgFixed.png"
              alt="Picky logo Image"
              width={150}
            />
          </div>

          <a
            href="https://gdpr.eu/what-is-gdpr/"
            target="_blank"
            className="min-w-fit h-fit flex gap-2 items-center"
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

        <div className="my-12 w-full  grid lg:justify-center lg:items-center gap-5 text-center">
          {/* <h2>Contact Us</h2> */}
          <h2>{t("footer.title")}</h2>
          <div className="grid gap-6">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="text-xs font-bold"> {t("footer.location")}</span>
            </div>
            <div>
              <FooterLinks
                iconSize="sm"
                gap={2}
                displayIcons={{
                  WhatsApp: false,
                  LinkedIn: true,
                  Email: true,
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full my-auto text-balance flex flex-col justify-center lg:text-start lg:items-center gap-5">
          <div className="w-fit h-2/3 2xl:max-w-[50%] flex flex-col gap-5">
            <p className="font-semibold lg:text-xs">
              {t("footer.descriptionFirst")}
              <br />
              <br />
              {t("footer.descriptionSec")}
            </p>
            <div className="h-1/3 p-6 lg:p-0">
              <DownloadBtn />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright grid justify-center gap-5 lg:gap-0 lg:flex text-white w-full lg:justify-between absolute py-3 text-center font-bold">
        <div className="h-full w-full flex justify-center gap-3 text-white">
          <a href="../../PrivacyAndTermsPdf/PrivacyPolicy.pdf" target="_blank">
            <h3>{t("footer.privacyAndPolicy")}</h3>
          </a>

          <a
            href="../../PrivacyAndTermsPdf/Terms_of_USE_EULA.pdf"
            target="_blank"
          >
            <h3>{t("footer.termsOfUse")}</h3>
          </a>
        </div>

        <h3 className="h-full w-full text-white">
          {/* {t("footer.poweredBy")} */}
          Powered By:
          <a href="https://www.linkedin.com/in/nitai-daud/" target="_blank">
            {" "}
            {/* {t("footer.nitaiDaud")} */}
            Nitai Daud
          </a>
        </h3>

        <h3 className="h-full w-full text-white snap-end">
          {t("footer.rights")}
        </h3>
      </div>
    </div>
  );
}
