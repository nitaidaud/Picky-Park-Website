import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterLinks(props: {
  displayIcons: { WhatsApp: boolean; LinkedIn: boolean; Email: boolean };
  gap: number;
  iconSize: SizeProp;
}) {
  const iconSize = props.iconSize;
  const gap = props.gap;
  const displayIcons = props.displayIcons;
  
  return (
    <div className="grid gap-14 mx-auto">
      {/* <div className="divider mb-6" /> */}

      <div
        className={`contact-links flex w-full m-auto justify-center items-center gap-${gap}`}
      >
        {displayIcons.Email && (
          <a
            className="py-2 px-3 border-2 rounded-full text-white border-white duration-300 hover:bg-opacity-40"
            href="mailto:team@pickypark.com"
            target="_blank"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
          </a>
        )}

        {displayIcons.LinkedIn && (
          <a
            className="py-2 px-3 border-2 rounded-full text-white duration-300"
            href="https://www.linkedin.com/company/picky-parking"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} />
          </a>
        )}

        {displayIcons.WhatsApp && (
          <a
            className="py-2 px-3 border-2 rounded-full text-white border-white duration-300 hover:bg-opacity-40"
            href="https://wa.me/+97246293050"
            target="_blank"
            aria-label="Send WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size={iconSize} />
          </a>
        )}
      </div>
    </div>
  );
}
