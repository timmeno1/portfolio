import destopClean from "../../assets/img/desk_clean.jpg";
import Typewriter from "typewriter-effect";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

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
  const openContacts = (name:string, link: string) => {
    if ( name === "email" ) {
      window.location.href = 'mailto:' + link;
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
          alt=""
          className="object-cover h-full w-full object-center -z-10"
        />
        <div className="absolute bg-gradient-to-b from-slate-800/70 to-slate-600/50  bg-opacity-50 left-0 top-0 w-full h-full"></div>
      </div>
      <div className="pt-16 z-10 text-xl md:text-3xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Hello my name is Timur Kodirov. <br> I'm react developer.`
              )
              .start();
          }}
        />
      </div>
      <div className="absolute bottom-8 flex items-center justify-center left-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      <div className=" absolute top-4 z-10">
        <ul className="flex justify-center gap-4 text-2xl">
          {contacts.map((contact,i) => {
            const Icon = contact.icon
            return <li key={i}>
              <a href={contact.name!=="email" ? contact.link : "mailto:"+ contact.link} >
                <Icon />
              </a>
            </li>;
          })}
        </ul>
      </div>
    </section>
  );
};
