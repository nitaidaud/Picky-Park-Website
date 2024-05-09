import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterLinks() {
  return (
    <div className="grid gap-14 mx-auto mb-10">

      <div className="divider mb-6" />

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
