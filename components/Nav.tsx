"use client";

import useStore from "@/lib/store";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type languageBg = {
  "/HTML": string;
  "/CSS": string;
  "/JavaScript": string;
  "/Accessibility": string;
};

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const subject = useStore((state) => state.subject);
  const updateSubject = useStore((state) => state.updateSubject);
  const path = usePathname() || "";

  const langBgColor: languageBg = {
    "/HTML": "bg-html-bg",
    "/CSS": "bg-css-bg",
    "/JavaScript": "bg-js-bg",
    "/Accessibility": "bg-accessibility-bg",
  };

  useEffect(() => {
    if (path === "/result") {
      return;
    } else {
      const newPath = path.replace("/", "");
      updateSubject(newPath);
    }
  }, [path, updateSubject]);

  return (
    <nav className="w-full h-1/6 flex items-center justify-between">
      <div className="flex items-center gap-4 lg:gap-6">
        {subject && path !== "/result" && (
          <>
            <div
              className={`${
                langBgColor[path as keyof languageBg]
              } rounded-lg p-1`}
            >
              <Image
                src={`/assets/images/icon-${path
                  .replace("/", "")
                  .toLocaleLowerCase()}.svg`}
                alt="icon"
                width={28}
                height={28}
                className="lg:w-[36px] lg:h-[36px]"
              />
            </div>
            <h1 className="text-text-color text-xl lg:text-3xl font-bold dark:text-white">
              {path.replace("/", "")}
            </h1>
          </>
        )}
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image
          src={`/assets/images/icon-sun-${
            theme === "light" ? "dark" : "light"
          }.svg`}
          alt="Moon"
          width={32}
          height={32}
        />
        <button
          className="relative bg-purple w-12 lg:w-14 h-5 lg:h-6 rounded-full flex items-center px-1"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <span
            className={`bg-white w-4 lg:w-5 h-4 lg:h-5 inline-block rounded-full absolute ${
              theme === "light" ? "left-1" : "right-1"
            }`}
          ></span>
        </button>
        <Image
          src={`/assets/images/icon-moon-${
            theme === "light" ? "dark" : "light"
          }.svg`}
          alt="Moon"
          width={32}
          height={32}
        />
      </div>
    </nav>
  );
};

export default Nav;
