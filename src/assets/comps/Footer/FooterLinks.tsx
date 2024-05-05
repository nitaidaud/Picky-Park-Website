import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterLinks() {
  return (
    <div className="grid gap-14 mx-auto mb-10">
        
      <div className="btn-container w-fit m-auto hover:animate-pulse duration-300">
        <a
          href="https://apps.apple.com/il/app/picky-park/id6476976854"
          target="_blank"
        >
          <span className="download-btn border-amber-400 flex w-fit m-auto gap-2 px-10 py-6 rounded-full text-white text-xs uppercase duration-300 hover:border-transparent hover:bg-amber-100 hover:bg-opacity-50">
            Download Now
            <FontAwesomeIcon icon={faApple} className="opacity-50" size="lg" />
          </span>
        </a>
      </div>

      <div className="divider mt-16 mb-6" />

      <div className="contact-links flex w-full m-auto justify-center items-center gap-10">
        <a
          className="p-4 border-2 rounded-full text-white duration-300 hover:text-teal-400 hover:border-teal-400"
          href="mailto:contact@pickyil.online"
          target="_blank"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl"/>
        </a>

        <a
          className="p-4 border-2 rounded-full text-white duration-300 hover:text-blue-500 hover:border-blue-500"
          href="https://www.linkedin.com/company/picky-parking"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
        </a>
      </div>
    </div>
  );
}
