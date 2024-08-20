import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex flex-col justify-start items-center gap-3 mt-28 2xl:mt-0">
      <div className="flex justify-center items-end 2xl:h-1/5">
        <h1 className="text-5xl font-bold">{t("aboutUs.title")}</h1>
      </div>
      <div className="flex flex-col 2xl:flex-row w-[90%] 2xl:w-3/4 items-center justify-center h-fit bg-black mx-auto rounded-xl bg-opacity-60 p-10 mb-10">
        <div className="w-full 2xl:w-4/5 h-4/5 flex p-5 items-center">
          <p className="text-start text-lg leading-[1.3em]">
            {t("aboutUs.first")}
            <br />
            <br />
            {t("aboutUs.sec")}
            <br />
            <br />
            {t("aboutUs.third")}
          </p>
        </div>
        <div className="h-full flex w-full">
          <img
            src="/Images/ourTeam.jpg"
            className="m-auto h-[90%] rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
