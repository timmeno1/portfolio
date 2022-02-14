import destopClean from "../../assets/img/desk_clean.jpg";
import photo from "../../assets/img/timur_kodirov.jpg";
import Typewriter from "typewriter-effect";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { BiDownload } from "react-icons/bi";

const contacts = [
  {
    name: "telegram",
    link: "https://t.me/tim356",
    icon: FaTelegramPlane,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/timur-kodirov-83128b14b/",
    icon: FaLinkedinIn,
  },
  {
    name: "github",
    link: "https://github.com/timmeno1",
    icon: FaGithub,
  },
  {
    name: "email",
    link: "stimka91@gmail.com",
    icon: FaEnvelope,
  },
];

export const Home = () => {
  const openContacts = (name: string, link: string) => {
    if (name === "email") {
      window.location.href = "mailto:" + link;
    } else {
      window.open(link);
    }
  };

  return (
    <section
      id={"home"}
      className="container p-2 md:p-4 flex justify-center items-center relative h-screen"
    >
      <div className="absolute left-0 w-full h-full ">
        <img
          src={destopClean}
          alt="desktop splash image"
          className="object-cover h-full w-full object-center -z-10"
        />
        <div className="absolute bg-gradient-to-b from-slate-800/70 to-slate-600/50  bg-opacity-50 left-0 top-0 w-full h-full"></div>
      </div>
      <div className="pt-16 z-10 text-xl md:text-3xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Hello my name is Timur Kodirov. <br> I'm React developer.`
              )
              .start();
          }}
        />
      </div>
      <div
        onClick={() => {
          const location = document.getElementById("resume")?.offsetTop;
          window.scrollTo(
            location ? { top: location - 64, behavior: "smooth" } : undefined
          );
        }}
        className="absolute group cursor-pointer bottom-8 flex items-center justify-center left-1/2 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 group-hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
      <div className=" absolute top-16 mt-2 z-10 flex flex-col items-center">
        <div className="relative rounded-full w-56 h-56 overflow-hidden mb-4 bg-slate-800 flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full bg-slate-800/40" />
          <img src={photo} alt="photo of Timur Kodirov" />
        </div>
        <ul className="flex justify-center items-center gap-4 text-2xl">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <li key={i}>
                <a
                  href={
                    contact.name !== "email"
                      ? contact.link
                      : "mailto:" + contact.link
                  }
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={"/timur_kodirov_frontend_cv.pdf"}
          className="py-1 px-2 md:py-2 md:px-4 mt-4 rounded-lg flex items-center gap-x-1 select-none transition-all duration-300 hover:bg-indigo-600 hover:shadow-md hover:shadow-indigo-600/40 hover:active:shadow-none hover:active:bg-indigo-700 bg-indigo-500"
        >
          <span className="ml-1">Download CV </span>{" "}
          <BiDownload className="text-2xl" />
        </a>
      </div>
    </section>
  );
};
