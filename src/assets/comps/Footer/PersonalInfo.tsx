import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Employee } from "../../models/Employee";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function PersonalInfo(props: { team: Employee[] }) {
  const team: Employee[] = props.team;

  return (
    <div className="w-full h-fit min-h-screen snap-start p-32">
      <div className="w-full">
        <h2 className="text-5xl font-bold bg-clip-text picky-park-title ">Meet Our Team:</h2>
      </div>
      <div className="lg:flex items-center justify-around">
        {team.map(({ name, image, role, linkedIn }) => {
          return (
            <div className="h-full w-full grid justify-center items-center gap-10">
              <div
                id="contact-info"
                className="contact-info mt-20 m-auto h-full w-full animate-block snap-start"
              >
                <img
                  src={image}
                  alt="img"
                  className="w-full lg:min-w-40 lg:max-w-40 mx-auto rounded-full border-2 border-purple-400"
                />
              </div>
              <div className="w-full text-center flex flex-col justify-center items-center">
                <h2 className="intro-title max-w-fit parking-title uppercase -tracking-tight text-4xl font-black bg-clip-text">
                  {name}
                </h2>
                <p className="w-fit mx-auto uppercase font-bold text-white bg-clip-text">
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
