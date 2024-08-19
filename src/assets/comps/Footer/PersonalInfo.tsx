import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Employee } from "../../models/Employee";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export default function PersonalInfo(props: { team: Employee[] }) {
  const team: Employee[] = props.team;
  const { t } = useTranslation();
  return (
    <div
      id="contact-info"
      className="w-full h-full flex flex-col min-h-fit snap-start p-16 py-32 2xl:grid items-center gap-10"
    >
      <div className="w-full">
        <h2 className="text-6xl font-bold text-white drop-shadow-xl">
          {/* Meet Our Team: */}
          {t("ourTeam.title")}
        </h2>
      </div>
      <div className="w-full flex-col flex xl:flex-row items-center justify-around h-full">
        {team.map(({ name, image, role, linkedIn }) => {
          return (
            <div
              key={name + role}
              className={`h-full mx-auto w-full md:w-4/5 lg:w-1/2 xl:w-full grid justify-center items-center gap-10 bg-white bg-opacity-30 my-16 lg:m-5 rounded-xl shadow-xl drop-shadow-xl ${
                name == t("ourTeam.nitai.name") ? "xl:order-first" : ""
              } hover:shadow-2xl duration-200`}
            >
              <div className="contact-info mt-20 m-auto h-full w-full animate-block snap-start">
                <img
                  src={image}
                  alt="img"
                  className="w-full xl:w-2/3 max-w-64 lg:min-w-40 lg:max-w-40 mx-auto rounded-full border-2 border-purple-400"
                />
              </div>
              <div className="w-full text-center flex flex-col justify-center items-center">
                <h2 className="max-w-fit picky-park-title uppercase text-4xl lg:text-2xl 2xl:text-4xl font-black bg-clip-text drop-shadow-xl px-3">
                  {name}
                </h2>
                <p className="w-fit tracking-wider mx-auto uppercase text-white bg-clip-text drop-shadow-xl 2xl:text-base">
                  {role}
                </p>

                <div className="mt-10 z-10 mb-12">
                  <a
                    className="p-4 border-2 rounded-full text-white duration-300 hover:text-blue-500 hover:border-blue-500"
                    href={linkedIn}
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size={"xl"} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
