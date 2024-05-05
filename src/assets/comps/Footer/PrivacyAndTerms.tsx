import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PrivacyAndTerms() {
  return (
    <div className="grid gap-20">
      <p className="paragraph-info policy-title uppercase text-white tracking-widest text-sm bg-clip-text font-bold">
        we invite you to review Picky Privacy Policy and our Terms of Use here
      </p>
      <div className="buttons-container grid gap-24">
        <div className="btn-container w-fit m-auto duration-300">
          <a
            href="src\assets\PrivacyAndTermsPdf\Privacy Policy.pdf"
            target="_blank"
          >
            <span className="btn-style px-9 py-6 rounded-full text-white text-xs uppercase duration-300">
              Privacy Policy
              <FontAwesomeIcon icon={faCheck} className="opacity-50" size="lg"/>
            </span>
          </a>
        </div>

        <div className="btn-container w-fit m-auto duration-300">
          <a
            href="src\assets\PrivacyAndTermsPdf\Terms of USE_EULA.pdf"
            target="_blank"
          >
            <span className="btn-style px-12 py-6 rounded-full text-white text-xs uppercase duration-300">
              Terms of Use
              <FontAwesomeIcon icon={faCheck} className="opacity-50" size="lg"/>
            </span>
          </a>
        </div>
      </div>

      <div className="divider"/>
      
    </div>
  );
}
