import { ElementFlags } from "typescript";

const education = [
  {
    organization: "Self Study",
    speciality: "Django Rest Framework",
    years: "2023-present",
  },
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
  {
    organization: "Tashkent Professional College of IT",
    speciality: "High school",
    years: "2007-2010",
  },
];

const skills = [
  {
    skill: "React",
    progress: 70,
  },
  {
    skill: "Redux Toolkit",
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
  {
    skill: "Django-Rest-Framework",
    progress: 50,
  },
];

const expirience = [
  {
    organization: "Pachka.com",
    organizationType: "Snacks production company",
    role: "Freelance frontend developer part time",
    years: "2022",
    responsibilities: [
      "Design",
      "Build React App",
      "Deploy",
    ],
  },
  {
    organization: "Noname company",
    organizationType: "online game",
    role: "Freelance frontend developer part time",
    years: "dec 2021",
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
    years: "2019-2021",
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
    years: "2018-2019",
    responsibilities: [
      "seasonal theme changing",
      "optimize newsletter email template",
    ],
  },
];

type EducationCardPropsType = {
  education: Array<{ organization: string; speciality: string; years: string }>;
};

const EducationCard = (props: EducationCardPropsType) => {
  return (
    <div className="bg-slate-800 shadow-resume rounded-md  p-2 md:p-4 shadow-teal-200/30 hover:shadow-resume hover:shadow-teal-200/50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
      </div>
      <div className="text-indigo-200 text-base">
        {props.education.map((el, i) => (
          <div
            key={i}
            className="relative cursor-default my-2 p-4 group hover:ring rounded-md hover:ring-teal-200 transition-all duration-300"
          >
            <h3 className=" flex justify-center gap-x-2  items-center font-semibold text-lg text-teal-100 group-hover:text-indigo-400 group-hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" group-hover:rotate-90 transition-transform duration-300  h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="md:w-4/5 lg:w-auto">{el.organization}</span>
            </h3>
            <div className="group-hover:scale-105 transition-all text-center duration-300">
              <p className="cursor-text font-semibold ">{el.speciality}</p>
              <p className="cursor-text ">{el.years}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type SkillsCardPropsType = {
  skills: Array<{ skill: string; progress: number }>;
};
const SkillsCard = (props: SkillsCardPropsType) => {
  return (
    <div className="bg-slate-800 shadow-resume   rounded-md  p-2 md:p-4 shadow-teal-200/20 hover:shadow-resume hover:shadow-teal-200/50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold my-1">Skills</h2>
      </div>
      <div className="text-indigo-200 text-base">
        {props.skills.map((el, i) => (
          <div
            key={i}
            className="relative my-2 group cursor-default  rounded-md hover:ring hover:ring-teal-200 p-4 transition-all duration-300"
          >
            <div className="group-hover:rotate-90 transform transition-all duration-300 group-hover:text-indigo-400 absolute  top-5">
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
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className=" group-hover:text-indigo-400 pl-7 uppercase font-semibold text-lg text-teal-100">
              {el.skill}
            </h3>
            <div className="flex gap-x-2 justify-center items-baseline flex-row-reverse w-full pl-5 h-8 ">
              <div className="w-1/5  text-center ">{el.progress}%</div>
              <div className="relative transform ease-linear transition-transform duration-300 group-hover:scale-105 border-2 border-indigo-300  rounded-md h-3 w-4/5">
                <div
                  className="absolute -top-0.5 h-3 rounded-md bg-indigo-300 "
                  style={{ width: `${el.progress}%` }}
                />{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type ExperienceCardPropsType = {
  expirience: Array<{
    organization: string;
    organizationType: string;
    role: string;
    years: string;
    responsibilities: Array<string>;
  }>;
};

const ExpirienceCard = (props: ExperienceCardPropsType) => {
  return (
    <div className="bg-slate-800 shadow-resume rounded-md transform md:-translate-y-2  p-2 md:p-4 shadow-teal-200/30 hover:shadow-resume hover:shadow-teal-200/50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Expirience</h2>
      </div>
      <div className="text-indigo-200 text-base">
        {props.expirience.map((el, i) => (
          <div
            key={i}
            className="relative my-3 p-4 group rounded-md hover:ring hover:ring-teal-200 transition-all duration-300"
          >
            <h3 className=" flex flex-wrap justify-center gap-x-2  items-center font-semibold text-lg text-teal-100 group-hover:text-indigo-400 group-hover:scale-105 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" group-hover:rotate-90 transition-transform duration-300  h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <span>{el.organization}</span>
              <span className="text-base font-normal">{el.years}</span>
            </h3>
            <div className="">
              <p className="group-hover:scale-105 transition transform duration-300">
                <strong className="text-teal-100 font-semibold uppercase">
                  Role:
                </strong>{" "}
                {el.role}
              </p>
              <div>
                <h4 className=" group-hover:scale-105 transform transition-transform duration-300 text-teal-100 font-semibold uppercase">
                  Responsibilites:
                </h4>
                <ul className="list-disc pl-4">
                  {el.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="group-hover:scale-105  transform transition-transform duration-300"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Resume = () => {
  return (
    <section
      id={"resume"}
      className="container  p-2 md:p-4 min-h-screen justify-center "
    >
      <h3 className=" text-2xl uppercase text-center mb-4">Resume</h3>
      <div className="p-2 md:p-4 grid justify-center content-center items-start gap-8 grid-cols-1 md:grid-cols-3">
        <EducationCard education={education} />
        <ExpirienceCard expirience={expirience} />
        <SkillsCard skills={skills} />
      </div>
    </section>
  );
};
