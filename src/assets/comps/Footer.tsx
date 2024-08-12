// import FooterLinks from "./Footer/FooterLinks";
import { Employee } from "../models/Employee";
import FooterInfo from "./Footer/FooterInfo";
import PersonalInfo from "./Footer/PersonalInfo";
// import PrivacyAndTerms from "./Footer/PrivacyAndTerms";

export default function Footer() {
  const team: Employee[] = [
    {
      name: "Noam Cohen",
      role: "Founder & CEO",
      image: "../Images/profilePic/noamPic.jpg",
      description:
        "Noam Cohen, the driving force and innovative mind behind the groundbreaking parking app Picky is a fresh entrepreneur and visionary in the tech industry. With a passion for simplifying everyday challenges through technology, Noam has dedicated his expertise to redefine the parking experience for users around the globe",
      linkedIn: "https://www.linkedin.com/in/noamcohenn/",
    },
    {
      name: "Nitai Daud",
      role: "Software Developer",
      image:
        "https://media.licdn.com/dms/image/D4D03AQEylbfXyhuWRw/profile-displayphoto-shrink_200_200/0/1719038456904?e=1728518400&v=beta&t=_3bphE5Jh4fQed23JQZec4Yr68OUWRw0iURVkdrP5LU",
      description:
        "dasdasdasdasdasd asd asdasda sfsadfsadf asdf gsdagsdagsdagsdgsda",
      linkedIn: "https://www.linkedin.com/in/nitai-daud/",
    },
    {
      name: "Omer Levin",
      role: "Product Leader",
      image:
        "https://media.licdn.com/dms/image/D5603AQE32PFJ2tiEXA/profile-displayphoto-shrink_200_200/0/1723448924051?e=1729123200&v=beta&t=yer9rRGPe3GOcI7iZ6TKm94F3u3hZzHdeikuonAd0aw",
      description:
        "dasdasdasdasdasd asd asdasda sfsadfsadf asdf gsdagsdagsdagsdgsda",
      linkedIn: "https://www.linkedin.com/in/omer-levin-990548222/",
    },
  ];

  return (
    <div className="mx-auto">
      <PersonalInfo team={team} />
      <FooterInfo />
    </div>
  );
}
