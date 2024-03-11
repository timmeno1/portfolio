import ytshowsCover from "../../assets/img/yt_shows_cover.jpg";
import theGameCover from "../../assets/img/thegame_cover.jpg";
import unifixrepairsCover from "../../assets/img/unifixrepairs_cover.jpg";
import placeholder from "../../assets/img/desk_clean.jpg";
import pachkaCover from "../../assets/img/pachka_cover.jpg"

const portfolioData = [
  {
    id: 1,
    name: "YT Shows",
    description: "",
    date: "jan 2022",
    link: "https://timmeno1-shows.netlify.app/",
    img: ytshowsCover,
    span: 2,
  },
  {
    id: 2,
    name: "Game",
    description: "",
    date: "jan 2022",
    link: "https://adoring-yalow-6d03af.netlify.app/",
    img: theGameCover,
    span: 1,
  },
  {
    id: 3,
    name: "Unifix Repairs",
    description: "",
    date: "jan 2022",
    link: "https://unifixrepairs.com",
    img: unifixrepairsCover,
    span: 1,
  },
  {
    id: 4,
    name: "E-store",
    description: "",
    date: "#",
    link: "coming soon",
    img: placeholder,
    span: 2,
  },
  {
    id: 5,
    name: "Pachka snacks company website",
    description: "",
    date: "june 2022",
    link: "https://pachka.netlify.app/",
    img: pachkaCover,
    span: 1,
  },
];

export const Portfolio = () => {
  return (
    <section id={"portfolio"} className="container  p-2 md:p-4 min-h-screen ">
      <h3 className=" text-2xl uppercase text-center mb-4">Porfolio</h3>
      <div className="grid justify-items-stretch grid-cols-9 md:grid-cols-12 gap-6">
        {portfolioData.map((el, i, arr) => {
          let cardSpan;
          if (window.innerWidth < 768) {
            if (i !== arr.length - 1) {
              cardSpan = `span ${el.span * 3}`;
            } else {
              cardSpan = `span 9`;
            }
          } else {
            if (i !== arr.length - 1) {
              cardSpan = `span ${el.span * 4}`;
            } else {
              cardSpan = `span 12`;
            }
          }

          return (
            <div
              key={i}
              className={
                "relative group h-64  hover:ring hover:ring-teal-200 transition-all shadow-resume shadow-teal-200/20 duration-300 overflow-hidden rounded-md"
              }
              style={{ gridColumn: cardSpan }}
            >
              <img src={el.img} alt="" className="object-cover w-full h-full" />
              <div className="absolute top-0 w-full h-full flex items-end justify-center z-10 p-4 bg-slate-800 bg-opacity-40  transition-colors duration-300 group-hover:bg-slate-800 group-hover:bg-opacity-70">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-semibold text-center">
                    {el.name}
                  </h3>
                  {el.link === "coming soon" ? (
                    <h3 className="text-xl text-indigo-200 font-semibold text-center">
                      Coming soon
                    </h3>
                  ) : (
                    <a
                      className="py-1 px-2 md:py-2 md:px-4 flex items-center justify-center rounded-lg select-none transition-all duration-300 hover:bg-indigo-600 hover:ring-1 hover:ring-offset-1 hover:ring-offset-transparent hover:ring-teal-200/70 hover:active:ring-0  hover:active:bg-indigo-700 bg-indigo-500 "
                      href={el.link}
                      target="_blank"
                    >
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
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                      <span>Link</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
