import { useTranslation } from "react-i18next";

export default function ContactUsBtn() {
  const { t } = useTranslation();
  return (
    <a
      href="#contact-info"
      className="contact-btn uppercase text-white font-medium rounded-3xl hover:ease-in-out hover:border-transparent text-center duration-300"
    >
      {/* Contact Us */}
      {t("navbar.ContactUs")}
    </a>
  );
}
