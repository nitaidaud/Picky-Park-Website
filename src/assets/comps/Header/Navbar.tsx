export default function Navbar() {
  return (
    <nav className="bg-transparent backdrop-blur-3xl fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className={"flex items-center space-x-3 rtl:space-x-reverse"}
        >
          <img
            loading="lazy"
            src="..\Images\pickyLogoImgFixed.png"
            alt="Picky Logo"
            width={100}
            height={100}
          />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="mailto:contact@pickyil.online"
            className="contact-btn uppercase text-white font-medium rounded-full hover:ease-in-out hover:border-transparent text-sm px-4 py-2 text-center duration-300"
          >
            Contact Us
          </a>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="nav-links flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-extralight">
            <a
              href="#"
              className="border-2 p-2 rounded-2xl border-transparent hover:border-white hover:bg-white duration-300"
              aria-current="page"
            >
              <li className="block py-2 px-3 text-white md:p-0 duration-300 ">
                Home
              </li>
            </a>

            <a
              href="#about"
              className="border-2 p-2 rounded-2xl border-transparent hover:border-white hover:bg-white duration-300"
            >
              <li className="block py-2 px-3 text-white md:p-0 duration-300 ">
                About
              </li>
            </a>

            <a
              href="https://apps.apple.com/il/app/picky-park/id6476976854"
              target="_blank"
              className="border-2 p-2 rounded-2xl border-transparent hover:border-white hover:bg-white duration-300"
            >
              <li className="block py-2 px-3 text-white md:p-0 duration-300 ">
                Download
              </li>
            </a>

            <a
              href="#"
              className="border-2 p-2 rounded-2xl border-transparent hover:border-white hover:bg-white duration-300"
            >
              <li className="block py-2 px-3 text-white md:p-0 duration-300 ">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
