import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Employee } from "../../models/Employee";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function PersonalInfo(props: { team: Employee[] }) {
  const team: Employee[] = props.team;

  return (
    <div className="w-full h-fit min-h-screen snap-start p-16 py-32 lg:p-32">
      <div className="w-full">
        <h2 className="text-6xl font-bold text-white drop-shadow-xl">
          Meet Our Team:
        </h2>
      </div>
      <div className="lg:flex items-center justify-around">
        {team.map(({ name, image, role, linkedIn }) => {
          return (
            <div
              key={name + role}
              className={`h-full w-full grid justify-center items-center gap-10 bg-white bg-opacity-30 my-16 lg:m-5 rounded-xl shadow-xl drop-shadow-xl ${
                name == "Nitai Daud" ? "order-first" : ""
              } hover:shadow-2xl duration-200`}
            >
              <div
                id="contact-info"
                className="contact-info mt-20 m-auto h-full w-full animate-block snap-start"
              >
                <img
                  src={image}
                  alt="img"
                  className="w-full xl:w-2/3 max-w-64 lg:min-w-40 lg:max-w-40 mx-auto rounded-full border-2 border-purple-400"
                />
              </div>
              <div className="w-full text-center flex flex-col justify-center items-center">
                <h2 className="max-w-fit picky-park-title uppercase -tracking-tight text-4xl font-black bg-clip-text drop-shadow-xl">
                  {name}
                </h2>
                <p className="w-fit tracking-wider mx-auto uppercase text-white bg-clip-text drop-shadow-xl">
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
