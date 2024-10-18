import Link from "next/link";

export default function Home() {
  const langArray = [
    { name: "HTML", icon: "/assets/images/icon-html.svg", color: "bg-html-bg" },
    { name: "CSS", icon: "/assets/images/icon-css.svg", color: "bg-css-bg" },
    {
      name: "JavaScript",
      icon: "/assets/images/icon-javascript.svg",
      color: "bg-js-bg",
    },
    {
      name: "Accessibility",
      icon: "/assets/images/icon-accessibility.svg",
      color: "bg-accessibility-bg",
    },
  ];

  return (
    <section className="box-border lg:h-5/6 flex flex-col lg:flex-row justify-center items-center py-8">
      <div className="w-full lg:w-1/2 min-h-[50vh] flex flex-col items-center">
        <h1 className="text-text-color text-[3rem] lg:text-[4rem] leading-snug lg:leading-tight tracking-wider dark:text-white">
          Welcome to the <span className="font-semibold">Frontend Quiz!</span>
        </h1>
        <p className="text-left w-full mt-16 italic text-text-color-p dark:text-white/50">
          Pick a subject to get started.
        </p>
      </div>
      <div className="w-full lg:w-1/2 gap-6 lg:min-h-[50vh] flex flex-col justify-between">
        {langArray.map((lang) => (
          <Link
            href={lang.name}
            key={lang.name}
            className="bg-white flex items-center gap-12 rounded-lg w-full min-h-16 px-5 py-3 shadow-[0_0_9px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.2)] cursor-pointer duration-300"
          >
            <div className={`p-1 ${lang.color} rounded-lg`}>
              <img
                src={lang.icon}
                alt={lang.name.toLocaleLowerCase()}
                className="w-10 h-10"
              />
            </div>
            <p className="text-text-color uppercase text-2xl font-medium">
              {lang.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
