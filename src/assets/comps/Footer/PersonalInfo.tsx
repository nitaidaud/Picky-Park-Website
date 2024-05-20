import FooterLinks from "./FooterLinks";

export default function PersonalInfo() {
  return (
    <div
      id="contact-info"
      className="contact-info before:duration-500 before:w-full before:h-full before:text-sm before:sm:text-base before:text-balance before:rounded-md before:font-bold relative my-24 mx-auto grid gap-10 bg-white bg-opacity-20 p-6 w-4/5 min-w-min md:w-9/12 rounded-md shadow-md shadow-slate-700"
    >
      <h2 className="intro-title max-w-fit parking-title uppercase -tracking-tight text-7xl font-black bg-clip-text">
        Noam Cohen
      </h2>
      <p className="w-fit mx-auto uppercase font-bold text-white bg-clip-text">
        Founder & CEO
      </p>

      <div className="mt-10 z-10 mb-12">
        <FooterLinks
          iconSize="xl"
          gap={10}
          displayIcons={{ WhatsApp: false, Email: false, LinkedIn: true }}
        />
      </div>

      {/* <p className="paragraph-info text-white tracking-widest text-lg text-left text-balance font-extralight bg-clip-text">
        Noam Cohen, the driving force and innovative mind behind the
        groundbreaking parking app Picky is a fresh entrepreneur and visionary
        in the tech industry. With a passion for simplifying everyday challenges
        through technology, Noam has dedicated his expertise to redefine the
        parking experience for users around the globe
      </p> */}
    </div>
  );
}
