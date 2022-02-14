import {
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkedAlt,
} from "react-icons/fa";
import photo from "./assets/img/timur_kodirov.jpg";

const contacts = [
  {
    name: "@tim356",
    link: "https://t.me/tim356",
    icon: FaTelegramPlane,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/timur-kodirov-83128b14b/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    link: "https://github.com/timmeno1",
    icon: FaGithub,
  },
];

const education = [
  {
    organization: "IT Incubator",
    speciality: "React Redux online course",
    years: "2020-2021",
  },
  {
    organization: "Tashkent University of IT",
    speciality: "Bachelors degree",
    years: "2011-2015",
  },
];

const skills = [
  {
    skill: "JavaScript",
    progress: 60,
  },
  {
    skill: "React",
    progress: 70,
  },
  {
    skill: "Redux",
    progress: 60,
  },
  {
    skill: "Html5",
    progress: 90,
  },
  {
    skill: "Css3",
    progress: 80,
  },
  {
    skill: "Tailwindcss",
    progress: 70,
  },
];

const expirience = [
  {
    organization: "Noname company",
    organizationType: "online game",
    role: "Freelance frontend developer part time",
    years: "december 2021",
    responsibilities: [
      "build frontend",
      "discuss design, UX advices",
      "deploy to netlify",
      "github private repo",
    ],
  },
  {
    organization: "Unifixrepairs",
    organizationType: "Smartphone repairs shop",
    role: "Freelance frontend developer part time",
    years: "march 2019 - october 2021",
    responsibilities: [
      "design custom layout on wordpress",
      "content",
      "custom secondary navigation with AJAX below WOOcommerce for mobile devices",
    ],
  },
  {
    organization: "Bookmaniya.com",
    organizationType: "books online shop",
    role: "Freelance frontend developer part time",
    years: "february 2018 - january 2019",
    responsibilities: [
      "seasonal theme changing",
      "optimize newsletter email template",
    ],
  },
];
const portfolioData = [
    {
      id: 1,
      name: "YT Shows",
      description: "",
      date: "jan 2022",
      link: "https://timmeno1-shows.netlify.app/",
    },
    {
      id: 2,
      name: "Game",
      description: "",
      date: "dec 2021",
      link: "https://adoring-yalow-6d03af.netlify.app/",
    },
    {
      id: 3,
      name: "Unifix Repairs",
      description: "",
      date: "jan 2019 - oct 2021",
      link: "https://unifixrepairs.com",
    },
  ];
  

export const CV = () => (
  <div className="text-slate-800 flex gap-4">
    <div className="left flex flex-col gap-4 items-center bg-indigo-200 min-h-screen px-4 py-2">
      <div className="w-56 h-56 rounded-full overflow-hidden flex items-center justify-center text-white bg-slate-700">
        <img src={photo} alt="" />
      </div>
      <div className="text-center font-semibold  uppercase">
        <h3 className="text-2xl">Kodirov Timur</h3>
        <h3 className="text-xl">Frontend developer</h3>
      </div>
      <div>
        <h3 className="text-xl text-center font-semibold">Contacts:</h3>
        <ul className="my-2">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;

            return (
              <li
                key={i}
                className="text-lg mb-1 flex gap-2 hover:text-red-500 items-center"
              >
                <Icon />
                <a href={contact.link}>{contact.name}</a>
              </li>
            );
          })}
          
          <li className="text-lg mb-1 flex gap-2 hover:text-red-500 items-center">
            <FaEnvelope />
            <span>stimka91@gmail.com</span>
          </li>
          <li className="text-lg mb-1 flex gap-2 hover:text-red-500 items-center">
            <FaMapMarkedAlt />
            <span>Gyeongju-si, South Korea</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold"> Language</h3>
        {[
          { lang: "russian", level: "native" },
          { lang: "english", level: "intermediate" },
          { lang: "korean", level: "begginer" },
        ].map((lang, i) => (
          <div key={i} className="capitalize text-lg">
            {lang.lang + " - " + lang.level}
          </div>
        ))}
      </div>
    </div>
    <div className="right flex flex-col min-h-screen p-4">
      <div className="text-lg  py-2">
        <h3 className="text-xl font-semibold uppercase mb-2 bg-indigo-200 px-4">
          Summary
        </h3>
        <p className="px-3">
          Frontend developer specializing in React Redux stack. Two year
          expirience of part-time/freelance job as frontend developer. Good
          understanding of how web applications work. Highly motivated to work
          in a team and to learn new technologies.
        </p>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-semibold uppercase mb-2 bg-indigo-200 px-4">
          Skills
        </h3>
        <div className="grid grid-cols-2 justify-items-center  divide-indigo-200">
          <ul className="list-inside list-disc px-4 col-span-1">
            <h4 className="text-lg font-semibold text-center"> Main skills</h4>
            {skills.map((skill, i) => (
              <li className="" key={i}>
                {skill.skill}
              </li>
            ))}
          </ul>
          <ul className="list-inside list-disc px-4 col-span-1">
            <h4 className="text-lg font-semibold text-center"> Additional skills</h4>
            {["Working from Linux", "Python Basics", "Ruby Basics", "SQL Basics", "Wordpress", "SEO Basics" ].map((skill,i)=>(<li key={i}>
                {skill}
            </li>))}
          </ul>
        </div>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-semibold uppercase mb-2 bg-indigo-200 px-4">
          Expirience
        </h3><ul className="list-disc list-inside px-3">
          {expirience.map((exp, i) => (
            <li key={i} className=" mb-1">
              <span className="text-lg font-semibold">{exp.organization}</span>
              <p>
                <span className="font-semibold capitalize">{exp.years}</span>{" "}
                {exp.role}
              </p>
              <ul  className="list-inside px-4">
                  {exp.responsibilities.map((resp,i)=>(<li key={i}>
                      {"- " + resp}
                  </li>))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className=" py-2">
        <h3 className="text-xl font-semibold uppercase mb-2 bg-indigo-200 px-4">
          Education
        </h3>
        <ul className="list-disc list-inside px-3">
          {education.map((edu, i) => (
            <li key={i} className=" mb-1">
              <span className="text-lg font-semibold">{edu.organization}</span>
              <p>
                <span className="font-semibold">{edu.years}</span>{" "}
                {edu.speciality}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-semibold uppercase mb-2 bg-indigo-200 px-4">
          Projects
        </h3>
        <ul className="list-disc list-inside px-3">
          {portfolioData.map((project, i) => (
            <li key={i} className=" mb-1">
              <span className="text-lg font-semibold">{project.name}</span>  {" "}
                <span className=" capitalize">{project.date}</span>
              <p>
              </p>
              <a className="text-indigo-600 underline" href={project.link}>{project.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
