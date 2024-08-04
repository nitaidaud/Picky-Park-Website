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
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG10eW0GjMLFA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1708934670392?e=1728518400&v=beta&t=E77RdS83FTpQihxi7z10EMMOaoh1YMlpuKsziYhoNm0",
      description: "Noam Cohen, the driving force and innovative mind behind the groundbreaking parking app Picky is a fresh entrepreneur and visionary in the tech industry. With a passion for simplifying everyday challenges through technology, Noam has dedicated his expertise to redefine the parking experience for users around the globe",
      linkedIn: "https://www.linkedin.com/in/noamcohenn/"
    },
    {
      name: "Nitai Daud",
      role: "Software Developer",
      image: "https://media.licdn.com/dms/image/D4D03AQEylbfXyhuWRw/profile-displayphoto-shrink_200_200/0/1719038456904?e=1728518400&v=beta&t=_3bphE5Jh4fQed23JQZec4Yr68OUWRw0iURVkdrP5LU",
      description: "dasdasdasdasdasd asd asdasda sfsadfsadf asdf gsdagsdagsdagsdgsda",
      linkedIn: "https://www.linkedin.com/in/nitai-daud/"
    },
    {
      name: "Omer Levin",
      role: "UI/UX Designer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9oGWxcOTZlq87JkJKKXBwUjBN_je1qXsGA&usqp=CAU",
      description: "dasdasdasdasdasd asd asdasda sfsadfsadf asdf gsdagsdagsdagsdgsda",
      linkedIn: "https://www.linkedin.com/in/nitai-daud/"
    },
    
  ]

  return (
    <div className="mx-auto">
      <PersonalInfo team={team}/>
      <FooterInfo />
    </div>
  );
}
