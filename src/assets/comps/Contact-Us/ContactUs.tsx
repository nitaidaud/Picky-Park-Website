import { ChangeEvent, FormEvent, useRef, useState } from "react";
import phoneCode from "./phoneCodes.json";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  email: string;
  phoneCode: string;
  phone: string;
  message: string;
}

export default function ContactUs() {
  const { t } = useTranslation();
  const email_secret = import.meta.env.VITE_EMAILSECRET;
  const phoneCodes = phoneCode.sort((a, b) =>
    a.dial_code.localeCompare(b.dial_code),
  );
  const phoneCodeRef = useRef<HTMLSelectElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneCode: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    formData.phoneCode = phoneCodeRef.current!.value;

    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contactUs.errors.name");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contactUs.errors.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contactUs.errors.invalidEmail");
    }

    if (!formData.phoneCode.trim()) {
      newErrors.phoneCode = t("contactUs.errors.phoneCode");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("contactUs.errors.phone");
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = t("contactUs.errors.invalidPhone");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contactUs.errors.msg");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    const submitFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitFormData.append(key, value);
    });
    submitFormData.append("access_key", email_secret);

    const json = JSON.stringify(Object.fromEntries(submitFormData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        setFormData({
          name: "",
          email: "",
          phoneCode: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Please try again",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="h-fit min-h-screen w-full flex flex-col 2xl:flex-row items-center justify-center px-10">
      <div className="xl:w-1/2 flex justify-center">
        <form
          onSubmit={onSubmit}
          className="bg-black bg-opacity-60 flex flex-col justify-center gap-8 items-center shadow-2xl rounded-lg w-11/12 max-w-lg 2xl:max-w-2xl text-start p-8 mt-28 mb-10"
        >
          <div>
            <h2 className="text-3xl font-bold">{t("contactUs.title")}</h2>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-center w-full">
              <label
                className="block text-white text-lg font-bold w-1/4"
                htmlFor="name"
              >
                {t("contactUs.name.name")}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder={t("contactUs.name.placeholder")}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs italic text-end mt-2">
                {errors.name}
              </p>
            )}
          </div>

          <div className="w-full">
            <div className="flex items-center justify-center w-full">
              <label
                className="block text-white text-lg font-bold w-1/4"
                htmlFor="email"
              >
                {t("contactUs.email.name")}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder={t("contactUs.email.placeholder")}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs italic text-end mt-2">
                {errors.email}
              </p>
            )}
          </div>

          <div className="w-full">
            <div className="flex items-center justify-center w-full">
              <label
                className="block text-white text-lg font-bold w-1/4"
                htmlFor="phone"
              >
                {t("contactUs.phone.name")}
              </label>
              <div className="flex w-full">
                <select
                  className="shadow appearance-none border rounded-l w-1/4 min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneCode"
                  name="phoneCode"
                  onChange={handleChange}
                  ref={phoneCodeRef}
                  required
                >
                  <option value="" disabled>
                    Code
                  </option>
                  {phoneCodes.map((code) => {
                    return (
                      <option
                        key={code.name + code.code}
                        selected={code.name === "Israel" ? true : false}
                        value={code.dial_code.substring(1)}
                      >
                        {code.emoji} {code.dial_code}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="shadow appearance-none border rounded-r w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder={t("contactUs.phone.placeholder")}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {errors.phoneCode && (
              <p className="text-red-500 text-xs italic text-end mt-2">
                {errors.phoneCode}
              </p>
            )}
            {errors.phone && (
              <p className="text-red-500 text-xs italic text-end mt-2">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="w-full">
            <div className="flex flex-col items-start justify-center w-full">
              <textarea
                maxLength={500}
                className="shadow appearance-none border resize-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                id="message"
                placeholder={t("contactUs.msg")}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs italic text-end mt-2">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between w-full">
            <button
              className="bg-blue-500 duration-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {t("contactUs.sendBtn")}
            </button>
          </div>
        </form>
      </div>

      <div className="w-fit h-full relative">
        <iframe         
          src="https://my.spline.design/911lapstogocopy-7cc0cfafba0fca15b5569de6d5fae99e/"
          // src="https://my.spline.design/911lapstogo-164067615931c022b15d8f226f7d8457/"
          className="mx-auto max-w-full"
          frameBorder="0"
          title="parking game"
          loading="lazy"
          width="750px"
          height="600px"
        ></iframe>
        <div className="flex absolute bg-black h-14 w-52 right-5 bottom-5 lg:h-10 lg:w-36 min-w-fit lg:right-3 lg:bottom-3 rounded-full items-center text-balance hover:scale-110 duration-300 hover:bg-slate-500 play-text uppercase font-semibold">
          <h2 className="flex justify-center w-full"> Press space <br/> to start </h2>
        </div>
      </div>
    </div>
  );
}
